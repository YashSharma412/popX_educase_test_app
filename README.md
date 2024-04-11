# PopX Web App

## Live Link: https://pop-x-educase-test-app.vercel.app/

[PopX Web App](https://pop-x-educase-test-app.vercel.app/)

## Example Data

Use the following data to log in and sign up:

- **Name:** Marry Doe
- **Mobile Number:** 1234567890
- **Email:** marry@gmail.com
- **Password:** marrydoe
- **Company:** *Not specified*
- **Agency:** *false*

## Features

- **Login and Signup Pages:** Fully functional pages with validation checks for input fields, accounting for various edge cases.
- **Feedback Messages:** Utilizes React Toastify to display success or error messages for validation checks.
- **State Management:** Employs React context to manage the currently logged-in user and a list of previously signed-in users (as there is no backend for this application).
- **Routing:** Uses React Router for navigation between different endpoints.

### Page Routes

- `/`: Home page
- `/create`: Sign up page
- `/signin`: Log in page
- `/profile`: Profile page

## Technologies

- **React + Vite**: This project is set up with a minimal React and Vite configuration, including Hot Module Replacement (HMR) and ESLint rules.

### Plugins

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md):** Uses [Babel](https://babeljs.io/) for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc):** Uses [SWC](https://swc.rs/) for Fast Refresh.
