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
        items: data
      })
    }).catch(err => {
      console.log('error: ', err);
    });
  }

  render() {
    return(
      <div>
        <Create
          user_id={this.props.user_id}
          csrf_token={this.props.csrf_token}
        />
        {this.state.items &&
          <Item
          name={"test name"}
          state={0} 
          user_id={this.props.user_id}
          csrf_token={this.props.csrf_token}
          />
        }
      </div>
    )
  }
};

List.propTypes = {
  user_id: PropTypes.number.isRequired,
  csrf_token: PropTypes.string.isRequired
};