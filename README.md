# 🌍 Real-Time Location Sharing App

A web-based real-time location sharing application built with **Node.js**, **Express**, **Socket.io**, and **Leaflet.js**.  
Users can share their live location, and the map updates in real-time across all connected devices.

---

## 🚀 Features
- 📍 Real-time location updates with **WebSockets (socket.io)**
- 🗺️ Interactive maps powered by **Leaflet.js**
- 🖥️ Works across devices (desktop and mobile)
- ⚡ Instant user connect/disconnect notifications
- 🎯 Simple and clean user interface

---

## 🛠️ Tools and Frameworks Used

| Tool / Framework | Purpose |
|:-----------------|:--------|
| **Node.js** | Backend server runtime |
| **Express.js** | Web framework for routing and server management |
| **Socket.io** | Real-time bidirectional communication between client and server |
| **Leaflet.js** | Interactive maps for live location display |
| **EJS** | Template engine for rendering HTML pages dynamically |
| **CSS** | Styling the frontend layout |
| **JavaScript** | Frontend scripting to handle map interaction and socket communication |

---

## 📚 Important Concepts Used During Development

- **Express Static Middleware**  
  Serving CSS and JS files to the client using `express.static()`.

- **Socket.io Events**  
  Managing real-time communication using custom socket events like `send-location`, `receive-location`, and `user-disconnected`.

- **EJS Templating**  
  Dynamically rendering server-side HTML using EJS views.

- **Leaflet.js Map Initialization**  
  Using `L.map()`, `L.marker()`, and `setView()` for real-time map updates.

- **HTTP and WebSocket Server Setup**  
  Using `http.createServer()` manually with Express to enable WebSocket support.

- **Cross-device Testing**  
  Making sure the app works properly on both PC and mobile devices in a local network.

---

## 📸 Screenshots

(You can add screenshots of your project here later!)

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
