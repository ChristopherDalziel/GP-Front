# Real World App - Doctor Leong's Medical Clinic

### By Heng CAI, Christopher DALZIEL, Nhan DANG

## _Part B - Documentation for Coding Component_

## R10 - Link to deployed website

[Hosted Site](https://klinik-gp.netlify.com)

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

- Amazon S3 bucket for storage of static images
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

- Axios is used

## R8 - Provides Evidence of UAT (User Testing)

### Development Environment

#### UAT Instructions

![](./Docs/UAT-Admin.png)

#### Klinik GP MERN UAT Video:

[![UAT](https://img.youtube.com/vi/Brtwdpqltrk/0.jpg)](https://www.youtube.com/watch?v=Brtwdpqltrk&feature=youtu.be "Klinik GP MERN UAT")

### Production Environment

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
