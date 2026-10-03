# FreelanceFinder

FreelanceFinder is a web application that helps users find and manage freelance opportunities through a simple and responsive interface. The project uses React for the frontend and Node.js with Express.js for the backend, with MongoDB used for data storage.

## Project Structure

```text
FreelanceFinder/
├── client/    # React frontend
└── server/    # Node.js and Express backend
```

### Client

The `client` folder contains the frontend application built with React. It handles the user interface, navigation, forms, API communication, and presentation of freelance-related information.

Main technologies and libraries include:

* React
* React Router
* Bootstrap
* Material UI
* Axios
* React Bootstrap
* Vite
* TypeScript

### Server

The `server` folder contains the backend application built with Node.js and Express.js. It handles server-side logic, API requests, authentication, and communication with MongoDB.

Main technologies include:

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Bcrypt
* JSON Web Token

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd FreelanceFinder
```

### 2. Set Up the Frontend

Open the client folder:

```bash
cd client
```

Install the required dependencies:

```bash
npm install
```

### 3. Set Up the Backend

Open a new terminal and navigate to the server folder:

```bash
cd server
```

Install the backend dependencies:

```bash
npm install
```

## Running the Project

### Start the Backend

From the `server` folder:

```bash
node index.js
```

If the project uses a different backend entry file or start script, use the corresponding command defined in the server configuration.

### Start the Frontend

From the `client` folder:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, usually:

```text
http://localhost:5173
```

Open this URL in a browser to access FreelanceFinder.

## Frontend Commands

From the `client` folder:

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Checks the frontend code using ESLint.

## Backend Configuration

The backend requires a MongoDB connection. If the project uses environment variables, create a `.env` file inside the `server` folder and add the required configuration, such as the MongoDB connection string and authentication-related settings.

Do not commit sensitive credentials or `.env` files to the repository.

## Verification

After installing the dependencies, the project setup can be verified by checking the `package.json` files in both the `client` and `server` folders.

Once both the frontend and backend are running successfully, FreelanceFinder is ready for local development and testing.
