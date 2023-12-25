const express = require('express');
const app = express();
const pipedrive=  require('pipedrive')

const PORT = 1800;

const defaultClient = new pipedrive.ApiClient();

let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = '1f04bad961999d21c81e51bf1fb093e33ea5060c';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const api = new pipedrive.DealsApi(defaultClient);
    const deals = await api.getDeals();

    res.send(deals);
    console.log(deals)
});
