# 🎥 MERN YouTube Clone

A full-stack YouTube Clone built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse videos, view video details, manage videos, authenticate with JWT, and interact through comments.

---

## 🚀 Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout
- Context API Authentication

### Videos

- View All Videos
- View Single Video
- Search Videos
- Filter Videos by Category
- Add New Video
- Edit Existing Video
- Delete Video
- Related Videos
- Channel Page

### Comments

- Add Comment
- View Comments
- Update Comment
- Delete Comment

### Admin

- Admin Dashboard
- Manage Videos
- CRUD Operations

### UI

- Responsive Layout
- Sidebar Navigation
- Search Bar
- Video Cards
- Loading States
- Error Handling

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Context API
- CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JWT (JSON Web Token)
- bcryptjs

---

# 📁 Project Structure

```
youtube-clone/

│
├── client/
│
│   ├── src/
│   │
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
└── server/
    │
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── index.js
    └── package.json
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/youtube-clone.git

cd youtube-clone
```

---

# Backend Setup

```bash
cd server

npm install

npm run dev
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# Environment Variables

## Server (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

# REST API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Videos

### Get All Videos

```
GET /api/videos
```

### Get Single Video

```
GET /api/videos/:id
```

### Add Video

```
POST /api/videos
```

### Update Video

```
PUT /api/videos/:id
```

### Delete Video

```
DELETE /api/videos/:id
```

### Get Videos By Channel

```
GET /api/videos/channel/:channel
```

---

## Comments

### Get Comments

```
GET /api/comments/video/:videoId
```

### Add Comment

```
POST /api/comments
```

### Update Comment

```
PUT /api/comments/:id
```

### Delete Comment

```
DELETE /api/comments/:id
```

---

# 🧠 Project Architecture

```
React

↓

Services

↓

Fetch API

↓

Express Routes

↓

Controllers

↓

Models

↓

MongoDB

↓

JSON Response

↓

React State

↓

UI
```

---

# 📚 Concepts Used

- React Hooks
- useState
- useEffect
- useContext
- React Router
- Context API
- Protected Routes
- JWT Authentication
- REST APIs
- CRUD Operations
- MongoDB Models
- MVC Architecture
- Service Layer Pattern
- Async/Await

---

# 💻 Screenshots

## Home Page

(Add Screenshot)

---

## Video Player

(Add Screenshot)

---

## Admin Dashboard

(Add Screenshot)

---

## Login Page

(Add Screenshot)

---

# 🔮 Future Improvements

- Like & Dislike System
- User Profile Page
- Video Upload
- Cloudinary Integration
- Pagination
- Infinite Scroll
- Dark Mode
- Skeleton Loading
- Unit Testing
- Docker Support
- Deployment on Vercel & Render

---

