import React, { useState, useEffect } from 'react'

const Detail = ({detail, login, addToFavorites, setAddToFavorites, setFavoritePairs}) => {

    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/api/details/${detail}`)
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [detail]);


    const addToFavoritesFun = () => {
        setAddToFavorites(prevState => 
            prevState.map(pair => 
                pair.curId === detail ? {...pair, favorites: true} : pair
            )
        );
        setFavoritePairs(prevState => [...prevState, detail])
    }

    const removeFromFavoritesFun = () => {
        setAddToFavorites(prevState => 
            prevState.map(pair => 
                pair.curId === detail ? {...pair, favorites: false} : pair
            )
        );
        setFavoritePairs(prevState => 
            prevState.filter(pair => pair !== detail)    
        )
    }

  return (
    <>
        <div className='main-wrapper headings'>
            <h2 className='main-heading'>Symbol</h2>
            <h2 className='main-heading'>Last price</h2>
            <h2 className='main-heading'>Daily High</h2>
            <h2 className='main-heading'>Daily Low</h2>
        </div>
        <div className='pair' key={detail}>
            <h2 className='pair-part symbol'>{detail}</h2>
            <p className='pair-part'>{info.last_price}</p>
            <p className='pair-part'>{info.high}</p>
            <p className='pair-part'>{info.low}</p>
        </div>
        {
            login ? 
                addToFavorites.map(pair => 
                    pair.curId === detail && pair.favorites === false ? 
                        <button className='add-to-fav' onClick={() => addToFavoritesFun()}>Add to favorites</button> 
                        : 
                        (pair.curId === detail && pair.favorites === true ? <button className='remove-from-fav' onClick={() => removeFromFavoritesFun()}>Remove from favorites</button> : null)
                )
            :
            null
        }
    </>
  )
}

export default Detail
