import React from 'react';
import PropTypes from 'prop-types';
import Create from './Create';
import Item from './Item';

export default class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: null
    }
  }

  componentDidMount() {
    this.get_items();
  }

  get_items() {
    fetch('/item/get_items', {
      method: 'post',
      headers: {'Content-Type':'application/json', 'X-CSRF-Token': this.props.csrf_token},
      body: JSON.stringify({user_id: this.props.user_id}),
      credentials: 'same-origin'
    }).then(function(response) {
      return response.json();
    }).then(data => {
      this.setState({
        items: data.items
      })
    }).catch(err => {
      console.log('error: ', err);
    });
  }

  renderItems() {
    if (this.state.items == null) {
      return null
    }

    return (
      <div>
      {
        this.state.items.map((i) => {
          return <Item
            key={i.id}
            name={i.name}
            state={i.state}
            user_id={this.props.user_id}
            csrf_token={this.props.csrf_token}
            />
        })
      }
      </div>
    )
  }

  update = () => {
    this.get_items();
  }

  render() {
    console.log(this.state.items);

    return(
      <div>
        <Create
          onCreate={this.update}
          user_id={this.props.user_id}
          csrf_token={this.props.csrf_token}
        />
        {this.renderItems()}
      </div>
    )
  }
};

List.propTypes = {
  user_id: PropTypes.number.isRequired,
  csrf_token: PropTypes.string.isRequired
};