import React from 'react'

const Pair = ({pair, data, setDetail}) => {

    return (
        <div className='pair'>
            <h2 className='pair-part symbol' onClick={() => setDetail(pair)}>{pair}</h2>
            <p className='pair-part'>{data.lastPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <p className='pair-part'>{data.change.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <p className='pair-part'>{(data.changePerc * 100).toFixed(2)}%</p>
            <p className='pair-part'>{data.high.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <p className='pair-part'>{data.low.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
    )
}

export default Pair