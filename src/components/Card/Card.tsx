import React from 'react'
import { CardProps } from '../../types'
import './Card.css';

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="relative pt-5">
      <div className='image-container absolute left-1/2 -translate-x-1/2 -translate-y-[24%] p-5 rounded-full'>
        <img src={props.image} alt={props.name} className="w-px-40"/>
      </div>
      <div className='card-container min-h-280 pb-5 px-5 w-[250px] my-5 text-center'>
        <div className='card-content pt-14 h-full'>
          <span className='card-header-name text-12'>{props.name} ({props.abv})</span>
          <div className='card-price mt-3'>
            <div className='asset-value text-white text-center bg-[#14172B] mx-auto py-1 rounded-full text-14'>
              <div className={`${props.lossgain<0?'text-red-500':'text-green-500'} text-12 float-right mr-2 mt-0.5`}>{props.lossgain<0?'':'+'}{props.lossgain}%</div>
              <div className='mx-auto w-min'>{props.currency}{props.price} </div>
            </div>
            <div className="asset-label text-12 text-[#5A5F7D] mt-1">Price</div>
          </div>
          <div className='card-tvl mt-3'>
            <div className='asset-value text-white bg-[#14172B] mx-auto py-1 rounded-full text-14'>{props.currency}{props.tvl}</div>
            <div className="asset-label text-12 text-[#5A5F7D] mt-1">TVL</div>
          </div>
          {props.popularPairs?
            <div className='card-popular-pairs mt-3 w-max mx-auto'>
              <div className='flex justify-center rounded-full bg-[#14172B] p-1'>
                {props.popularPairs.slice(0,3).map((item, index)=>
                  <img src={item.image} alt={item.name} key={index} className='popular-pair-image w-5 m-1' />
                )}
              </div>
              <div className="asset-label text-12 text-[#5A5F7D] mt-1">Popular Pairs</div>
            </div>
          :''}
        </div>
      </div>
    </div>
  )
}

export default Card