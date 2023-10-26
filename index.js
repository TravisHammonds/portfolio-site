$(document).ready(function () {
  console.log("Document has loaded. Ready for jQuery ");
});

const emailContact = $("#email-contact");
const linkedinContact = $("#linkedin-contact");
const phoneContact = $("#phone-contact");

emailContact.click(function () {
  //add active class
  emailContact.addClass("active");
  //delete active from other options
  linkedinContact.removeClass("active");
  phoneContact.removeClass("active");
  //target the button to change
  const buttonLink = $("#contact-link");
  //change the href in the button
  buttonLink.attr("href", "mailto:travishammonds2@gmail.com");
  //change the text in the button
  buttonLink.text("travishammonds2@gmail.com");
});

linkedinContact.click(function () {
  //add active class
  linkedinContact.addClass("active");
  //delete active from other options
  emailContact.removeClass("active");
  phoneContact.removeClass("active");
  //target the button to change
  const buttonLink = $("#contact-link");
  //change the href in the button
  buttonLink.attr("href", "www.linkedin.com/in/travis-hammonds");
  //change the text in the button
  buttonLink.text("www.linkedin.com/in/travis-hammonds");
});

phoneContact.click(function () {
  //add active class
  phoneContact.addClass("active");
  //delete active from other options
  emailContact.removeClass("active");
  linkedinContact.removeClass("active");
  //target the button to change
  const buttonLink = $("#contact-link");
  //change the href in the button
  buttonLink.attr("href", "sms:+1717-825-4004");
  //change the text in the button
  buttonLink.text("+1 (717) 825-4004");

});

