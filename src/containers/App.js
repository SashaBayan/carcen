import React from 'react';
import { connect } from 'react-redux';
import CriteriaButtons from './CriteriaButtons/CriteriaButtons';
import SubmitButtonContainer from './SubmitButtonContainer/SubmitButtonContainer';
import CentersContainer from './CentersContainer/CentersContainer';
import { Col, Row } from 'react-bootstrap';
import styles from './Main.scss';
import CSSModules from 'react-css-modules'

import needs from '../data/needs.json';
import languages from '../data/languages.json';
import insurances from '../data/insurances.json';
// TODO: wrap App in routes when routing is implemented
// import { Link, RouteHandler } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>
            <div styleName="need">
              <CriteriaButtons criteria={needs} type="need" />
            </div>
            <div styleName="language">
              <CriteriaButtons criteria={languages} type="language" />
            </div>
            <div styleName="insurance">
              <CriteriaButtons criteria={insurances} type="insurance" />
            </div>
            <div styleName="submit">
              <SubmitButtonContainer> Submit </SubmitButtonContainer>
            </div>
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

App = CSSModules(App, styles, { errorWhenNotFound: false });
export default connect(mapStateToProps)(App);
