/*
 * @Author: TerryMin
 * @Date: 2021-12-30 13:58:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 14:47:52
 * @Description: file not
 */
// 包含多个reducer函数的文件
import { INCREMENT, DECREMENT } from './action-types'

export function counter (state = 0, action) {
  console.log(state,action);
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      if (state - action.data >= 0) {
        return state - action.data
      } else {
        alert('次数不能为负！')
        return state
      }
    // break
    default:
      return state
  }
}

