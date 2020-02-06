# Real World App - Doctor Leong's Medical Clinic

### By Heng CAI, Christopher DALZIEL, Nhan DANG

## _Part B - Documentation for Coding Component_

#### Run Instructions

- Front End Commandline Boot: `npm start`
- Back End Commandline Boot: `nodemon`
- Cypress Start: `npm run cypress:open` <br><br>
  Your Admin Account:

```
Email: harrison.malone@coderacademy.edu.au
Password: password
```

## R10 - Link to deployed website

- [Hosted Site](https://klinik-gp.netlify.com)

## R11 - Link to Github repository

- [Front End Repo](https://github.com/ChristopherDalziel/GP-Front)

- [Back End Repo](https://github.com/ChristopherDalziel/GP-Back)

## R1 - Technology Stack

This website uses the following technologies:

**Front end:**

- HTML
- CSS
- React
- Redux Forms

**Back end:**

- Node JS
- Express framework for Node JS
- Mongoose for object modelling

**Database and storage:**

- Cloudinary for user image upload and storing the uploaded images
- MongoDB Atlas document database

**Hosting:**

- Heroku to host the back end content
- Netlify to host the front end content

## R2 - Well Designed Code

**Modules**

The code files for the application is separated into two directories that are linked to two separate Github repositories, GP-Front (for front end) and GP-Back (for back end).

#### Front End

![Front end folder structure](./Docs/frontend_folders.png)

The front end code is categorised into folders based on their purpose:

- The assets folder contain images that form part of the website's layout.
- The components folder contains components that make up each page of the website. Some of these components are reused throughout the website such as the create/edit redux forms for the Services and the navigation bar. Aside from the navigation bar, the redux forms and other components are separated into folders within the components folder according to the pages they are used in. For example, the log in, registration and password reset forms are stored in the authentication folder as they deal with authentication.
- The pages folder contain the code for each page, and the components from the components folder are imported into each of these pages.
- The reducers folder contains the redux form reducers.
- The utils folder contains token middleware and session storage functions which are reused throughout the site.

#### Back End

![Back end folder structure](./Docs/backend_modules.png)

The back end folder contains four main sub-directories where the modules reside:

- The controllers folder contains the code where Express interacts with the MongoDB Atlas database to store and retrieve data, as well as token middleware. Controllers are grouped by page and/or functionality. For example, user registration, login and password reset functions are grouped in the users.js file in the controllers folder.
- The models folder contains the mongoose schema for each collection.
- The routes folder contain the routes used by Express routers. The routes are grouped by page and/or function, for example, all user routes (login, password reset, register) are contained in the users.js routes file.

**DRY Coding principles**

Components such as forms are reused where possible, for example, the Services form component is used for both creating and editing a service as the information required is the same. The navigation bar component is contained in the main App.js fie in the Front End so that it only needs to be called on once, without having to be included in the render function of each page. Token middleware is contained in central files and imported where required.

**Libraries**

- Cypress is used for automated integration testing. Its dependencies are @cypress/instrument-cra, @cypress/code-coverage, istanbul-lib-coverage and nyc which allows a code coverage report to be generated after running tests in Cypress.

- Axios is used to shorten the code required to make HTTP requests.

- Date-fns is used to easily format javascript dates into a user-friendly format to be used to display appointment information to end users. Also, it simplifies the addition and subtraction of dates (e.g. getting the date for yesterday).

- Dotenv is used to load variables from the .env and .env.development files into process.env variables which can be accessed throughout the application.

- Google maps is used to graphically display the location of the clinic.

- React-datepicker is incorporated into the appointment booking form to allow users to select an appointment date and time. It enables selected times such as lunch times to be blocked out and a minimum and maximum date range to be applied.

- React topbar progress indicator allows a progress bar to be displayed to indicate that a page is still loading.

- Redux-form allows the use of redux forms to simplify the creation and storage of form contents as well as form validation.

- Bcrypt is used for hashing and salting passwords

- Cors is used to enable data to be transmitted between the back end and the front end, allowing the use of a custom API.
- JSON web token allows the creation of a token based on the user's email and admin status which is used in authentication.

- Mongoose unique validator is used to allow mongoose to validate if a value is unique. It is used to check the users collection for an existing email address during the registration process, and will throw an error if the email address already exists in the system.

- Morgan is used to log HTTP requests.

- Nodemailer is used to send emails to users after a post request.

- Nodemon is used to allow the express server to restart automatically after each code change.

- UUIDV1 is used to generate a unique token which is used for validating users when they a password reset is requested.

- Jest and Supertest is used to unit test end points. The test files are stored in the back end Routes folder and picked up by Jest/Supertest.

**Code Flow Control**

During the coding process we used the user stories as a basis for the code control flow. Each function usually contains the expected output in the case of a positive use case, and includes error handling to accommodate for negative use cases.

For example, this is the user story for making an appointment (from part A):

![Booking user story](./Docs/booking_user_story.png)

The resultant code is (see comments included in the code block):

```javascript
//on submission of the booking form:
bookingSubmit = async values => {
  try {
    //Attempt to create a new booking by creating a new booking document from the values obtained from the form, then writing this value to the database
    const newBooking = values;
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/appointments/new", newBooking)
      .then(response => {
        //if the booking creation is successful, the server will respond with the booking data
        let bookingDetails = response.data;
        //the booking data from the server response will be used to send an email to the user to confirm the booking
        axios
          .post(
            process.env.REACT_APP_BACKEND_URL + "/mail/appointment",
            bookingDetails
          )
          //if the email is successfully sent, the user will be redirected to a success page to inform them that the booking is successful and an email has been sent
          .then(this.props.history.push("/success"))
          .catch(err => {
            //if an error occurs during the email process, the error message will be displayed
            console.log(err);
            this.setState({ errors: err.response.data });
          });
      });
    //if an error occurs during the booking submission process, an error message will be displayed.
  } catch (err) {
    console.log(err);
    this.setState({ errors: err.response.data });
  }
};
```

**Applies Object Oriented (OO) principles/patterns and uses appropriate data structures**

Classes and objects are used extensively throughout the application. Each component has its own class and each page is written as a class with the functionality for that page contained in various class methods. The following structure is usually followed:

a) Class Name  
b) A state object containing the keys with values that are subject to change  
c) A componentDidMount function to fetch data from the MongoDB database and render it on the page  
d) Functions to control page functionality. For example, if a page contains a form component, there is a function to handle the form submission.  
e) A render function to display the contents of the page

