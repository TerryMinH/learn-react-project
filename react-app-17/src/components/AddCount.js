/*
 * @Author: TerryMin
 * @Date: 2021-12-14 17:26:05
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-14 10:05:35
 * @Description: file not
 */
import React from 'react';
import { useMyState } from './hook-theory'

const AddCount = () => {
  const [count, setCount] = useMyState(0);
  const addCount = () => {

    setCount(count + 1)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}>count++</button>
    </>
  )
}

export {
  AddCount
}

