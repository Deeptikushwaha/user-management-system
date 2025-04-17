# User Management System with Admin Panel

A comprehensive User Management System coupled with an Admin Panel that provides core functionalities such as user registration, profile management, and real-time communication via notifications.

---

## 🚀 User Functionality

- **User Authentication**  
  Implement secure login and sign-up functionality using email and password.

- **Profile Management**  
  Allow users to update their profiles with the following details:
  - Name
  - Mobile Number
  - Bio
  - Availability Time (time slots indicating when the user is available for notifications).

- **Profile Updates**  
  Provide users with the ability to modify their profile details at any time.

- **Notification System**  
  Users can send notifications to one or multiple users, consisting of:
  - A brief embedded text message.  
  Notifications should adhere to the recipient's availability:
  - **Available Time:** The notification is displayed immediately.
  - **Unavailable Time:** The notification is queued and delivered when the recipient becomes available.

---

## 🛠️ Admin Functionality

- **Notification Management**  
  Admin can send notifications to:
  - A single user.
  - Multiple users simultaneously.

  Admin has the ability to classify notifications as:
  - **Critical Notifications:** Delivered immediately, regardless of the recipient's availability.
  - **Non-Critical Notifications:** Delivered based on the recipient's availability.

---

## 🧰 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing

---

## 📦 Setup Instructions

```bash
# 1. Clone the repository
$ git clone https://github.com/Deeptikushwaha/user-management-system.git
$ cd ums

# 2. Install dependencies
$ npm install

# 3. Configure environment variables
$ cp .env

# 4. Start the server
$ npm start
```

---

## 🧪 API Endpoints

### User Routes
- `POST /api/users/register` – Register a new user
- `POST /api/users/login` – Login with email and password
- `PUT /api/users/profile` – Update profile (protected)
- `POST /api/users/notify` – Send notification (protected)

### Admin Routes
- `POST /api/admin/notify` – Send critical/non-critical notifications to users (admin only)

---

## 🧾 More
- Passwords are securely hashed using bcryptjs.
- JWT-based authentication for protected routes.
- All notifications are timestamped and respect user availability.

---

---

## Authors

- [@Deeptikushwaha](https://www.github.com/Deeptikushwaha)


