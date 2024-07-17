# React Firebase Authentication App

This project is a robust React application that integrates Firebase Authentication, providing essential features such as user login, signup, password reset, and password change. The navigation is managed using `react-router-dom`, ensuring a seamless user experience.

**Live Demo:** [React Firebase Authentication App](https://ameyreactauth.web.app)

## Features

- **Login**: Secure user authentication using Firebase.
- **Signup**: User registration through Firebase.
- **Forgot Password**: Password reset email functionality.
- **Change Password**: Option for authenticated users to update their passwords.
- **Conditional Navigation**: Navigation is tailored based on user authentication status.

## Technologies Used

- **React**
- **Firebase Authentication**
- **React Router DOM**

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
    - Copy the Firebase configuration and update the placeholder values in `Firebase.js`:
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

- **Login**: Access the `/login` route and enter your registered credentials.
- **Signup**: Navigate to `/signup` to create a new account.
- **Forgot Password**: Visit `/fp` to request a password reset link.
- **Change Password**: Go to `/cp` post-login to change your password.
- **About**: Access `/about` to view information about the application.
- **Home**: After logging in, navigate to `/home` for a personalized experience.

## Code Overview

### `NavBar.js`
Manages navigation links, adapting based on the user’s authentication status.

### `About.js`
Displays information about the app; unauthenticated users are redirected to the login page.

### `ChangePassword.js`
Enables authenticated users to change their passwords, ensuring authentication checks are in place.

### `ForgotPassword.js`
Facilitates password reset requests via Firebase authentication.

### `Home.js`
Welcomes authenticated users and includes logout functionality.

### `Login.js`
Handles user login with Firebase, redirecting to the home page upon successful authentication.

### `Signup.js`
Provides registration capabilities, integrating with Firebase to create new user accounts.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests for any improvements.

## License

This project is licensed under the MIT License.
