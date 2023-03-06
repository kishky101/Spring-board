import emailjs from '@emailjs/browser';

export const sendEmail = (formObj) => {

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


  return emailjs.send('service_9q7j91t', 'template_hoq5edh', templatePrams, 'Qa3iaKrAZjDTLGKe3')
    .then((result) => {
        //console.log(result.text);
    }, (error) => {
        //console.log(error.text);
    });
};


export const sendEmailClient = (formObj) => {

  const { firstName, email } = formObj;

const message = `
<div>
  <p style = "font-size: 18px">Thank you for filling our Admission Form, To confirm your seat, Kindly proceed to pay into any of our accounts listed below :</p>
  <div>
    <h3 style = "font-size: 28px">Payment in Naira - N30,000</h3>
    <h4 style = "font-size: 25px">Account Name: Springboard Language Concept</h4>
    <p style = "font-size: 20px">GTBANK:- 0127131785</p>
    <p style = "font-size: 20px">STANBIC:- 0603687481</p>
    <p style = "font-size: 20px">JAIZ:- 0003522837</p>
  </div>
  <div>
    <h3 style = "font-size: 28px">For Foreign Currency</h3>
    <h4 style = "font-size: 25px">Account Name: Tajudeen Adebayo</h4>
    <p style = "font-size: 20px">US Dollar:- 0603687467 (60 dollars)</p>
    <p style = "font-size: 20px">Euro:- 0603687481 (55 Euros)</p>
    <p style = "font-size: 20px">UK Pound:- 0603687474 (50 Pounds)</p>
  </div>
</div>
`
const templatePrams = {
  to_name: firstName,
  to_email: email,
  from_name: 'Springboard Language Academy',
  message: message
}


  return emailjs.send('service_9q7j91t', 'template_i3fq5ku', templatePrams, 'Qa3iaKrAZjDTLGKe3')
    .then((result) => {
        //console.log(result.text);
    }, (error) => {
        //console.log(error.text);
    });
};
