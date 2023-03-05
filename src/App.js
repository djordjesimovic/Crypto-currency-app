import Pair from './components/Pair';
import Detail from './components/Detail';
import Header from './components/Header';
import Headings from './components/Headings';
import { fetchAllData } from './utils/fechAllData';
import React, { useState, useEffect } from 'react';
import { checkStatus } from './utils/checkPlatformStatus';
import { fetchFirstPairs } from './utils/fetchFirstPairs';


function App() {
  const [platformStatus, setPlatformStatus] = useState(null);
  const [firstPairs, setFirstPairs] = useState([]);
  const [renderFavorites ,setRenderFavorites] = useState(false);
  const [favoritePairs, setFavoritePairs] = useState([]);
  const [tickerData, setTickerData] = useState({});
  const [favTicker, setFavTicker] = useState({})
  const [login, setLogin] = useState(false);
  const [detail, setDetail] = useState('');
  const [addToFavorites, setAddToFavorites] = useState([
    { curId: 'BTCUSD', favorites: false },
    { curId: 'LTCUSD', favorites: false },
    { curId: 'LTCBTC', favorites: false },
    { curId: 'ETHUSD', favorites: false },
    { curId: 'ETHBTC', favorites: false }
  ]);

  useEffect(() => {
    fetchFirstPairs(setFirstPairs);
    checkStatus(setPlatformStatus)
  }, [])

  useEffect(() => {
    fetchAllData(setTickerData, firstPairs);
  }, [firstPairs])

  useEffect(() => {
    fetchAllData(setFavTicker, favoritePairs)
    setFavTicker({})
  }, [favoritePairs, renderFavorites])

  return (
    <div className='app'>
      {
        platformStatus === 1 ?
          <>
            <Header 
              login={login} 
              setLogin={setLogin} 
              setDetail={setDetail} 
              setRenderFavorites={setRenderFavorites}
            />
            {
              detail === '' ?
 
                <div className='main'>
                    <Headings />
                    {Object.entries(renderFavorites ? favTicker : tickerData).map(([pair, data]) => (
                      <Pair 
                        key={pair} 
                        pair={pair} 
                        data={data} 
                        setDetail={setDetail} 
                      />
                    ))}
                  </div>
                   :
                <>
                <Detail 
                    key={detail} 
                    detail={detail}  
                    addToFavorites={addToFavorites} 
                    setAddToFavorites={setAddToFavorites}
                    login={login}
                    setFavoritePairs={setFavoritePairs} 
                  />
                  
                </>
            }
          </>
          :
          <>
            <h3>Information is currently unavailable, please try again later.</h3>
          </>
      }
    </div>
  );
}

export default App;
