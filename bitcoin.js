const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Api usada y documento creado');

        var data = response.data.bpi
        var bitcoinList = [
                    `${data.USD.code} `+`${data.USD.rate}`+"\n",
                    `${data.EUR.code} `+`${data.EUR.rate}`+"\n",
                   
                ]

    
        

       fs.writeFile('bitcoin.csv', bitcoinList, (error) =>{
        if (error){
            console.log(error);
            return;
        }
    })
 
    })

    