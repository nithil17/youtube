# YouTube Clone - MERN Stack

A full-stack YouTube Clone built using the MERN Stack (MongoDB, Express.js, React, and Node.js). The application allows users to browse videos, search and filter content, create channels, upload and manage videos, like/dislike videos, and interact through a complete comment system with JWT-based authentication.

---

# Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Reset

## Home Page

* Responsive YouTube-style Header
* Toggle Sidebar
* Search Videos by Title
* Category Filters
* Dynamic Video Grid

## Video Player

* Video Playback
* Like / Dislike Functionality
* Video Description
* Channel Information
* Related Videos

## Comment System

* Add Comments
* Edit Comments
* Delete Comments
* User-based Authorization

## Channel Management

* Create Channel
* View Channel Details
* Display Channel Videos
* Edit Uploaded Videos
* Delete Uploaded Videos

## Video Management

* Upload Video
* Edit Video
* Delete Video
* Category Assignment
* Thumbnail Support

---

# Tech Stack

## Frontend

* React
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

* JSON Web Token (JWT)

## Development Tools

* Vite
* Git
* GitHub

---

# Project Structure

```
youtube/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── data/
│   ├── seed.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd youtube
```

## Backend Setup

```bash
cd server
npm install
npm run dev
```

## Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the `server` directory.

```
MONGO_URI=mongodb://127.0.0.1:27017/youtubeDB

JWT_SECRET=your_secret_key

PORT=5000
```

---

# Seed Database

```
cd server

npm run seed
```

---

# API Endpoints

## Authentication

```
POST   /api/auth/register
POST   /api/auth/login
PUT    /api/auth/reset-password
```

## Videos

```
GET    /api/videos
GET    /api/videos/:id
POST   /api/videos
PUT    /api/videos/:id
DELETE /api/videos/:id
```

## Comments

```
GET    /api/comments/:videoId
POST   /api/comments
PUT    /api/comments/:id
DELETE /api/comments/:id
```

## Channels

```
GET    /api/channels
GET    /api/channels/:id
GET    /api/channels/:id/videos
POST   /api/channels
PUT    /api/channels/:id
DELETE /api/channels/:id
```

---

# 💾 Database Collections

* Users
* Channels
* Videos
* Comments

---

# Project Highlights

* MERN Stack Architecture
* ES Modules
* JWT Authentication
* Axios API Integration
* MongoDB Database
* Protected Routes
* Complete CRUD Operations
* Search Functionality
* Category Filters
* Video Player with Comments
* Like & Dislike System
* Channel Management
* Responsive Design

---

# 📸 Screenshots

Add project screenshots here.

```
README/
├── home.png
├── watch.png
├── channel.png
└── login.png
```

Example:

```
![Home](README/home.png)

![Video Player](README/watch.png)

![Channel](README/channel.png)

![Login](README/login.png)
```

---

# Future Enhancements

* Video File Upload
* Subscribe Feature
* User Profiles
* Watch History
* Playlists
* Notifications
* Dark Mode

---


