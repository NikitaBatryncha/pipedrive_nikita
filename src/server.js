const createDealInPipedrive = async (dealData) => {
  const apiUrl = 'https://zany-replace.pipedrive.com/v1/deals?api_token=9299a8a8cee523f120b7c2f26c807983d7ce7686';

  try {
    // Make the Axios POST request
    const response = await axios.post(apiUrl, dealData, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 9299a8a8cee523f120b7c2f26c807983d7ce7686'
      },
    });

    // Log the response data (you can handle it according to your application's logic)
    console.log('Deal created successfully:', response.data);

    return response.data; // Return the response data if needed
  } catch (error) {
    // Handle errors
    console.error('Error creating deal:', error);
    throw error; // Throw the error for further handling if needed
  }
};

const dealData = {
  title: 'Your Deal Title!',
  value: 123,
  currency: 'USD',
  user_id: 12960094,
  org_id: 1,
};

FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  await createDealInPipedrive(dealData)
})
