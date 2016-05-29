import React from 'react';
import { connect } from 'react-redux';
import CriteriaButtons from './CriteriaButtons/CriteriaButtons';
import SubmitButtonContainer from './SubmitButtonContainer/SubmitButtonContainer';
import CentersContainer from './CentersContainer/CentersContainer';
import { Col, Row } from 'react-bootstrap';

import needs from '../data/needs.json';
import languages from '../data/languages.json';
import insurances from '../data/insurances.json';
// TODO: wrap App in routes when routing is implemented
// import { Link, RouteHandler } from 'react-router';

@connect(mapStateToProps)
class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>
            <CriteriaButtons criteria={needs} type="need" />
            <CriteriaButtons criteria={languages} type="language" />
            <CriteriaButtons criteria={insurances} type="insurance" />
            <SubmitButtonContainer> Submit </SubmitButtonContainer>
          </Col>
          <Col xs={9}>
            <CentersContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default App;
