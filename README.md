![frontend](frontend/src/assets/github-photo.png)


# Book_Store

A full-stack web book store application. Users can browse books, add books to their cart, and checkout. Admins can manage book inventory. The application features authentication, state management, and a modern UI.

---

## Features

- **Admin Functionality**: Admins have access to a dedicated panel for managing inventory.
- **Shopping Cart**: Users can add books to their cart and proceed to checkout.
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Database Integration**: MongoDB for storing book and orders data.
- **State Management**: Uses Redux Toolkit (RTK) for efficient and scalable state management.
- **Responsive Design**: Built with React and Tailwind CSS for a clean and responsive user interface.


---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Firebase Authentication**: For user login and registration.

### Backend
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating RESTful APIs.
- **MongoDB**: As the database to store user and book information.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- MongoDB installed and running locally or a MongoDB Atlas account.
- A Firebase project set up for authentication.

### Clone the Repository
```bash
git clone https://github.com/varun77x/Book_Store.git
cd Book_Store
```

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and configure the following:
   ```env
   MONGO_URL=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   PORT=your_port
   ```
4. Start the server:
   ```bash
   nodemon index.js
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase:
   - Create a `.env.local` file in the `frontend` directory and configure the following:
     ```env
     VITE_API_KEY=your-api-key
     VITE_AUTH_DOMAIN=your-auth-domain
     VITE_PROJECT_ID=your-project-id
     VITE_STORAGE_BUCKET=your-storage-bucket
     VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_APP_ID=your-app-id
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```

