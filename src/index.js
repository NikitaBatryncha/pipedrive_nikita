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
  const selectPlaceholder = document.createElement('option');
  selectPlaceholder.text = value;
  select.id = id;
  select.append(selectPlaceholder)
  return select
}

function createOpt(value) {
  const option = document.createElement('option');
  option.id = value;
  option.text = value;
  return option
}

// Put inputs in form
const nameInpt = createInput(text, 'name', 'First name');
const lastnameInpt = createInput(text, 'lastname', 'Last name');
const telInpt = createInput(tel, 'tel', 'Phone');
const emailInpt = createInput(email, 'email', 'Email (optional)');
const client__wrapper = client_details.querySelector('.input__wrapper--1');
client__wrapper.append(nameInpt, lastnameInpt)
client_details.append(client__wrapper, telInpt, emailInpt);

const jobtypeSelector = createSelect('Job_type', 'Job type');
const jtOpt1 = createOpt('Miami Technician');
const jtOpt2 = createOpt('Texas Technician');
const jtOpt3 = createOpt('Ostin Technician');
const jtOpt4 = createOpt('NewYork Technician');
const jtOpt5 = createOpt('Houston Technician');
const jtOpt6 = createOpt('Scranton Technician');
jobtypeSelector.append(jtOpt1, jtOpt2, jtOpt3, jtOpt4, jtOpt5, jtOpt6)
const jobsourceSelector = createSelect('Job_source', 'Job source');
const jsOpt1 = createOpt('Miami Source');
const jsOpt2 = createOpt('Texas Source');
const jsOpt3 = createOpt('Ostin Source');
const jsOpt4 = createOpt('NewYork Source');
const jsOpt5 = createOpt('Houston Source');
const jsOpt6 = createOpt('Scranton Source');
jobsourceSelector.append(jsOpt1, jsOpt2, jsOpt3, jsOpt4, jsOpt5, jsOpt6)
const jobtypeWrapper = job_type.querySelector('.input__wrapper--2');
jobtypeWrapper.append(jobtypeSelector, jobsourceSelector);
const textarea = document.createElement('textarea');
textarea.id = 'textarea';
textarea.placeholder = 'Job description (optional)'
job_type.append(jobtypeWrapper, textarea);

const addressInpt = createInput(text, 'address', 'Adress');
const cityInpt = createInput(text, 'city', 'City');
const stateInpt = createInput(text, 'state', 'State');
const zipInpt = createInput(number, 'zip', 'Zip code');
const areaSelect = createSelect('area', 'Area');
const areaOpt1 = createOpt('Miami');
const areaOpt2 = createOpt('Texas');
const areaOpt3 = createOpt('Ostin');
const areaOpt4 = createOpt('NewYork');
const areaOpt5 = createOpt('Houston');
const areaOpt6 = createOpt('Scranton');
areaSelect.append(areaOpt1, areaOpt2, areaOpt3, areaOpt4, areaOpt5, areaOpt6)
const serviceWrapper = service_location.querySelector('.input__wrapper--3')
serviceWrapper.append(zipInpt, areaSelect);
service_location.append(addressInpt, cityInpt, stateInpt, serviceWrapper)

const startdateInpt = createInput(date, 'start_date', 'Start date');
const starttimeInpt = createInput(time, 'start_time', 'Start time');
const endtimeInpt = createInput(time, 'end_time', 'End time');
const scheduledWrapper = scheduled.querySelector('.input__wrapper--4');
scheduledWrapper.append(starttimeInpt, endtimeInpt);
const testSelect = createSelect('test', 'Test select');
const testOpt1 = createOpt('yes');
const testOpt2 = createOpt('no');
testSelect.append(testOpt1, testOpt2)
scheduled.append(startdateInpt, scheduledWrapper, testSelect);

