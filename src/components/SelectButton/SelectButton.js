import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import { Button } from 'react-bootstrap';

class SelectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
  }
  handleClick() {
    this.toggleSelected();
    this.props.onClick();
  }
  toggleSelected() {
    this.state.selected = !this.state.selected;
  }
  render() {
    const { disabled, pressed, children, onClick } = this.props;
    return (
      <Button styleName="button" disabled={disabled} onClick={this.handleClick}>
        { children }
        { this.state.selected ? <img src="./assets/images/checkMark.svg" /> : null}
      </Button>
    )
  }
};

SelectButton.propTypes = {
  pressed: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

SelectButton = CSSModules(SelectButton, styles, { errorWhenNotFound: false });

export default SelectButton;
