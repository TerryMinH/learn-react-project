/*
 * @Author: TerryMin
 * @Date: 2020-11-04 16:02:38
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 14:12:36
 * @Description: file not
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store'
import App3 from './containers/App3'
// import TestLogic from './containers/TestLogic'

render(
  <Provider store={store}>
    <App3 />
    {/* <TestLogic /> */}
  </Provider>,
  document.getElementById('root')
)