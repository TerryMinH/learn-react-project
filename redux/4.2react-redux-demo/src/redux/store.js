/*
 * @Author: TerryMin
 * @Date: 2021-12-01 13:24:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 14:12:07
 * @Description: file not
 */
import { createStore, applyMiddleware } from 'redux'
import { counter } from './reducers'
import thunk from 'redux-thunk'

// 生成一个store对象，连接管理员counter
const store = createStore(
  counter,
  applyMiddleware(thunk)
)
// console.log(store)

export default store

