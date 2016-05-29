import React, { PropTypes } from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import Center from '../Center/Center'
import { map } from 'lodash';

let Centers = ({ data }) => {
  const centers = map(data, (center, key) => <Center key={key} {...center} /> );
  return <div styleName="container"> { centers } </div>
}

Centers.propTypes = {
  data: PropTypes.array,
};

Centers = CSSModules(Centers, styles, { errorWhenNotFound: false });

export default Centers;
