# 🌍 Wanderlust — Travel Listing Application

Wanderlust is a **full‑stack travel listing web application** inspired by Airbnb. It enables users to create, browse, and manage travel destinations with secure authentication, image uploads, and modern UI templates.

## 🧰 Tech Stack

-  **Backend:** Node.js, Express.js, MongoDB (Mongoose)
-  **Templating:** EJS + ejs-mate
-  **Authentication:** Passport.js (Local Strategy), Sessions
-  **Image Uploads:** Multer + Cloudinary
-  **Validation:** Joi
-  **Styling:** Bootstrap / Custom CSS
-  **Utilities:** Method-Override, Connect-Flash, Dotenv

---

## 📦 Features 

-  ✅ User Registration & Login with Passport.js
-  ✅ Create, Update & Delete travel listings
-  ✅ Upload multiple images via Cloudinary
-  ✅ Server-side validation with Joi
-  ✅ Flash messages & error handling
-  ✅ Session-based authentication with MongoDB store
-  ✅ Fully functional CRUD routes
-  ✅ Mobile-responsive EJS templates

---

## 📁 Folder Structure

```text
wanderlust/
├── app.js                      # Main server file
├── package.json                # Dependencies & scripts
├── .env                        # Environment variables (not committed)
├── /models                     # Mongoose schemas
├── /routes                     # Express routes
├── /views                      # EJS templates
├── /public                     # Static assets (CSS, JS, images)
└── /utils                      # Utility functions
```

> Tip: If your tree doesn’t render in some viewers, ensure the block is fenced with triple backticks and a language hint like `text`.

---

## 🔐 Environment Variables

Create a `.env` file in the project root with the following keys:

```dotenv
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret
MONGODB_URI=your_mongodb_connection_uri
SECRET=your_session_secret
```

---

## 🛠️ Getting Started Locally

### 1) Clone the Repo

```bash
git clone https://github.com/vishxlkr/wanderlust.git
cd wanderlust
```

### 2) Install Dependencies

```bash
npm install
```

### 3) Run the App

```bash
npm run server
```

App will be available at: [http://localhost:3000](http://localhost:3000)

> **Prerequisites:** Node.js (compatible with the version specified in `package.json`), a running MongoDB instance (or Atlas), and a Cloudinary account.

---

## 📜 API / Routes Overview

```http
GET     /                  # Home page
GET     /listings          # Show all listings
POST    /listings          # Create new listing
GET     /listings/:id      # Show single listing
PUT     /listings/:id      # Update listing
DELETE  /listings/:id      # Delete listing

GET     /register          # User registration form
POST    /register          # Register new user

GET     /login             # Login form
POST    /login             # Login user
GET     /logout            # Logout user
```

---

## 📦 package.json

```json
{
   "engines": {
      "node": "22.14.0"
   },
   "name": "wanderlust",
   "version": "1.0.0",
   "description": "A travel listing web application built with Node.js, Express, and MongoDB.",
   "main": "app.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "server": "node app.js"
   },
   "keywords": ["travel", "express", "nodejs", "mongodb", "passport"],
   "author": "Vishal Kumar",
   "license": "ISC",
   "type": "commonjs",
   "dependencies": {
      "cloudinary": "^1.41.3",
      "connect-flash": "^0.1.1",
      "connect-mongo": "^5.1.0",
      "dotenv": "^17.2.1",
      "ejs": "^3.1.10",
      "ejs-mate": "^4.0.0",
      "express": "^4.18.2",
      "express-session": "^1.18.2",
      "joi": "^17.13.3",
      "method-override": "^3.0.0",
      "mongoose": "^8.14.3",
      "multer": "^2.0.2",
      "multer-storage-cloudinary": "^4.0.0",
      "passport": "^0.7.0",
      "passport-local": "^1.0.0",
      "passport-local-mongoose": "^8.0.0"
   }
}
```

---

## 📷 Screenshots

<img width="1904" height="1057" alt="Screenshot 2025-08-23 130408" src="https://github.com/user-attachments/assets/ba3e17bf-0d84-4432-b758-e31588ad6d5d" />
<img width="1900" height="904" alt="Screenshot 2025-08-23 130457" src="https://github.com/user-attachments/assets/c0b6c6ef-4e1d-4345-be2e-5828ef12dfd4" />
<img width="1892" height="679" alt="Screenshot 2025-08-23 130543" src="https://github.com/user-attachments/assets/5e48146d-1059-4efa-9bfb-0b30ba8771c1" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130346" src="https://github.com/user-attachments/assets/fc0dfa60-1a51-4bb3-9596-5569b107b453" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130607" src="https://github.com/user-attachments/assets/4184c331-94bc-4d19-9184-f5c3699edc84" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130633" src="https://github.com/user-attachments/assets/3b195c86-1f13-4a73-9bb4-eb93bfdedd65" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130641" src="https://github.com/user-attachments/assets/2ee65a03-0e16-4f3c-b128-476cac8203f3" />


---

## 👨‍💻 Author

**Vishal Kumar**
GitHub: [https://github.com/vishxlkr](https://github.com/vishxlkr)

---

## 🪪 License

This project is licensed under the **ISC License**.
