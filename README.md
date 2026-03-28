# 🏨 AuraStay – Smart Hotel QR Unlock

AuraStay is a **full-stack smart hotel booking system** that removes the need for physical keys and front-desk dependency by using **QR-based digital access**.

---

## 🚀 Features

### 🛏 Booking System

* Browse and select hotels / rooms
* Choose check-in & check-out dates
* Real-time price calculation (INR)

### 🔐 Digital Key (QR Unlock)

* Generates a unique QR-based room key
* Simulated smart lock scan
* Instant access without reception

### 👤 Authentication

* User Registration & Login
* Profile auto-update after login
* Stores user data in database

### 💳 Payment Integration (Simulated)

* Creates orders
* Stores payment data
* Links user → booking → payment

### 🍽 Room Service

* Order food, spa, laundry, concierge
* Add to cart & place order
* Order summary in profile

### 📊 Guest Tracker

* View check-in / check-out status
* Live guest activity simulation
* Dashboard-style tracking

### 🔍 Search & Filter

* Filter hotels (Hotel / Villa / Luxury)
* Search hotels by name

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3 (Custom UI)
* JavaScript (Vanilla)

### Backend

* Node.js
* Express.js

### Database

* SQLite

---

## 📁 Project Structure

```
AURASTAY/
│
├── index.html          # Frontend UI
├── package.json
│
├── server/
│   ├── server.js       # API routes
│   ├── db.js           # SQLite setup
│   └── database.sqlite
│
├── services/
│   └── order-service/
│       └── orderService.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/Roshannaikk/AuraStay--Smart-Hotel-QR-Unlock-.git
cd AuraStay--Smart-Hotel-QR-Unlock-
```

### 2. Install dependencies

```
npm install
```

### 3. Run backend server

```
node server/server.js
```

Server will start at:

```
http://localhost:3000
```

### 4. Run frontend

* Open `index.html` in browser
  OR
* Use VS Code Live Server

---

## 🔗 API Endpoints

### 👤 Auth

* `POST /api/register`
* `POST /api/login`

### 📦 Booking Flow

* `POST /api/users`
* `POST /api/orders`
* `POST /api/payments`
* `POST /api/keys`

---

## 📸 Screens (Optional)

*Add screenshots here for better portfolio impact*

---

## 🌟 Future Improvements

* 🔐 Secure authentication (JWT + hashing)
* 📊 Real-time charts (Chart.js)
* ☁️ Cloud deployment (Render / Vercel)
* 📱 Mobile responsive UI
* 🏨 Real hotel API integration

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Roshan Naik**

---

## 💡 Inspiration

AuraStay is inspired by modern **contactless hotel experiences** where:

* Guests unlock rooms via mobile
* No physical keys required
* Seamless digital hospitality

---

⭐ If you like this project, give it a star on GitHub!
