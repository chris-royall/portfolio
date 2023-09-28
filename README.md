# Portfolio


## Overview

<p>This Project has been built using HTML, CSS and TypeScript using the Angular framework.</p>

<p>Within this application, I have configured a contact form containing three fields with validation. The user must enter content to all fields to submit the form. If any fields are empty, the form fails to send and the user is presented with a validation warning message.</p>

<p>Once the form has been submitted successfully, a success message is presented to the user along with the below events:
<ul>
<li>Contact Form content is sent from FrontEnd in JSON format.</li>
<li>Content is sent to the API configured in AWS API Gateway.</li>
<li>The API triggers the Lambda function which sends the content to the verified email address in AWS Simple Email Service.</li>
</ul></p>


## Infrastructure

<p>Angular (HTML, CSS, TypeScript), GitHub, AWS (Amplify, Route 53, API Gateway, Lambda, Simple Email Service)</p>

<img src="/src/assets/images/portfolio-infrastructure.png" alt="porfolio-infrastructure">
