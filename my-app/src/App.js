/*
 * @Author: TerryMin
 * @Date: 2021-09-26 18:08:45
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-03 16:08:04
 * @Description: file not
 */
import React, { useEffect, useState, useCallback } from 'react'
import useSyncCallback from './hooks/useSyncCallback';

console.log(process.env)
console.log(process)

function App () {
  const [state, setstate] = useState(0);

  const setT = () => {
    setstate(state + 1);
    // setTimeout(() => { func() }, 100)
    func(22);
  };

  // const func = () => {
  //   console.log(state);
  // };
  const func = useSyncCallback(() => {
    console.log(state);
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={setT}>set 2</button>
      </header>
    </div>
  );
}

export default App;
