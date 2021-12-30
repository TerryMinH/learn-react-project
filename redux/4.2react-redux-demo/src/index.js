/*
 * @Author: TerryMin
 * @Date: 2020-11-04 16:02:38
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-29 17:34:56
 * @Description: file not
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './containers/App'
import TestLogic from './containers/TestLogic'

render(
  <Provider store={store}>
    {/* <App /> */}
    <TestLogic />
  </Provider>,
  document.getElementById('root')
)