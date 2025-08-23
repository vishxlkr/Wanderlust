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


<img width="1904" height="1057" alt="Screenshot 2025-08-23 130408" src="https://github.com/user-attachments/assets/13545d25-7369-4799-847d-ce286de2161e" />
<img width="1900" height="904" alt="Screenshot 2025-08-23 130457" src="https://github.com/user-attachments/assets/9e6d1991-4f0f-42ce-b45e-07193c0c1e82" />
<img width="1892" height="679" alt="Screenshot 2025-08-23 130543" src="https://github.com/user-attachments/assets/e5338104-3e9c-4653-897a-7e3a4a280c9d" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130346" src="https://github.com/user-attachments/assets/d4bbf116-1b02-497f-aa00-42cbded431bf" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130607" src="https://github.com/user-attachments/assets/30242443-f0c5-4d38-ab61-68797f9dc6b7" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130633" src="https://github.com/user-attachments/assets/d9077a5c-2dd7-4d25-9744-100b79fe37e4" />
<img width="1919" height="1079" alt="Screenshot 2025-08-23 130641" src="https://github.com/user-attachments/assets/f75728ad-527a-4346-a03e-43946d7a6f4c" />


---

## 👨‍💻 Author

**Vishal Kumar**
GitHub: [https://github.com/vishxlkr](https://github.com/vishxlkr)

---

## 🪪 License

This project is licensed under the **ISC License**.
