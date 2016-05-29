import React, { PropTypes } from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';

let Center = ({ name, address, phone }) => {
  return (
    <div styleName="container">
      <div styleName="name"> { name } </div>
      <div styleName="address"> { address } </div>
      <div styleName="phone"> { phone } </div>
    </div>
  )
}

Center.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
};

Center = CSSModules(Center, styles, { errorWhenNotFound: false });

export default Center;
