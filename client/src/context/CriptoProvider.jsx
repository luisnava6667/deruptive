/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import ApiCripto from '../api/ApiCripto'

const CriptoContext = createContext()
const CriptoProvider = ({ children }) => {
  const [cripto, setCripto] = useState([])
  useEffect(() => {
    const getCripto = async () => {
      const { data } = await ApiCripto.get('/assets')

      console.log(data.data)
      setCripto(data.data)
    }
    getCripto()
  }, [])
  const criptoFilter = cripto.filter(
    (cripto) =>
      cripto.symbol === 'BTC' ||
      cripto.symbol === 'ETH' ||
      cripto.symbol === 'ADA'
  )
  console.log(criptoFilter)
  return (
    <CriptoContext.Provider value={{ criptoFilter }}>
      {children}
    </CriptoContext.Provider>
  )
}
export { CriptoProvider }
export default CriptoContext
