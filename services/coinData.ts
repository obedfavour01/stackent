// export  const  fetchCoinData = async () => {
//     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbnb%2Cmatic';
//     const options = {
//         method: 'GET',
//         headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-umFkfrPg4ZeLYeLpt5d2MaP1' }
//     };

//     const response = await fetch(url,options)
//     if (!response.ok) throw new Error("Failed to fetch coin data");
//     return response.json(); 
        
// }


import axios from 'axios';

export const fetchCryptoData = async () => {
  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10, 
        page: 1,
        sparkline: true,
      },
    }
  );
  return data;
};
