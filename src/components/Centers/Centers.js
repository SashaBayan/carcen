import React, { PropTypes } from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import Center from '../Center/Center'
import { map } from 'lodash';

let Centers = ({ data }) => {
  const centers = map(data, (center, key) => <Center key={key} {...center} /> );
  return (
    <div styleName="container">
      { centers.length > 0 ?
          <div styleName="text">
            Las siguientes clínicas pueden proporcionar el cuidado dental que necesita
            (Por favor trabaje con su Promotora y Administrador de Casos para encontrar
              una clinica que está aceptando nuevos pacientes):
          </div>
          :
          null
      }
      <div> { centers } </div>
    </div>
  )
}

Centers.propTypes = {
  data: PropTypes.array,
};

Centers = CSSModules(Centers, styles, { errorWhenNotFound: false });

export default Centers;
