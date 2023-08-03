import useCripto from '../hook/useCripto'

export const CriptoView = () => {
  const { criptoFilter } = useCripto()
  return (
    <div>
      <h1>Lista de Criptomonedas</h1>
      <div className='grid  grid-cols-3 gap-4'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Asset</th>
              <th>Price</th>
              <th>Change VS USD (1H)</th>
              <th>Change VS USD (24H)</th>
              <th>Reported Marketcap</th>
              <th>Real Volume(24H)</th>
              <th>Change VS USD (7D)</th>
              <th>Change VS USD (30D)</th>
              <th>Change VS USD (YTD)</th>
            </tr>
          </thead>
          <tbody>
            {criptoFilter.map((cripto, i) => (
              <tr key={cripto.id}>
                <td>{i + 1}</td>
                <td>{cripto.name}</td>
                <td>{cripto.priceUsd}</td>
                <td>{cripto.changePercent24Hr}</td>
                <td>{cripto.changePercent24Hr}</td>
                <td>{cripto.marketCapUsd}</td>
                <td>{cripto.volumeUsd24Hr}</td>
                <td>{cripto.changePercent7d}</td>
                <td>{cripto.changePercent30d}</td>
                <td>{cripto.changePercentYtd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
