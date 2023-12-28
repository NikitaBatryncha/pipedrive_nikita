const successMessage = document.createElement('label');
successMessage.style.color = 'green';

const createDealInPipedrive = async (dealData) => {
  const apiUrl = 'https://zany-replace.pipedrive.com/v1/deals?api_token=9299a8a8cee523f120b7c2f26c807983d7ce7686';

  try {
    const response = await axios.post(apiUrl, dealData, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 9299a8a8cee523f120b7c2f26c807983d7ce7686'
      },
    });
    console.log('Deal created successfully:', response.data);
    if (response.data.success === true) {
      successMessage.textContent = 'Success! Data saved';
      FORM.append(successMessage);
    }
  } catch (error) {
    successMessage.textContent = 'Somethig went wrong';
    throw error;
  }
};

const FORM = document.getElementById('xyz');
const firstname = document.getElementById('name');
const lastnameInpt = document.getElementById('lastname')
const telInpt = document.getElementById('tel')
const emailInpt = document.getElementById('email')
const textarea = document.getElementById('textarea')
const address = document.getElementById('address')
const cityInpt = document.getElementById('city')
const stateInpt = document.getElementById('state')
const zipInpt = document.getElementById('zip')
const startdateInpt = document.getElementById('start_date')
const starttimeInpt = document.getElementById('start_time')
const endtimeInpt = document.getElementById('end_time')
const Job_type = document.getElementById('Job_type')
const Job_source = document.getElementById('Job_source')
const area = document.getElementById('area')
const test = document.getElementById('test')

const dealData = {
  title: 'test',
  value: 123,
  currency: 'USD',
  user_id: 12960094,
  org_id: 1,
  '62f42dba118c4e5923834d6b07e9b67c77275343': Job_type.value,
  '104a5855c90c873563b7896d93e726a469cab85a': cityInpt.value,
  '3440b2a8ffdb743e3db79bfcecbb6e022b2097f2': stateInpt.value,
  '4237d4b8ec24bfc68b1667b5cf5025e517c89d2e': area.value,
  '85440b74115a06d0cce10de41d8f16036c571453': telInpt.value,
  'a1be5c9db95cdce017323890558311aaaf59a04f': textarea.value,
  'b1b479ddaba2dcc38d6790ab231d6b5af9633147': emailInpt.value,
  'd4a2b28ac82fe2b1b8a0dacf66195b9fdbd60d6b': 'Nikita',
  'da5c29e3c9861c8fb89cdeceb675e0c7e7a412fb': test.value,
  'db218bb6d49da0acc7a5631f30385128049e0511': address.value,
  'de83a94c33f8155010e89a1b7bd01998926fa757': Job_source.value,
  'de7840a30744d21ef55fb8d0334f249c75347e32': endtimeInpt.value,
  'cfff8802aee9a618ef46632e249009e0dc87dff5': firstname.value,
  'eb7f566b35cd61bbb258dd155226efcecc190879': startdateInpt.value,
  'eef6672af92f54017c9287f72d0c34e46946005b': starttimeInpt.value,
  '0884d25d015dbaeb269201cfafeffc1cf7027b12': lastnameInpt.value,
  'e1a2c8054ff8c5d39c3645873b762c6ed1bb9d0f': zipInpt.value
};

FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  await createDealInPipedrive(dealData);
  console.log('tit ', firstname.value)
})
