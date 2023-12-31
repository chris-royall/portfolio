# Portfolio

- [Overview](#overview)
- [Contact Form Email](#contact-form-email)
  - [Contact Form API](#contact-form-api)
- [Logging](#logging)
  - [Contact Form Logging](#contact-form-logging)
  - [Link Selection API](#link-selection-api)
  - [Link Selection Logging](#link-selection-logging)
  - [Kinesis Delivery Streams](#kinesis-delivery-streams)



## Overview

<p>This Project has been built using HTML, CSS and TypeScript using the Angular framework, along with implementation of AWS services (Amplify, Route 53, API Gateway, Lambda, Simple Email Service, CloudWatch, Kinesis, S3).</p>

<a href="https://www.chrisroyall.com" target="_blank">Public Link</a>

<img src="/src/assets/images/portfolio-infrastructure.png" alt="porfolio-infrastructure">



## Contact Form Email

<p>Within this application, I have configured a contact form containing three fields with validation. The user must enter content to all fields to submit the form. If any fields are empty, the form fails to send and the user is presented with a validation warning message.</br>

<p>Once the form has been submitted:
<ul>
<li>Content is sent to an API configured in AWS API Gateway using <code>POST</code> method.</li>
<li>The API triggers a Lambda function which sends the content to the verified email address in AWS Simple Email Service.</li>
<li>[Logging](#logging) is recorded containing the payload data into the associate CloudWatch Log Group.</li>
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



## Logging

<p>Logging recorded:
<ul>
<li>The submission of a Contact Form from the [Contact Form API](#contact-form-api).</li>
<li>Selecting a link within the application.
  <ul>
  <li>Selected Button value is captured in FrontEnd.</li>
  <li>Value is sent to an API configured in AWS API Gateway.</li>
  <li>The API triggers a Lambda function.</li>
  <li>If a Log Stream exists for current date, then the logs are recorded in the existing Log Stream.</li>
  <li>Else, a new Log Stream is created with current with format <code>LinkSelection-${currentDate}</code>, then the logs are recorded in the new Log Stream.</li>
</ul></p>

<p>The CloudWatch Log Groups are configured with a retention policy of 30 days. To ensure data is stored for longer, a subscription filter is used to stream data to an S3 Bucket using Kinesis Data Firehose. The S3 Bucket is configured with S3 Glacier Deep Archive Storage Class since access will be infrequent, and cost and be reduced. Logs are delete after 365 days.</p>


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


### Link Selection API

URL</br>
`/LinkSelection`

Method</br>
`POST`

Body</br>
```
{ buttonClicked: "Sample Button" }
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

### Kinesis Delivery Streams

```
"LogGroup": "/aws/lambda/ContactForm"
"Subscription": "contactform-applicationlogs-exporttos3"
"DeliveryStream": "contactform-applicationlogs"
"Bucket": "contactform-applicationlogs"
  "Expiration": { "Days": 365" }
  "Transitions": [{ "Days": 0, "StorageClass": "DEEP_ARCHIVE" }]
```

Link Selection</br>
```
"LogGroup": "/aws/lambda/LinkSelection"
"Subcription": "linkselection-applicationlogs-exporttos3"
"DeliveryStream": "linkselection-applicationlogs"
"Bucket": "linkselection-applicationlogs"
  "Expiration": { "Days": 365" }
  "Transitions": [{ "Days": 0, "StorageClass": "DEEP_ARCHIVE" }]
```