For example, when a booking form is completed in the front end, a new booking object is created from the values of the form. The object is then saved as a document in the corresponding collection via a HTTP request to the back end.

## R3 - Employ and utilise proper source control methodology (Git)

Git and Github were tools used for source control. The team worked off three branches - one for each member, and used the comments to specify what changes were made at each commit. We committed the changes and pushed to our own branches on Github whenever significant changes to the code was made or when a feature or function was completed. After pushing to Github, we create pull requests to merge the changes to the master branch. Where merge conflicts arises we will verbally check with the person whose code is causing the conflicts to determine the resolution.

We decided against making a branch for each feature as there were occasions where two people were working on different parts of the same features. Two feature branches were made for testing purposes: one was for the Cypress code coverage report set up as many packages were installed during this process but the report was failing to generate. To reduce the number of unnecessary packages in the master branch, a separate branch was created.  
The second feature branch created was used to test how a rewrite of the getAdminStatus function would affect the application without affecting the main source code in the master branch. As the new code resulted in the application not working as intended, the branch was not merged with the master branch.

![Front end repository branches](./Docs/frontend_repo.png)

## R4 - Project Management & Task Delegation Methodology

For Part B, we used a GANTT chart to break down each task and set the timelines for each task. The GANTT chart allowed us to view the timeline visually to determine if we were on track. It was also useful for task delegation and progress updates as it was loaded onto Google Sheets as a shared document, and each member of the team was able to assign themselves their desired tasks and update the progress of their work daily to avoid task duplication. We also had regular meetings each day to update each other on our progress from the day before, and what we will be working on for the current day. The chart was updated together during our meetings and completed tasks were highlighted in blue. There were occasions where one member would start on a feature but when they were unable to complete it the task was reassigned to another member to complete, such as the registration component.

Link to the GANTT chart: https://drive.google.com/file/d/1aOBmitjLujQz2aw10USYwxp5Jru9RyVi/view?usp=sharing

![GANTT chart screenshot](./Docs/gantt-screenshot.png)

