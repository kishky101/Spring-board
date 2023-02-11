import emailjs from '@emailjs/browser';

const sendEmail = (formObj) => {

  const {    firstName,
  lastName,
  email,
  number,
  background,
  internet,
  days,
  sponsor,
  agreement,
} = formObj

const message = `
<div>
  <h2>New Registeration</h2>
  <p>First Name : ${firstName}</p>
  <p>Last Name : ${lastName}</p>
  <p>Email : ${email}</p>
  <p>Phone Number : ${number}</p>
  <p>Arabic Background : ${background}</p>
  <p>Internet : ${internet}</p>
  <p>Days of Choice : ${days}</p>
  <p>Sponsor : ${sponsor}</p>
  <p>Payment Agreement : ${agreement}</p>
</div>
`
const templatePrams = {
  to_name: 'Admin',
  from_name: 'Springboard Language Academy',
  message: message
}


  return emailjs.send('service_z3ofvel', 'template_hoq5edh', templatePrams, 'Qa3iaKrAZjDTLGKe3')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


export default sendEmail;