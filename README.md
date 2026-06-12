# Spotify Clone 🎵

A modern Spotify-inspired music streaming web application built with React, Context API, Node.js, Express, and external music APIs.

This project was built to practice full-stack web development, state management, API integration, routing, and modern UI design while recreating core Spotify functionality.

---

## 🚀 Features

### 🎵 Music Player

* Play songs from local library
* Play song previews from iTunes API
* Play / Pause controls
* Next / Previous track controls
* Shuffle mode
* Repeat mode
* Volume control
* Progress bar with seeking support
* Automatic queue playback

---

### 🔍 Search System

* Real-time search using iTunes API
* Debounced API requests
* Search by:

  * Song name
  * Artist name
  * Album name
* Dynamic search results
* Song artwork display
* Playable preview tracks

---

### ❤️ Liked Songs

* Like songs
* Remove liked songs
* Persistent storage using LocalStorage
* Dedicated Liked Songs page

---

### 📚 Library Management

* View saved music collection
* Manage playlists
* Access liked songs
* Access statistics dashboard

---

### 📁 Playlist System

* Create playlists
* Add songs to playlists
* Remove songs from playlists
* Rename playlists
* Delete playlists
* Persistent LocalStorage storage

---

### ⏭️ Queue Management

* Add songs to queue
* Remove songs from queue
* Reorder queue
* Queue autoplay
* Queue persistence
* Clear queue functionality

---

### 🕒 Recently Played

* Automatically tracks played songs
* Stores listening history
* Displays recent listening activity
* Persistent LocalStorage storage

---

### 🎯 Recommendation System

* Personalized recommendations
* Based on:

  * Recently Played
  * Liked Songs
* Dynamic recommendation cards
* Playable recommendations

---

### 📊 Statistics Dashboard

Displays:

* Total Liked Songs
* Total Playlists
* Recently Played Count
* Songs in Queue
* Favorite Artist
* Most Played Song

Inspired by Spotify Wrapped analytics.

---

### 🌐 API Integration

Powered by:

* iTunes Search API

Dynamic sections include:

#### 🔥 Trending Now

Shows trending music fetched from API.

#### 🎯 Made For You

Personalized recommendations based on listening activity.

#### 🌍 Discover

Explore new artists and tracks.

#### 🎵 Recommended For You

Dynamic recommendation section powered by listening history.

---

### 🎨 User Interface

* Spotify-inspired design
* Responsive layout
* Dynamic backgrounds
* Glassmorphism effects
* Hover animations
* Sidebar navigation
* Right activity panel
* Bottom music player

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* React Context API
* Axios
* React Icons
* CSS3

### Backend

* Node.js
* Express.js
* Axios
* CORS
* dotenv

### APIs

* iTunes Search API

### Storage

* LocalStorage

---

## 📂 Project Structure

```text
SpotifyClone/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── assets/
│   └── songs.js
│
├── backend/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd SpotifyClone
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🎯 Learning Objectives

This project demonstrates:

* React Component Architecture
* Context API State Management
* API Integration
* Backend Development with Express
* REST API Consumption
* Local Storage Persistence
* Dynamic Routing
* Music Player Logic
* Queue Management Systems
* Recommendation Systems
* Analytics Dashboard Development

---

## 🔮 Future Improvements

* User Authentication
* Spotify OAuth Login
* Backend Database Integration
* User Accounts
* Real Music Streaming
* Dark/Light Theme Support
* Drag & Drop Playlists
* Mobile Responsive Optimization
* Lyrics Integration
* Advanced Recommendation Engine

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Search Page
* Music Player
* Queue System
* Playlist Page
* Statistics Dashboard

---

## 👨‍💻 Author

Built as a personal learning project to explore modern full-stack web development and music streaming application architecture.
