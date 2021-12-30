/*
 * @Author: TerryMin
 * @Date: 2021-12-14 17:26:05
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-29 15:42:59
 * @Description: file not
 */
// import React, { useState, createRef, useRef, useEffect } from 'react';
import React, { useState } from 'react';

function Child1 () {
  const [name, setName] = useState('App')
  console.log('child1')
  return (
    <div className="App">
      <Foo name="TerryMin"/>
      <button onClick={() => setName("aaa")}>
        {name}
      </button>
    </div>
  )
}

function Foo (props) {
  console.log(props);
  console.log("Foo render");

  return (
    <div>
      <h1> Foo </h1>
    </div>
  );
}

export default Child1