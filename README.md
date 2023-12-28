# Portfolio
- [Overview](#overview)
- [Infrastructure](#infrastructure)
- [Contact Form Email](#contact-form-email)
  - [Contact Form API](#contact-form-api)
  - [Contact Form Logging](#contact-form-logging)
- [Link Selection Logs](#link-selection-logs)
  - [Link Selection API](#link-selection-api)
  - [Link Selection Logging](#link-selection-logging)


## Overview

<p>This Project has been built using HTML, CSS and TypeScript using the Angular framework.</p>

<p>Within this application, I have configured a contact form containing three fields with validation. The user must enter content to all fields to submit the form. If any fields are empty, the form fails to send and the user is presented with a validation warning message.</p>

<a href="https://www.chrisroyall.com" target="_blank">Public Link</a>



## Infrastructure

<p>Angular (HTML, CSS, TypeScript), GitHub, AWS (Amplify, Route 53, API Gateway, Lambda, Simple Email Service, CloudWatch)</p>

<img src="/src/assets/images/portfolio-infrastructure.png" alt="porfolio-infrastructure">



## Contact Form

<p>Once Contact Form content is captured in FrontEnd:
<ul>
<li>Content is sent to an API configured in AWS API Gateway.</li>
<li>The API triggers a Lambda function which sends the content to the verified email address in AWS Simple Email Service.</li>
<li>Logs are recorded in CloudWatch containing the payload data.</li>
</ul></p>


### Contact Form API

URL</br>
`/ContactForm`

Method</br>
`POST`

Body</br>
```
{
  "name": "John Doe",
  "email": "john.doe@email.com",
  "message": "This is a message."
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

### Contact Form Logging

Log Group</br>
`/ContactForm`

Data received with timestamp</br>
```
const { name, email, message } = JSON.parse(event.body);
console.log(new Date().toISOString(), "Event received");
console.log('Event:', JSON.stringify(event, null, 2));
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


## Link Selection


### Link Selection API

<ul>
<li>Selected Button value is captured in FrontEnd.</li>
<li>Value is sent to an API configured in AWS API Gateway.</li>
<li>The API triggers a Lambda function.</li>
<li>If a Log Stream exists for current date, then the logs are recorded in the existing Log Stream.</li>
<li>Else, a new Log Stream is created with current with format `LinkSelection-${currentDate}`, then the logs are recorded in the new Log Stream.</li>
</ul>

URL</br>
`/LinkSelection`

Method</br>
`POST`

Body</br>
```
{
  buttonClicked: "Sample Button"
}
```

Success Response</br>
`statusCode: 200`
```
{ message: "Log recorded" }
```

Error Response</br>
`statusCode: 500`
```
{ message: "Internal Server Error" }
```


### Link Selection Logging

Log Group</br>
`/LinkSelection`

Data logged with timestamp</br>
```
const logParams = {
  logGroupName,
  logStreamName,
  logEvents: [
    {
      timestamp: new Date().getTime(),
      message: `Link Selected: ${buttonClicked}`
    },
  ],
};
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