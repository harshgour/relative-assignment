import React, { useState } from 'react'
import './App.css';
import TrendingAssetsIcon from './assets/tsIcons/TrendingAssetsIcon';
import Card from './components/Card/Card';
import {CardProps} from './types/index'

const mockData: Array<CardProps> = [
  {
    name: "Bitcoin",
    abv: "BTC",
    price: '342',
    tvl: '60,000',
    lossgain: 10,
    image: "/cryptoIcons/Bitcoin.svg",
    currency: '$',
    popularPairs: [{
      name: "Solana",
      abv: "SOL",
      price: '32.83',
      tvl: '43243',
      image: "/cryptoIcons/Solana.svg"
    },
    {
      name: "Ethereum",
      abv: "ETH",
      price: '1466.45',
      tvl: '43243',
      image: "/cryptoIcons/Ethereum.svg"
    },
    {
      name: "Binance",
      abv: "BUSD",
      price: '1.00',
      tvl: '43243',
      image: "/cryptoIcons/Binance.svg"
    }]
  },
  {
    name: "Solana",
    abv: "SOL",
    price: '32.83',
    tvl: '60,000',
    lossgain: -12.32,
    image: "/cryptoIcons/Solana.svg",
    currency: '$',
    popularPairs: [{
      name: "Bitcoin",
      abv: "BTC",
      price: '342',
      tvl: '43243',
      image: "/cryptoIcons/Bitcoin.svg",
    },
    {
      name: "Ethereum",
      abv: "ETH",
      price: '1466.45',
      tvl: '43243',
      image: "/cryptoIcons/Ethereum.svg"
    },
    {
      name: "Binance",
      abv: "BUSD",
      price: '1.00',
      tvl: '43243',
      image: "/cryptoIcons/Binance.svg"
    }]
  },
  {
    name: "Ethereum",
    abv: "ETH",
    price: '1466.45',
    tvl: '$60,000',
    lossgain: -11.93,
    image: "/cryptoIcons/Ethereum.svg",
    currency: '$',
    popularPairs: [{
      name: "Solana",
      abv: "SOL",
      price: '32.83',
      tvl: '43243',
      image: "/cryptoIcons/Solana.svg"
    },
    {
      name: "Bitcoin",
      abv: "BTC",
      price: '342',
      tvl: '43243',
      image: "/cryptoIcons/Bitcoin.svg",
    },
    {
      name: "Binance",
      abv: "BUSD",
      price: '1.00',
      tvl: '43243',
      image: "/cryptoIcons/Binance.svg"
    }]
  },
  {
    name: "Binance",
    abv: "BUSD",
    price: '1.00',
    tvl: '60,000',
    lossgain: 0.26,
    image: "/cryptoIcons/Binance.svg",
    currency: '$',
    popularPairs: [{
      name: "Solana",
      abv: "SOL",
      price: '32.83',
      tvl: '43243',
      image: "/cryptoIcons/Solana.svg"
    },
    {
      name: "Ethereum",
      abv: "ETH",
      price: '1466.45',
      tvl: '43243',
      image: "/cryptoIcons/Ethereum.svg"
    },
    {
      name: "Bitcoin",
      abv: "BTC",
      price: '342',
      tvl: '43243',
      image: "/cryptoIcons/Bitcoin.svg",
    }]
  },
  {
    name: "Shiba Inu",
    abv: "SHIB",
    price: '0.00000001948',
    tvl: '60,000',
    lossgain: -8.1,
    image: "/cryptoIcons/ShibaInu.svg",
    currency: '$',
    popularPairs: [{
      name: "Solana",
      abv: "SOL",
      price: '32.83',
      tvl: '43243',
      image: "/cryptoIcons/Solana.svg"
    },
    {
      name: "Ethereum",
      abv: "ETH",
      price: '1466.45',
      tvl: '43243',
      image: "/cryptoIcons/Ethereum.svg"
    },
    {
      name: "Binance",
      abv: "BUSD",
      price: '1.00',
      tvl: '43243',
      image: "/cryptoIcons/Binance.svg"
    }]
  }
]

function App() {
  const [cards, setCards] = useState<Array<CardProps>>(mockData)
  return (
    <div className='max-1280:container my-14 mx-auto sm:px-10 min-h-screen min-w-screen flex justify-center flex-col'>
      <div className='flex items-center justify-center sm:justify-start'>
        <TrendingAssetsIcon size={15} color='#DC1FFF' />
        <span className='text-16 text-white font-bold ml-2'>Trending Assets</span>
      </div>
      <div className="cards flex flex-wrap justify-center mt-10 gap-14">
        {
          cards.map((item, index)=>
            <Card key={index} {...item}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
