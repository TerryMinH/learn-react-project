/*
 * @Author: TerryMin
 * @Date: 2021-12-30 13:58:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 17:39:49
 * @Description: file not
 */
import { CHANGENUMBER } from './action-types'

export const changeNumber = (targetValue) => ({
  type: CHANGENUMBER,
  data: targetValue
})

export const changeNumberAsync = (targetValue) => {
  return dispatch => {
    // 这里面写异步代码
    setTimeout(
      () => {
        // 输入的2秒后分发同步action，执行数字显示
        dispatch(changeNumber(targetValue))
      }, 2000
    )
  }
}