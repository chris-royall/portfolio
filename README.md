# Portfolio
- [Overview](#overview)
- [Infrastructure](#infrastructure)
- [Contact Form API](#contact-form-api)
- [Logging](#logging)
  - [Link Selection](#link-selection)
  - [Contact Form](#contact-form)


## Overview

<p>This Project has been built using HTML, CSS and TypeScript using the Angular framework.</p>

<p>Within this application, I have configured a contact form containing three fields with validation. The user must enter content to all fields to submit the form. If any fields are empty, the form fails to send and the user is presented with a validation warning message.</p>

<p>Once the form has been submitted successfully, a success message is presented to the user along with the below events:
<ul>
<li>Contact Form content is sent from FrontEnd in JSON format.</li>
<li>Content is sent to the API configured in AWS API Gateway.</li>
<li>The API triggers the Lambda function which sends the content to the verified email address in AWS Simple Email Service.</li>
</ul></p>

<p>Logging is recorded from the into CloudWatch upon the triggering of events within the Lambda function.</p>

<a href="https://www.chrisroyall.com" target="_blank">Public Link</a>

## Infrastructure

<p>Angular (HTML, CSS, TypeScript), GitHub, AWS (Amplify, Route 53, API Gateway, Lambda, Simple Email Service, CloudWatch)</p>

<img src="/src/assets/images/portfolio-infrastructure.png" alt="porfolio-infrastructure">


## Contact Form API

URL</br>
`/ContactForm`

Method</br>
`POST`

Body</br>
```
{
  "name":"John Doe",
  "email":"john.doe@email.com",
  "message":"This is a message."
}
```

Success Response</br>
`statusCode: 200`
```
{ message: "Email sent successfully" }
```

Error Response</br>
`statusCode: 500`
```
{ message: "Error sending email" }
```


## Logging

<p>When the Contact Form is submitted with content,</br>
Then logs are recorded in AWS CloudWatch</p>

Data received with timestamp</br>
```
const { name, email, message } = JSON.parse(event.body);
console.log(new Date().toISOString(), "Event received");
console.log("Name:", name, "Email:", email, "Message:", message);
```

Send email via SES</br>
```
console.log("Sending email");
await ses.sendEmail(params).promise();
```

Catch error</br>
```
catch (error) {
    console.error("Error in Lambda:", error);
```

Lambda completed</br>
```
console.log("Lambda completed");
```
