/*
 * @Author: TerryMin
 * @Date: 2020-11-04 16:02:38
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-31 10:43:56
 * @Description: file not
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainApp from './containers/MainApp'

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
)