A Trello board was used to track miscellaneous tasks and store the link to the GANTT chart:

![Trello screenshot](./Docs/trello_partb.png)

## R5 - Produce a working application that meets client and user needs

During the requirements gathering process, the client emailed us a number of features and services she would like to be included in the site:

### Online appointments

- Online appointment that generates an email to both the person making the appointment and the clinic: This will supplement their current workflow of taking appointments over the phone then keying it into the clinic software. It will be another avenue where staff can receive appointment requests and will be minimally disruptive to their current workflow. For users, it will be a convenient way for them to make appointments as it can be done at any time without regards to clinic hours.

![Booking Form](./Docs/booking_form.png)

![Confirmation email](./Docs/confirm_email.png)

### Services list

- A list of services that the clinic provides, including pictures as she wishes to provide before/after photos of skin conditions successfully treated at the clinic. She also requested to include the Influenza test specifically as they are the only clinic in the area that offers the Influenza test and treatment. We have included a services page to inform users of all the services the clinic provides, and created an admin dashboard for the services page to enable content on this page to be created, updated and deleted.

![Services page](./Docs/services.png)

![Admin services page](./Docs/admin_services.png)

### Vaccines list

- The client request us to include a list of vaccines with an accompanying short description and picture as the clinic stocks a wide variety of vaccines. To meet this requirement, we created a stand-alone vaccines page as well as an admin vaccines page to enable the client to create, edit and delete vaccines.

![Vaccines page](./Docs/vaccines.png)

![Admin vaccines page](./Docs/admin_vaccines.png)

## R8 - Provides Evidence of UAT (User Testing)

### Development Environment

#### UAT Instructions

![](./Docs/UAT-Admin.png)

#### Klinik GP MERN UAT Video:

