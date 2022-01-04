/*
 * @Author: TerryMin
 * @Date: 2021-12-26 13:18:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-04 11:06:30
 * @Description: file not
 */
export const CHANGEDECREASE = 'changeDecrease';
export const CHANGEINCREASE = 'changeIncrease';
let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const changeNumber = (type) => ({
  type: type
})