import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import SelectButtonContainer from '../SelectButtonContainer/SelectButtonContainer';
import styles from './styles.scss';
import { map } from 'lodash';

let CriteriaButtons = ({ criteria, type }) => {
  const buttons = map(criteria, (criterion, key) => (
    <SelectButtonContainer id={`${type}-${key}`} criterion={criterion} type={type} styleName="buttons" />
    )
  );
  return (
    <div styleName="containter">
      <div styleName="title"> Select your {type}s </div>
      <div styleName="buttons"> { buttons } </div>
    </div>
  );
};

CriteriaButtons.propTypes = {
  type: PropTypes.string,
  criteria: PropTypes.array,
};

CriteriaButtons = CSSModules(CriteriaButtons, styles, { errorWhenNotFound: false });

export default CriteriaButtons;

