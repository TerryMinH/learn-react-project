/*
 * @Author: TerryMin
 * @Date: 2021-12-26 13:18:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-02 11:12:03
 * @Description: file not
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import reducer from './reducers'
import MainApp from './containers/MainApp'

const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
)
