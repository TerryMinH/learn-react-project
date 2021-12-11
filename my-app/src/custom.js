/*
 * @Author: TerryMin
 * @Date: 2021-07-16 15:44:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-07-16 15:44:29
 * @Description: file not
 */
import React, { useState, useEffect, memo, useMemo, createContext, useRef, useContext } from 'react'

export default function toggleHook (initial) {
  const [on, setOn] = useState(initial);
  return [on, () => setOn(!on)]
}
