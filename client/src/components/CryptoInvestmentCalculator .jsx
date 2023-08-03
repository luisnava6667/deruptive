/* eslint-disable no-unused-vars */
import { useState } from 'react'

const CryptoInvestmentCalculator = () => {
  const [bitcoinAmount, setBitcoinAmount] = useState(0)
  const [etherAmount, setEtherAmount] = useState(0)
  const [cardanoAmount, setCardanoAmount] = useState(0)

  const bitcoinValueInDollars = 40000 // Valor actual de Bitcoin en dólares
  const etherValueInDollars = 3000 // Valor actual de Ethereum en dólares
  const cardanoValueInDollars = 2 // Valor actual de Cardano en dólares

  const calculateInvestment = () => {
    const bitcoinGain = bitcoinAmount * 0.05 // 5% de ganancia mensual
    const etherGain = etherAmount * 0.042 // 4.2% de ganancia mensual
    const cardanoGain = cardanoAmount * 0.01 // 1% de ganancia mensual

    const totalGain = bitcoinGain + etherGain + cardanoGain
    return totalGain
  }
  const handleCalculate = () => {
    const totalGain = calculateInvestment()
    alert(`La ganancia anual proyectada es de $${totalGain.toFixed(2)}`)
  }

  return (
    <div className='grid gap-10'>
      <h1>Calculadora de Inversión en Criptomonedas</h1>
      <div>


      <label>Bitcoin:

      <input
        type='number'
        value={bitcoinAmount}
        onChange={(e) => setBitcoinAmount(parseFloat(e.target.value))}
        />
        </label>
        </div>
      <div>

      <label>
        Ethereum: $
        <input
          type='number'
          value={etherAmount}
          onChange={(e) => setEtherAmount(parseFloat(e.target.value))}
          />
      </label>
          </div>
      <div>

      <label>
        Cardano: $
        <input
          type='number'
          value={cardanoAmount}
          onChange={(e) => setCardanoAmount(parseFloat(e.target.value))}
          />
      </label>
          </div>
      <button onClick={handleCalculate}>Calcular</button>
    </div>
  )
}

export default CryptoInvestmentCalculator
