/*
 * @Author: TerryMin
 * @Date: 2021-12-01 13:23:56
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 13:58:24
 * @Description: file not
 */
// 包含多个reducer函数的文件
import { CHANGECOLOR, CHANGEDECREASE, CHANGEINCREASE } from './action-types'

export function isChange (state = true, action) {
  console.log(state, action)
  switch (action.type) {
    case CHANGECOLOR:
      return !state
    default:
      return state
  }
}

export function dealNumber (state = 0, action) {
  console.log(state, action)
  switch (action.type) {
    case CHANGEDECREASE:
      return state + 1;
    case CHANGEINCREASE:
      return state - 1;
    default:
      return state
  }
}