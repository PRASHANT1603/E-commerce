# MERN E-Commerce Website

This is a full-stack e-commerce application that I'm building to improve my MERN stack skills and understand how real-world e-commerce websites work. The project focuses on backend development, authentication, product management, and shopping cart functionality.

It is still under development, and I'm adding new features as I continue learning.

## Features

Currently implemented:

* User registration
* User login
* JWT authentication
* Password encryption using bcrypt
* Protected routes
* Get logged-in user profile
* Add new products
* Upload product images
* Display all products
* Add products to cart
* View cart
* Remove products from cart

## Tech Stack

Frontend

* React
* React Router
* Axios

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Authentication

* JWT
* bcryptjs

Other

* Multer
* dotenv
* CORS

## Project Structure

```
Backend
├── Controller
├── Middleware
├── Models
├── Routes
├── uploads
└── server.js

Frontend
├── Components
├── Pages
└── App.jsx
```

## API Endpoints

Authentication

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

Products

```
POST   /api/products
GET    /api/landing
```

Cart

```
POST   /api/cart/add
GET    /api/cart
DELETE /api/cart/:productId
```

## Installation

Clone the repository

```bash
git clone https://github.com/PRASHANT1603/E-commerce.git
```

Go to the project folder

```bash
cd E-commerce
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend

```bash
npm run dev
```

Run the frontend

```bash
npm run dev
```

## What I'm Learning

I'm building this project to get better at:

* REST APIs
* Authentication and authorization
* MongoDB and Mongoose
* File uploads
* Backend architecture
* React API integration
* Shopping cart logic
* Error handling
* Building full-stack applications

## Next Features

The features I plan to add next are:

* Update cart quantity
* Checkout
* Order management
* Payment gateway integration
* Wishlist
* Product search
* Product filters
* User dashboard
* Admin dashboard
* Product reviews and ratings

## About

This project is part of my journey to become a full-stack developer. Instead of copying an existing project, I'm building each feature step by step to understand how everything works and to improve my problem-solving skills.

Feedback and suggestions are always welcome.
