import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <button className={`button ${this.props.className}`} onClick={this.props.onClick}>
          {this.props.icon ? (
            <span className="button-icon">
              <i className={this.props.icon} />
            </span>
          ) : (
            ""
          )}
          <span className="button-title">{this.props.text}</span>
        </button>
      </React.Fragment>
    );
  }
}

Button.defaulPops = {
  text: undefined,
  onClick: undefined,
  className: "is-primary",
  icon: undefined,
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.any,
  className: PropTypes.string,
};
export default Button;
