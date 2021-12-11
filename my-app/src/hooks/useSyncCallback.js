/*
 * @Author: TerryMin
 * @Date: 2021-10-11 11:32:31
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-10-11 14:26:50
 * @Description: 用法 const newFunc = useSyncCallback(yourCallback)
 */
import { useEffect, useState, useCallback } from 'react'

const useSyncCallback = callback => {
  console.log(callback)
  const [proxyState, setProxyState] = useState({ current: false })

  const Func = useCallback(() => {
    setProxyState({ current: true })
  }, [proxyState])

  useEffect(() => {
    console.log(proxyState);
    if (proxyState.current === true) setProxyState({ current: false })
  }, [proxyState])

  useEffect(() => {
    proxyState.current && callback()
  })

  return Func
};

export default useSyncCallback