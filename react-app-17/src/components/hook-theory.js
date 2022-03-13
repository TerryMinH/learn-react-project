/*
 * @Author: TerryMin
 * @Date: 2022-03-13 10:31:45
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-13 15:44:40
 * @Description:react常用钩子及基本原理 https://blog.csdn.net/chenzhizhuo/article/details/104159910
 */
import React from 'react'
import ReactDOM from "react-dom";
import App from '../App';

/**
 * @func: useMyState
 * @descripition: 我们实现一个简易版的useState https://juejin.cn/post/6888151308994838536
 */
let memoizedStates = []  // 多个useState 时需要使用数组来存
let index = 0;
const rootElement = document.getElementById('root');

const render = () => {
  index = 0;
  ReactDOM.render(<App />, rootElement)
}

const useMyState = (initialState) => {
  console.log(initialState, index);
  console.log(memoizedStates[index]);

  const currentIndex = index;//记录index
  memoizedStates[currentIndex] = memoizedStates[currentIndex] || initialState;
  console.log(memoizedStates[currentIndex]);

  const setState = (newState) => {
    console.log(newState);
    memoizedStates[currentIndex] = newState;
    render();
  }
  index += 1;
  
  return [memoizedStates[currentIndex], setState]
}

export {
  useMyState
}





