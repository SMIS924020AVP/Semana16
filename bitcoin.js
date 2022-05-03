const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');

        var bitcoinList = response.bitcoinList.bpi
        var valores = [
                    `${bitcoinList.USD.code} `+`${bitcoinList.USD.rate}`,
                    `${bitcoinList.EUR.code} `+`${bitcoinList.EUR.rate}`,
                   
                ]

       console.log("el valor del bitcoin es: ")
       valores.forEach(bitcoinList=>console.log(bitcoinList))
        

       fs.writeFile('bitcoin.csv', bitcoinList, (error) =>{
        if (error){
            console.log(error);
            return;
        }
    })
 
    })

    