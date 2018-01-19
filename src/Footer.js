import React from 'react'
import './Footer.css'

export default function Footer() {
  return <div className="Footer">
    <div className="Footer-left">
      <div className="Footer-top-line Footer-optional">Made with ❤ in San Francisco</div>
      <div>Designed by <a href="https://github.com/pastudan">Dan Pastusek</a></div>
    </div>
    <div className="Footer-right">
      <div className="Footer-top-line">Icons by <a href="https://github.com/cjdowner/cryptocurrency-icons">Christopher
        Downer</a></div>
      <div className="Footer-optional">
        Data from <a href="https://coinmarketcap.com">CoinMarketCap</a>, <a href="https://www.alphavantage.co">AlphaVantage</a>, <a href="https://iextrading.com/">IEX</a>
      </div>
    </div>
  </div>
}