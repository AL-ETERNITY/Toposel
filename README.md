# Toposel

## 📌 Project Overview
Toposel is a backend API built with **Express.js** and **MongoDB**, designed for user authentication and management. It includes user registration, login, and search functionalities. Authentication is handled via **JWT tokens** to ensure secure access.

## 🚀 Features
- **User Registration**: Stores user information (username, email, password, full name, gender, DOB, country) securely.
- **User Login**: Authenticates users and issues a JWT token.
- **Search User**: Retrieve user details by **username** or **email** (requires authentication).
- **Secure Password Storage**: Uses **bcrypt** for hashing passwords.
- **JWT Authentication**: Protects endpoints by requiring a valid JWT token.
- **Input Validation**: Ensures valid email format and strong passwords.

## 🛠️ Tech Stack
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Token)
- **Security**: Bcrypt for password hashing

## 📂 Project Structure
```
Toposel/
│── controllers/        # Route logic (authentication, user management)
│── models/            # Mongoose schemas for MongoDB
│── routes/            # API route definitions
│── middleware/        # JWT authentication middleware
│── config/            # Database configuration
│── .env               # Environment variables (JWT_SECRET, DB_URI)
│── server.js          # Entry point for the application
│── package.json       # Dependencies and scripts
│── README.md          # Project documentation
```

## 🔑 Environment Variables
Create a `.env` file in the root directory and configure the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## 📌 Installation & Setup
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/AL-ETERNITY/Toposel.git
   cd Toposel
   ```
2. **Install Dependencies**:
   ```sh
   npm install cors dotenv express nodemon jsonwebtoken mongoose validator bcrypt
   ```
3. **Run the Server**:
   ```sh
   npm run server
   ```

## 📡 API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | `/api/users/register` | Register a new user |
| POST   | `/api/users/login`    | Authenticate user and return JWT |
| GET    | `/api/users/search?username=johndoe` | Search user by username (JWT required) |
| GET    | `/api/users/search?email=johndoe@example.com` | Search user by email (JWT required) |

## 🔥 Testing with Postman
1. **Register a User** (`POST /api/users/register`)
   ```json
   {
     "username": "johndoe",
     "fullname": "John Doe",
     "gender": "Male",
     "DOB": "1990-05-15",
     "Country": "USA",
     "email": "johndoe@example.com",
     "password": "SecurePass123"
   }
   ```
2. **Login and Get JWT Token** (`POST /api/users/login`)
3. **Use JWT Token in Headers** for protected routes:
   ```
   Authorization: Bearer your_jwt_token_here
   ```
4. **Search User** (`GET /api/users/search?username=johndoe`)

---
Developed by [AL-ETERNITY](siddhantshah469@gmail.com) 🚀

