#  📇 Contact Manager API

A secure and RESTful API built using Node.js, Express.js, and MongoDB, allowing users to register, log in, and manage personal contacts with full CRUD functionality and JWT-based authentication.

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas with Mongoose  
- **Authentication**: JSON Web Tokens (JWT)  
- **Password Security**: Bcrypt  
- **Testing Tool**: Thunder Client (or Postman)

---

## ✅ Features

- User Registration (with hashed passwords)
- Secure Login with JWT token generation
- Token validation using middleware
- CRUD operations for managing contacts
- Each user can access only their own contacts
- Centralized error handling
- Clean modular folder structure

---

## 📁 Folder Structure

Contact_Manager/
│
├── controllers/
│ ├── userController.js
│ └── contactController.js
├── middlewares/
│ ├── validateTokenHandler.js
│ └── errorHandler.js
├── models/
│ ├── userModel.js
│ └── contactModel.js
├── routes/
│ ├── userRoutes.js
│ └── contactRoutes.js
├── config/
│ └── dbConnection.js
├── .env
├── server.js
├── package.json

# Installation 
git clone https://github.com/your-username/contact-manager-api.git
cd contact-manager-api
npm install
npm run dev

#API Endpoints

Method	Route	              Description	                  Auth Required

POST	/api/users/register 	Register a new user	             No
POST	/api/users/login	    Login and get JWT token	         No
GET	/api/users/current	    Get current user info            Yes
GET	/api/contacts          	Get all contacts	               Yes
POST	/api/contacts	        Create a new contact	           Yes
GET	/api/contacts/:id	      Get single contact by ID	       Yes
PUT	/api/contacts/:id      	Update contact by ID	           Yes
DELETE	/api/contacts/:id  	Delete contact by ID       	     Yes


#Tested Using

 Thunder Client (VS Code extension),
[Postman

