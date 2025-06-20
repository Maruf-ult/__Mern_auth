# MERN Auth

## 🔗 Live Link
_Coming Soon_

## 📌 Description
**MERN Auth** is a secure authentication system built using the MERN stack: **MongoDB**, **Express.js**, **React.js**, and **Node.js**. It features robust OTP-based verification for user registration, email confirmation, and password recovery — ensuring a highly secure and seamless user experience.

## ✨ Features
- 🔐 OTP Verification for:
  - User signup
  - Email confirmation
  - Password reset
- 📧 Email Integration using Nodemailer:
  - Welcome email upon successful signup
  - OTP delivery for password reset and email verification
- ✅ Secure login/logout with session management
- 🔒 Password hashing and encrypted storage
- 💻 Clean and responsive UI built with React.js

## 🛠️ Technologies Used
- **React.js** – Frontend library
- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Nodemailer & SMTP** – Email handling

## ⚙️ Installation

1. **Clone the repository**
   ```
   git clone https://github.com/Maruf-ult/__Mern_auth
   ```

2. Open the terminal in the repository folder:
 
   ```
   cd MERN_Auth
    ```

3. Install backend dependencies:

   ```
   cd server
   npm install
    ```

4. Install frontend dependencies:
   
   ```
   cd client
   npm install
     ```
5. Configure environment variables
     Create a .env file in the server directory with the following:

     ```
       MONGO_URI=your_mongo_db_connection_string
       SMTP_EMAIL=your_email@example.com
       SMTP_PASS=your_smtp_password
   
     ```
    


7. Configure MongoDB:
- Create an account on MongoDB Compass.
- Create a database and obtain your MongoDB URI.
- Create a `.env` file in the root directory and add your MongoDB URI:

  ```  MONGO_URI=your_mongodb_uri  ```

7. Run the backend application:
   
   ```
   cd server
   npm start
   ```

8. Run the frontend application:
   
   ```
   cd client
   npm run dev
   ```   

   

Feel free to adapt this template to your project's specific requirements. Happy coding! 🚀

: GitHub - Maruf-ult/__Mern_auth
