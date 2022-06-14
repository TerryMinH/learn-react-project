/*
 * @Author: TerryMin
 * @Date: 2022-03-14 10:12:24
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-14 10:12:24
 * @Description: file not
 */
import React, { useState, useEffect } from 'react'

const usePerson = (name) => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setPerson({ name })
    }, 2000)
  }, [name])
  return [loading, person]
}

const AsyncPage = ({ name }) => {
  const [loading, person] = usePerson(name)
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{person.name}</p>}
    </div>
  )
}

const PersonPage = () => {
  const [state, setState] = useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <div>
      <AsyncPage name={state} />
      <button onClick={() => { changeName('名字1') }}>名字1</button>
      <button onClick={() => { changeName('名字2') }}>名字2</button>
    </div>
  )
}

export default PersonPage 
