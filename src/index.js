//Here I find form and input wrappers
const FORM = document.getElementById('xyz');
const client_details = FORM.querySelector('.client_details');
const job_type = FORM.querySelector('.job_type');
const service_location = FORM.querySelector('.service_location');
const scheduled = FORM.querySelector('.scheduled');

//Here I initialize input types
const text = 'text';
const number = 'number';
const tel = 'tel';
const email = 'email';
const date = 'date';
const time = 'time';

// Create function which will create reusable inputs

function createInput(type, id, placeholder) {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;

  return input;
}

function createSelect(id, value) {
  const select = document.createElement('select');
  selectPlaceholder = document.createElement('option');
  selectPlaceholder.text = value;
  select.id = id;
  select.append(selectPlaceholder)
  return select
}

function createOpt(value) {
  const option = document.createElement('option');
  option.value = value;
  option.text = value;
  option.style.fontSize = '12px';
  option.style.fontWeight = '500';
  option.style.color = '#868686';
  return option
}

// Put inputs in form
const nameInpt = createInput(text, 'name', 'First name');
const lastnameInpt = createInput(text, 'surname', 'Last name');
const telInpt = createInput(tel, 'tel', 'Phone');
const emailInpt = createInput(email, 'email', 'Email (optional)');
const client__wrapper = client_details.querySelector('.input__wrapper--1');
client__wrapper.append(nameInpt, lastnameInpt)
client_details.append(client__wrapper, telInpt, emailInpt);

const jobtypeSelector = createSelect('Job_type', 'Job type');
const jobsourceSelector = createSelect('Job_source', 'Job source');
const jobtypeWrapper = job_type.querySelector('.input__wrapper--2');
jobtypeWrapper.append(jobtypeSelector, jobsourceSelector);
const textarea = document.createElement('textarea');
textarea.placeholder = 'Job description (optional)'
job_type.append(jobtypeWrapper, textarea);

const addressInpt = createInput(text, 'address', 'Adress');
const cityInpt = createInput(text, 'city', 'City');
const stateInpt = createInput(text, 'state', 'State');
const zipInpt = createInput(number, 'zip', 'Zip code');
const areaSelect = createSelect('area', 'Area');

const serviceWrapper = service_location.querySelector('.input__wrapper--3')
serviceWrapper.append(zipInpt, areaSelect);
service_location.append(addressInpt, cityInpt, stateInpt, serviceWrapper)

const startdateInpt = createInput(date, 'start_date', 'Start date');
const starttimeInpt = createInput(time, 'start_time', 'Start time');
const endtimeInpt = createInput(time, 'end_time', 'End time');
const scheduledWrapper = scheduled.querySelector('.input__wrapper--4');
scheduledWrapper.append(starttimeInpt, endtimeInpt);
const testSelect = createSelect('test', 'Test select');
scheduled.append(startdateInpt, scheduledWrapper, testSelect);

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
    return response.data;
  } catch (error) {
    console.error('Error creating deal:', error);
    throw error;
  }
};

const dealData = {
  title: nameInpt.value,
  value: 123,
  currency: 'USD',
  user_id: 12960094,
  org_id: 1,
};

FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  createDealInPipedrive(dealData)
  // console.log(
  //   nameInpt.value,
  //   lastnameInpt.value,
  //   telInpt.value,
  //   emailInpt.value,
  //   jobtypeSelector.value,
  //   jobsourceSelector.value,
  //   textarea.value,
  //   addressInpt.value,
  //   cityInpt.value,
  //   stateInpt.value,
  //   zipInpt.value,
  //   areaSelect.value,
  //   startdateInpt.value,
  //   starttimeInpt.value,
  //   endtimeInpt.value,
  //   testSelect.value,
  //   );
});
