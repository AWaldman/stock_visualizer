const APIService = {
    async getTickerData(ticker) {
        let options = {
            method: "GET",
            headers: {
                "accept": 'application/json',
                "X-API-KEY": "RrbNHffHGF7MDJ65n25kF2MJNx9NjWMW51oSbRew"
            }
        };
        let response = await fetch(`https://yfapi.net/v8/finance/chart/${ticker}?range=5y&region=US&interval=1mo&lang=en'`, options);
        let data = await response.json();
        let formattedData = transform(data)

        return formattedData;
        console.log(formattedData)
    },

    transform(data) {
        return data
    }
}

export default APIService;
