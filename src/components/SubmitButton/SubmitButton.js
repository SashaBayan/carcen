import React, { PropTypes } from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import { Button } from 'react-bootstrap';

let SubmitButton = ({ disabled, children, onClick }) => (
  <Button disabled={disabled} onClick={onClick} styleName="button">
    { children }
  </Button>
);

SubmitButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

SubmitButton = CSSModules(SubmitButton, styles, { errorWhenNotFound: false });

export default SubmitButton;
