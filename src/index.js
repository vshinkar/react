/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AttributesBlock from './containers/App';
import SpecificationBlock from './containers/Spec';
import TitleBlock from './containers/Title';
import FptBlock from './containers/Fpt';

import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <AttributesBlock />
  </Provider>,
  document.getElementById('attributes')
);

ReactDOM.render(
  <Provider store={store}>
    <SpecificationBlock />
  </Provider>,
  document.getElementById('specificationBlock')
);

ReactDOM.render(
  <Provider store={store}>
    <TitleBlock />
  </Provider>,
  document.getElementById('product_attribute_name')
);

ReactDOM.render(
  <Provider store={store}>
    <FptBlock />
  </Provider>,
  document.getElementById('fpt_block')
);
