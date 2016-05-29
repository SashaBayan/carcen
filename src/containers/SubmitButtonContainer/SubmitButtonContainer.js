import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as criteriaActions from '../../actions/criteria';
import { bindActionCreators } from 'redux';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { map } from 'lodash';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
class SubmitButtonContainer extends Component {
  render() {
    const { children, actions } = this.props;
    const { findMatches } = actions;
    return (
      <div styleName="container">
        <SubmitButton
          pressed={false}
          onClick={findMatches}
        >
          {children}
        </SubmitButton>
      </div>
    )
  }
}

SubmitButtonContainer.propTypes = {
  actions: PropTypes.object,
  criterion: PropTypes.string,
  className: PropTypes.string,
  dropDownIsOpen: PropTypes.bool,
  isFetching: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    patient: {...state.patients},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...criteriaActions }, dispatch),
  };
}

export default SubmitButtonContainer;

