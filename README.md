# React Firebase Authentication App

This project is a React application with Firebase authentication integration, providing functionalities such as login, signup, password reset, and password change. The navigation is managed using `react-router-dom`.

## Features

- **Login**: Authenticates users using Firebase.
- **Signup**: Registers new users via Firebase.
- **Forgot Password**: Sends a password reset email to the registered email.
- **Change Password**: Allows authenticated users to change their password.
- **Navigation**: Conditional navigation based on user authentication status.

## Technologies Used

- React
- Firebase Authentication
- React Router DOM

## Project Structure

```plaintext
src/
|-- components/
|   |-- NavBar.js
|-- pages/
|   |-- About.js
|   |-- ChangePassword.js
|   |-- ForgotPassword.js
|   |-- Home.js
|   |-- Login.js
|   |-- Signup.js
|-- App.js
|-- index.js
|-- Firebase.js
```

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/react-firebase-auth-app.git
    cd react-firebase-auth-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure Firebase**:
    - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
    - Add a web app to your Firebase project.
    - Copy the Firebase configuration and replace the placeholder in `Firebase.js`:
    ```javascript
    // Firebase.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export default app;
    ```

4. **Start the application**:
    ```bash
    npm start
    ```

## Usage

- **Login**: Navigate to `/login` and enter your registered email and password.
- **Signup**: Navigate to `/signup` and create a new account.
- **Forgot Password**: Navigate to `/fp` and enter your registered email to receive a password reset link.
- **Change Password**: Navigate to `/cp` after logging in to change your password.
- **About**: Navigate to `/about` to see the about page.
- **Home**: Navigate to `/home` after logging in to access the home page.

## Code Explanation

### `NavBar.js`

Handles navigation links based on the user's authentication status.

### `About.js`

Renders the About page and redirects unauthenticated users to the login page.

### `ChangePassword.js`

Allows authenticated users to change their password. It checks if the user is authenticated before rendering the form.

### `ForgotPassword.js`

Provides a form to reset the password via Firebase authentication.

### `Home.js`

Displays a welcome message to authenticated users and provides a logout functionality.

### `Login.js`

Handles user login using Firebase authentication and redirects to the home page upon successful login.

### `Signup.js`

Provides a registration form for new users and integrates with Firebase authentication to create new accounts.

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License.

### Summary

This `README.md` file provides a comprehensive guide for setting up and using your React Firebase Authentication App. It includes sections on features, technologies used, project structure, installation steps, usage instructions, code explanations, contribution guidelines, and licensing.
