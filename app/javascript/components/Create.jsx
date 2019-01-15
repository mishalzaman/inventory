import React from 'react';
import PropTypes from 'prop-types';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  static propTypes = {
    user_id: PropTypes.string.isRequired
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  addItem = (state) => {
    const itemName = document.getElementById("newItemName").value;

    if (itemName == '') {
      alert("item name is empty!");
      return;
    }

    const post = {
      name: itemName,
      state: state,
      user_id: this.props.user_id
    }

    fetch('/item/add', {
      method: 'post',
      headers: {'Content-Type':'application/json', 'X-CSRF-Token': this.props.csrf_token},
      body: JSON.stringify(post),
      credentials: 'same-origin'
    }).then(function(response) {
      return response.json();
    });
    this.toggleForm();
  }
  
  form() {
    return (
      <div>
        <div className={"input-group"}>
          <input type={"text"} className={"form-control"} id={"newItemName"} aria-label={"Text input with dropdown button"} placeholder={"item name"}/>
          <div className={"input-group-append"}>
            <button className={"btn btn-outline-secondary dropdown-toggle"} type={"button"} data-toggle={"dropdown"} aria-haspopup={"true"} aria-expanded={"false"}>Dropdown</button>
            <div className={"dropdown-menu"}>
              <ul>
                <li className={"dropdown-item"} onClick={() => this.addItem(2)}>In stock</li>
                <li className={"dropdown-item"} onClick={() => this.addItem(1)}>Running out</li>
                <li className={"dropdown-item"} onClick={() => this.addItem(0)}>Out of stock</li>
              </ul>
              <div role={"separator"} className={"dropdown-divider"}></div>
              <a className={"dropdown-item"} href={"#"}>Cancel</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  addNewButton() {
    return (
      <div>
        <button type={"button"} className={"btn btn-primary"} onClick={this.toggleForm}>+</button>
      </div>
    );
  }

  render() {
    return (
      <div className={"container"}>
        {
          this.state.showForm ?
          this.form() : this.addNewButton()
        }
      </div>
    );
  }
}

Create.propTypes = {
  user_id: PropTypes.number.isRequired,
  csrf_token: PropTypes.string.isRequired
};