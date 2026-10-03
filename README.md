# Mini ERP / CRM — Frontend

This is the frontend application for the Mini ERP / CRM system. It is built with React and TypeScript using Vite.

The application provides different screens and controls based on the user's role and communicates with the backend through REST APIs.

## Tech Stack

* React
* TypeScript
* Vite
* React Router
* Axios
* Recharts

## Main Features

* JWT-based login
* Role-based navigation
* Customer management
* Product management
* Inventory management
* Sales challans
* Dashboard and charts
* Reports
* Global search
* Company settings
* PDF and Excel exports

## User Roles

### ADMIN

Has access to all available modules.

### SALES

Can access:

* Customers
* Sales Challans

### WAREHOUSE

Can access:

* Products
* Inventory

### ACCOUNTS

Can access:

* Dashboard
* Reports
* Challan viewing

## Project Structure

```text
src/
├── pages/
├── components/
├── api/
├── utils/
├── App.tsx
└── main.tsx
```

## Running the Frontend

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Backend Connection

The frontend uses Axios to communicate with the backend API.

The API configuration is located in:

```text
src/api/axios.js
```

The default backend URL is:

```text
http://localhost:5000/api
```

Make sure the backend server is running before using the application.

## Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Linting

Run ESLint with:

```bash
npm run lint
```
