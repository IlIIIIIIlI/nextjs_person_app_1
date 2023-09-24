# Project Name - Person App - Next Demo 

Project Description: 

In this app, I want to demonstrate a simple front-end UI that uses Typescript, React, Material UI and Next JS to demonstrate how it would work with the Person APIs. 

For the purpose of simplicity of demo, and showcase how Next JS works, I have also create a new set of REST APIs for the Person REST APIs using Next JS, essentially, using dynamic routing. Because I am splitting the code into separate files for the Rest API, I have decided to use a simple lowDB which essentially stores file as a JSON file. This way, I can persist the data. 

## Table of Contents

- [Front End](#front-end)
- [Data Types](#data-types)
- [APIs](#apis)
- [Usage](#usage)

## Front End

The front end of this project is built using React and Material-UI. It provides a user interface to interact with the APIs and manage a list of people.

## Data Types

### Person

The `Person` type represents an individual with the following properties:

- `id` (number): Unique identifier for the person.
- `firstname` (string): First name of the person.
- `lastname` (string): Last name of the person.
- `phone` (string): Phone number of the person.

Example:

```json
{
  "id": 1,
  "firstname": "John",
  "lastname": "Doe",
  "phone": "123-456-7890"
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The core of the code will be found in pages\index.tsx which has the front-end code. 

### APIs
### Get All People

URL: /api/people
Method: GET
Description: Retrieve a list of all people.
Response: An array of Person objects.
Usage: The front end fetches this API to display a list of people.

### Get Person by ID
URL: /api/people/[id]
Method: GET
Description: Retrieve a specific person by their ID.
Request Parameters: id (number) - ID of the person to retrieve.
Response: A single Person object.
Usage: The front end uses this API to view the details of a specific person.

### Create Person
URL: /api/people
Method: POST
Description: Create a new person.
Request Body: A Person object without the id property.
Response: The newly created Person object.
Usage: The front end uses this API to add a new person to the list.

### Update Person by ID
URL: /api/people/[id]
Method: PUT
Description: Update an existing person by their ID.
Request Parameters: id (number) - ID of the person to update.
Request Body: A Person object with updated properties.
Response: The updated Person object.
Usage: The front end uses this API to edit the details of an existing person.

### Delete Person by ID
URL: /api/people/[id]
Method: DELETE
Description: Delete a person by their ID.
Request Parameters: id (number) - ID of the person to delete.
Response: None.
Usage: The front end uses this API to remove a person from the list.

### Usage

Start the project by running the following commands:


```bash
npm install
npm run dev
```

Access the web application by opening your browser and navigating to http://localhost:3000.

Use the provided user interface to perform the following actions:

View a list of all people.
View the details of a specific person.
Add a new person to the list.
Edit the details of an existing person.
Delete a person from the list.
Interact with the front end to make requests to the corresponding APIs.
