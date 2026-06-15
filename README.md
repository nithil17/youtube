# YouTube Clone - MERN Stack

## Overview

This project is a full-stack YouTube Clone developed using the MERN Stack (MongoDB, Express.js, React, Node.js).

The application allows users to browse videos, search videos, filter by category, register and login using JWT authentication, create channels, manage videos, interact with videos, and manage comments.

---

## Technologies Used

### Frontend

- React
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- JWT (JSON Web Token)

### Version Control

- Git & GitHub

---

## Features

### Home Page

- Responsive Header
- Toggle Sidebar
- Search Videos
- Category Filters
- Video Grid

### User Authentication

- Register
- Login
- Reset Password
- JWT Authentication
- Protected Routes

### Video Management

- Add Video
- Edit Video
- Delete Video
- Video Player
- Like / Dislike

### Comments

- Add Comment
- Edit Comment
- Delete Comment

### Channel

- Create Channel
- View Channel
- Edit Videos
- Delete Videos

### Database

MongoDB Collections:

- Users
- Videos
- Channels
- Comments

---

## Folder Structure

```
client/
server/

client/src/
components/
pages/
services/
context/

server/
controllers/
models/
routes/
middleware/
config/
data/
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```
MONGO_URL=mongodb://127.0.0.1:27017/youtubeDB
PORT=5000
JWT_SECRET=your_secret_key
```

---

## Seed Database

```bash
cd server
npm run seed
```

---

## API Routes

### Authentication

```
POST /api/auth/register
POST /api/auth/login
PUT  /api/auth/reset-password
```

### Videos

```
GET    /api/videos
GET    /api/videos/:id
POST   /api/videos
PUT    /api/videos/:id
DELETE /api/videos/:id
```

### Comments

```
GET    /api/comments/:videoId
POST   /api/comments
PUT    /api/comments/:id
DELETE /api/comments/:id
```

### Channels

```
GET    /api/channels
GET    /api/channels/:id
POST   /api/channels
PUT    /api/channels/:id
DELETE /api/channels/:id
```

---

## Project Highlights

- MERN Stack Architecture
- ES Modules
- JWT Authentication
- Axios API Integration
- MongoDB Database
- Protected Routes
- CRUD Operations
- Responsive Layout
- Search and Category Filters
- Video Player with Comments
- Channel Management

---

## Future Improvements

- Video Upload
- User Profile
- Subscribe Feature
- Watch History
- Playlists

---

