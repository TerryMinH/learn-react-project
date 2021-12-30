/*
 * @Author: TerryMin
 * @Date: 2021-12-01 13:23:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 13:33:59
 * @Description: file not
 */
import { CHANGECOLOR, CHANGEDECREASE, CHANGEINCREASE } from './action-types'

export const changeColor = () => ({
  type: CHANGECOLOR,
});
export const changeNumber = (type,action) => ({
  type:type
})
