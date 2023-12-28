const axios = require('axios');

const clientId = '4f08d258b8880027';
const clientSecret = '3c91561864afa4a79d4454257b858ebe8ba0d43e';
const redirectUri = 'https://nikitabatryncha.github.io/pipedrive_nikita/';
const authorizationCode = '10095070.12960094.cb4b073154384870864b470c970395d5cebea36e';

// Step 4: Exchange authorization_code for tokens
(async () => {
  try {
    const authHeader = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;
    const tokenUrl = 'https://oauth.pipedrive.com/oauth/token';

    const response = await axios.post(
      tokenUrl,
      `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': authHeader,
        },
      }
    );

    const { access_token, refresh_token } = response.data;
    console.log('Access Token:', access_token);
    console.log('Refresh Token:', refresh_token);
  } catch (error) {
    console.error('Error fetching tokens:', error.response ? error.response.data : error.message);
  }
})()
