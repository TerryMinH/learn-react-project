/*
 * @Author: TerryMin
 * @Date: 2021-12-26 13:18:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-30 13:28:16
 * @Description: file not
 */
import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, completedCount, actions }) =>
  (
    <section className="main">
      {
        !!todosCount && 
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            // checked={completedCount === todosCount}
            // readOnly
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;