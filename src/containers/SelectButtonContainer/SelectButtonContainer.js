import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as criteriaActions from '../../actions/criteria';
import { bindActionCreators } from 'redux';
import SelectButton from '../../components/SelectButton/SelectButton';
import { includes } from 'lodash';

class SelectButtonContainer extends Component {
  handleClick(criterion) {
    const { type, actions, patient } = this.props;
    const {
      addNeed,
      addLanguage,
      addInsurance,
      removeNeed,
      removeLanguage,
      removeInsurance,
    } = actions;
    if (type === 'need') {
      if (includes(patient.criteria.needs, criterion)) {
        removeNeed(criterion);
      } else {
        addNeed(criterion);
      }
    }
    if (type === 'language') {
      if (includes(patient.criteria.languages, criterion)) {
        removeLanguage(criterion);
      } else {
        addLanguage(criterion);
      }
    }
    if (type === 'insurance') {
      if (includes(patient.criteria.insurances, criterion)) {
        removeInsurance(criterion);
      } else {
        addInsurance(criterion);
      }
    }
  }
  render() {
    const { criterion } = this.props;
    return (
      <SelectButton
        pressed={false}
        onClick={() => this.handleClick(criterion.english)}
      >
        {criterion.spanish}
      </SelectButton>
    )
  }
}

SelectButtonContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectButtonContainer);

