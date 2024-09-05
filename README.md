# Employee Management System - Frontend

Employee Management System frontend built using React.js, interacts with the backend API for employee data management. It supports CRUD (Create, Read, Update, Delete) operations for employees, with additional auth features like login, registration, and employee management. [Backend Repository](https://github.com/aamilham/backend-employee-management)

## Authors

- [@aamilham](https://github.com/aamilham)

## Features
- **Login and Register**: Users can log in and register.
- **Employee Management**: Users can view, create, update, and delete employee records.
- **Filtering and Search**: Users can search employees by name, filter by position, and filter by salary range.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js (>= 12.x.x)](https://nodejs.org/).
- npm (comes with Node.js)

## Step-by-Step Installation

### 1. Clone the Repository

Clone the repository to your local

### 2. Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

### 3. Start Backend (Include Databases)

This Frontend communicates with a [Backend API](https://github.com/aamilham/backend-employee-management), you need to start the API first. URL format that used in this frontend is :

```bash
REACT_APP_API_URL=http://localhost:8000/api
```

### 4. Start the Application

Now you can start the React development server by running:

```bash
npm start
```

This will start the application, access it on `http://localhost:3000`.

### 5. Add Ons - Building the Application for Production

If you want to create an optimized build for production, you can run the following command:

```bash
npm run build
```

This will generate a `build` folder with the optimized version of the application.

## Project Structure

Here's a quick overview of the key files and folders in this project:

```
.
├── public/                 # Public assets
├── src/                    # Main source code folder
│   ├── components/         # React components like Login, Register, EmployeeList, etc.
│   ├── context/            # Context API files for managing global state
│   ├── App.js              # Main app file with routing
│   ├── index.js            # Entry point for the React application
│   └── ...
├── package.json            # Project metadata and dependencies
└── README.md               # Instructions (this file)
```

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run eject`**: If you need to customize the configuration.

## Dependencies

This project uses the following main dependencies:

- **React**: JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React apps.
- **Axios**: Promise-based HTTP client for interacting with the backend API.
- **Context API**: To manage global state, including authentication tokens.

## Notes

- Ensure that the backend API is running and accessible at the `REACT_APP_API_URL` that you have configured.
- The backend should implement JWT-based authentication for the protected routes, such as employee management.

## Troubleshooting

- **Blank Page**: If the application shows a blank page, check if the backend API URL is correctly set up and reachable.
- **Login Issues**: Ensure that the backend JWT authentication is correctly configured and that valid credentials are used.
