/*
 * @Author: TerryMin
 * @Date: 2021-12-30 13:58:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 14:10:48
 * @Description: file not
 */
import { number } from "prop-types"
// 包含所有的action对象

import { INCREMENT, DECREMENT } from "./action-types"

// 增加的action
export const incrementAction = (number) => ({
  type: INCREMENT,
  data: number
})
// 减少的action
export const decrementAction = (number) => ({
  type: DECREMENT,
  data: number
})
// 异步延时增加
export const delayAddAction = (number) => {
  return dispatch => {
    setTimeout(() => {
      // 所有的异步action  都有同步action去分事件
      dispatch(incrementAction(number))
    }, 1000);
  }
}

