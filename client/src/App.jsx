import './App.css'
import { CriptoView } from './components/CriptoView'
import CryptoInvestmentCalculator from './components/CryptoInvestmentCalculator '

function App() {
  return (
    <div className='grid justify-items-center'>
      <CryptoInvestmentCalculator />
      <CriptoView />
    </div>
  )
}

export default App
