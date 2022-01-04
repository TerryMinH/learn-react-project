/*
 * @Author: TerryMin
 * @Date: 2021-12-01 13:24:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 17:42:18
 * @Description: file not
 */
import { createStore, applyMiddleware } from 'redux'
import { isNumber } from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
  isNumber,
  applyMiddleware(thunk) // 应用异步中间件
)

export default store;

