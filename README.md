# PresiDev-Hackathon
Live Page: [Presidium Platform ](https://presidiumplatform.netlify.app/)

## 1. Introduction
### 1.1. What is Presidium Platform?
Presidium Platform is Team PresiDevs' hackathon submission to CodeCo x Presidium Network Crisis Zone hackathon. Presidium Platform is an innovative solution for the Presidium Network to efficiently manage their end users, operational hubs, donors, suppliers, and delivery teams in areas of conflict.

### 1.2. Team PresiDevs Members
| Name      | Current Role                                                        | Team Role                |
|-----------|---------------------------------------------------------------------|--------------------------|
| Paul Martin  | Software Engineer at Little Dot Studios  | Full-Stack Web Development       |
| Trina Yau | Salesforce Software Engineer at Ford Motor Company                     | Full-Stack Web Development               |

### 1.3. Problem Statement
Presidium Network is a non-profit organization that aims to provide humanitarian aid to areas of conflict. They have a large network of donors, suppliers, delivery teams and operational hubs that they need to manage. They also have a large number of end users that they need to provide aid to. Currently, they are using a combination of Excel spreadsheets and Google Forms to manage their data. This is inefficient and error-prone. They need a more robust system that can help them manage their data and provide them with useful insights.

### 1.4. Solution
Presidium Platform is an end-to-end prototype platform that aims to help Presidium Network manage their end users, operational hubs, donors, suppliers and delivery teams in areas of conflict. It is a web application that is built using React and Django. PresiDev is a prototype that is built to demonstrate the feasibility of the solution.

## 2. Architecture
### 2.1. Front-End
The front-end of Presidium Platform is built using React. It is a single-page application that uses React Router to handle routing. It uses Redux to manage the state of the application. It uses Axios to make API calls to the back-end. It uses Material-UI to provide a consistent look and feel.

### 2.2. Back-End
The back-end of Presidium Platform is built using Django. It uses Django REST Framework to provide a RESTful API. It uses PostgreSQL as the database. It uses Django REST Framework Simple JWT to provide authentication and authorization.

## 3. Features
### 3.1. Authentication
Presidium Platform uses JSON Web Tokens (JWT) to authenticate end users. Users can register and login to the application. Users can also reset their password if they forget it. The application uses Django REST Framework Simple JWT to provide authentication and authorization.

### 3.2. User Management
Presidium Platform allows end users to manage their profile. Users can update their profile information and change their password. Users can also upload a profile picture.

### 3.3. Dashboard
Presidium Platform provides a dashboard that shows the operational hub user a summary of the data in the system. It shows the number of end users, operational hubs, donors, suppliers and delivery teams in the system. It also shows the number of end users that are currently active and the number of end users that are currently inactive.

### 3.4. Order Tracing
Presidium Platform allows operational hub users to trace the order of a specific end user. It shows the order history of the end user. It also shows the current status of the order. It shows the current location of the order. It also shows the estimated time of arrival of the order.

### 3.5. End User Management
Presidium Platform allows operational hub users to manage end users. It allows them to add new end users. It allows them to update the information of existing end users. It allows them to delete end users. It allows them to activate and deactivate end users.

### 3.6. Operational Hub Management
Presidium Platform allows operational hub users to manage operational hubs. It allows them to add new operational hubs. It allows them to update the information of existing operational hubs. 

## 4. Installation
### 4.1. Prerequisites
PresiDev requires the following software to be installed on your machine:
- Node.js
- Python 3.9 or higher
- PostgreSQL

### 4.2. Installation
React Front End:
1. Clone the repository
2. Navigate to the `presidev-frontend` directory
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the application

Django Back End:
1. Clone the repository
2. Navigate to the `presidev-backend` directory
3. Create a virtual environment
4. Activate the virtual environment
5. Run `pip install -r requirements.txt` to install the dependencies
6. Run `python manage.py runserver` to start the application

## 5. Usage
### 5.1. Registering a New User
1. Login as an operational hub user
2. Click on the `Users` button in the navigation bar
3. Click on the `Add User` button
4. Enter the user's information
5. Click on the `Submit` button

### 6. License
This project is not licensed under any license for personal or commercial use. Use by Presidium Network only.
