import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  editItem = (state) => {
    alert("edit")
  }

  cssStockLevel() {
    switch(this.props.state) {
      case 'in_stock':
        return "box green";
      case 'running_out':
        return "box amber";
      case 'out_of_stock':
        return "box red";
    }
  }

  render() {
    return (
      <div className={"container margin-up"}>
        <div className={"input-group"}>
          <span className={this.cssStockLevel()}></span><input type={"text"} defaultValue={this.props.name} className={"form-control"} aria-label={"Text input with dropdown button"} placeholder={"item name"}/>
          <div className={"input-group-append"}>
            <button className={"btn btn-outline-secondary dropdown-toggle"} type={"button"} data-toggle={"dropdown"} aria-haspopup={"true"} aria-expanded={"false"}>update</button>
            <div className={"dropdown-menu"}>
              <ul>
                <li className={"dropdown-item"} onClick={() => this.editItem(2)}>In stock</li>
                <li className={"dropdown-item"} onClick={() => this.editItem(1)}>Running out</li>
                <li className={"dropdown-item"} onClick={() => this.editItem(0)}>Out of stock</li>
              </ul>
              <div role={"separator"} className={"dropdown-divider"}></div>
              <a className={"dropdown-item"} href={"#"}>Delete</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
  csrf_token: PropTypes.string.isRequired
};