[![UAT](https://img.youtube.com/vi/Brtwdpqltrk/0.jpg)](https://www.youtube.com/watch?v=Brtwdpqltrk&feature=youtu.be "Klinik GP MERN UAT")

#### Manual Production Tests Features

![](./Docs/ProductionTest-Features.png)

#### Manual Production Test Cases

![](./Docs/ProductionTests-TestsCases.png)

#### Manual Production Tests Features

![](./Docs/ProductionTest-Features.png)

### Jest Coverage Report

![](./Docs/Testing_Coverage_Reports/BackEnd_Jest_Coverage.png)

### Cypress Full Test Passing Video

[![Cypress Tests](https://img.youtube.com/vi/VTN7EUwHs80/0.jpg)](https://www.youtube.com/watch?v=VTN7EUwHs80&feature=youtu.be "Klinik GP MERN Cypress Tests")

### Cypress Coverage Report

![](./Docs/CypressCoverageReport.png)

## R9 Utilises a Formal Testing Framework

Unit Testing > System Integration Testing > User Acceptance Testing

Firstly lets talk about the testing frameworks that were used in this project, `Jest` and `Cypress`.
Jest is a easy to integrate JavaScript testing framework it is very commonly used to test Node, React and Express applications. <br>
Cypress is primarily a front end testing tool built to test web applications, it can also be used for a large variety of tests including unit tests, system integration tests and end to end tests.

In our project we focused on 3 main testing areas Unit Testing, System Integration Testing and User Acceptance Testing.
Beginning with Unit testing, Unit Testing is a when individual "units" or components are tested the purpose of these tests is to validate that each component functions as intended before they're integrated further. In our project we used both Jest and Cypress, using Jest we tested backend routes as well as controllers that are used to create, update and delete information from our database and display information to our website. In the frontend we used Cypress to test individual components and ensure that they were loading onto each page as intended for the user.

After Unit Testing we moved onto System Integration Testing also known as SIR in these tests the individual units or components are tested together in a combined test to see if they work as intended or if when they're grouped together faults arise. We used Cypress in these tests to ensure that our front end components were working together as expected, that pages would load the components and display information from our backend/MongoDB Atlas database as intended. We also tested the error handling of our pages, and form components to ensure validation was functioning as expected.

Finally we moved onto Production Testing and User Acceptance Testing, these are generally the final phase of testing.
Production Testing is performed on the live environment to ensure that to production website functions the same as the development environment. Our production testing was carried out manually using a spread sheet of pre-planned tests where we described the tests we would be performing, the expected result, the actual result and then each test was graded with a pass or fail. We then returned to any failed tets evaluated the problem, repaired and re-tested where possible. We had a generally very good production test result across the board aside from a few small hiccups. <br>
Lastly User Acceptance Tests is when real users of the software uses the final production website to complete a series of tests that are defined by the developer, these tests are designed to see if the website can support general day to day usage. For our user acceptance tests our client Dr. Leong completed a series of tests that be seen above and provided us feedback.

## R12 - _Part A - Documentation_

## R1 - Description of your website

The website is for a general practice clinic in Malaysia called Klinik Dr Leong Subang Jaya (Dr Leong's medical clinic). It is a fairly new medical clinic opened in early 2019 that does not have a website up and running yet. Currently, the clinic uses a Facebook page to provide information such as opening hours and contact information for patients. The website is intended to be used to replace the clinic's Facebook page as the main source of information about the clinic. It is intended to be used by both clinic staff and patients.

For patients and unregistered users, the site can be used to view information about the clinic including the staff information, opening hours and contact information, as well as send a general email enquiry. Patients registered with an account an make an appointment by completing a form. They will have access to a user dashboard where they can update their information and view and modify appointments.

Clinic staff will have administrator accounts. Upon login they will be taken to a dashboard where they can view the current day's appointments. They will be able to modify appointment details and manage user accounts, as well as create, edit, update and delete staff profiles and clinic information.

The website will use the following technologies:

Front end:

- HTML
- CSS
- React
- Redux Forms

Back end:

- Node JS
- Express framework for Node JS
- Mongoose for object modelling

Database and storage:

- Amazon S3 bucket for storage of static images
- MongoDB Atlas document database

Hosting:

- Heroku to host the back end content
- Netlify to host the front end content

## R2 - Dataflow diagram

![Data Flow Diagram](./Docs/data_flow_diagram.svg)

## R3 - Application Architecture Diagram

![Application Architecture Diagram](./Docs/application_architecture_diagram.svg)

## R4 - User Stories

![Application Architecture Diagram](./Docs/user_story.png)

## R5 - Wireframes

### Figma Protoype Example

[Prototype Example](https://www.figma.com/proto/DfgmSwycMitQGgsmjiohfW/T2A3?node-id=141%3A0&scaling=contain)

![Prototyping Gif](./Docs/wireframes/prototype.gif)

#### Figma Prototyping Paths

![Prototyping Path](./Docs/wireframes/Wireframe-Prototype-Paths.png)

#### Home Page

![Homepage](./Docs/wireframes/Homepage.png)

#### About The Clinic Page

![](./Docs/wireframes/Aboutclinicpage.png)

#### Patient Sign Up Page

![](./Docs/wireframes/Signuppage.png)

#### Patient Profile Page

![](./Docs/wireframes/Profilepage.png)

#### Make A Booking Page

![](./Docs/wireframes/Createabookingpage.png)

#### Contact Clinic Page

![](./Docs/wireframes/Contactpage.png)

#### Admin Booking Management Page

![](./Docs/wireframes/Adminbookingmanagementpage.png)

#### Admin Edit Clinic Information Page

![](./Docs/wireframes/Admineditpage.png)

## Example Mockups For The Client

#### Home Page

![](./Docs/wireframes/Home-Mock.png)

#### About Page

![](./Docs/wireframes/About-Mock.png)

#### Contact Page

![](./Docs/wireframes/Contact-Mock.png)

## New Pages Added After Speaking With Client

#### Services Page

![](./Docs/wireframes/Servicespage.png)

#### Vaccines Page

![](./Docs/wireframes/Vaccinespage.png)

# Sitemap

![Sitemap](./Docs/sitemap.png)

## R6 - Project Management

### Trello Screenshots

![](./Docs/trello_screenshots/1.png)

![](./Docs/trello_screenshots/2.png)

![](./Docs/trello_screenshots/3.png)

![](./Docs/trello_screenshots/4.png)

![](./Docs/trello_screenshots/5.png)

![](./Docs/trello_screenshots/6.png)

![](./Docs/trello_screenshots/7.png)

### GANTT Chart for timeline planning

![Gantt Chart](./Docs/gantt_screenshots.png)

[GANTT Chart - Excel Document](./Docs/Gantt_Chart.xlsx)
