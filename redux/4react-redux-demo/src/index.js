/*
 * @Author: TerryMin
 * @Date: 2020-11-04 16:02:38
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-02 10:55:29
 * @Description: file not
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './containers/App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)