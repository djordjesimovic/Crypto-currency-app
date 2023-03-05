
import { w3cwebsocket as WebSocket } from 'websocket';

export const fetchAllData = (setTickerData, pairs, unsubscribeChannel) => {

  const channelSymbolMap = {};

  if(pairs.length > 0) {
    const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    ws.onopen = () => {
      pairs.forEach(pair => {
        const subscriptionMessage = JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: `t${pair.toUpperCase()}`
        });
        ws.send(subscriptionMessage);
      })
    }

    ws.onmessage = data => {
      const message = JSON.parse(data.data);
      if(message.event === 'subscribed') {
        channelSymbolMap[message.chanId] = message.symbol.substring(1);
      }
      else if (Array.isArray(message) && message[1] !== 'hb') {  
        const channelId = message[0];
        const pair = channelSymbolMap[channelId];
        const lastPrice = message[1][6];
        const change = message[1][4];
        const changePerc = message[1][5]
        const high = message[1][8];
        const low = message[1][9];
        
        setTickerData(prevState => {
          return {
            ...prevState,
            [pair]: {symbol: pair, lastPrice: lastPrice, change: change, changePerc: changePerc, high: high, low: low}
          };
        });
      }
    };
  }
}




