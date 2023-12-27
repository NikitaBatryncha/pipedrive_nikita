//Here I find form and input wrappers
const FORM = document.getElementById('xyz');
const client_details = FORM.querySelector('.client_details');
const job_type = FORM.querySelector('.job_type');
const service_location = FORM.querySelector('.service_location');
const scheduled = FORM.querySelector('.scheduled');

//Here I initialize input types
const text = 'text';
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

// Put inputs in form

const nameInpt = createInput(text, 'name', 'First name');
const lastnameInpt = createInput(text, 'surname', 'Last name');
const telInpt = createInput(tel, 'tel', 'Phone');
const emailInpt = createInput(email, 'email', 'Email (optional)');
client_details.append(nameInpt, lastnameInpt, telInpt, emailInpt)

 FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(nameInpt.value, lastnameInpt.value, telInpt.value, emailInpt.value);
});
