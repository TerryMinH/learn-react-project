/*
 * @Author: TerryMin
 * @Date: 2021-12-01 13:23:56
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-02 11:22:38
 * @Description: file not
 */
// 包含多个reducer函数的文件
import { CHANGECOLOR } from './action-types'

export function isChange (state = true, action) {
  switch (action.type) {
    case CHANGECOLOR:
      return !state
    default:
      return state
  }
}

