# EatEasy

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that enables users to explore, add, and search for recipes. This project includes features for dynamic recipe display, a responsive design, and seamless backend integration.

---

## Features

- **Recipe Management:** Users can add, search, and view recipes.
- **Dynamic API Integration:** Fetch recipes from TheMealDB API.
- **Responsive Design:** Fully responsive UI for an optimized experience on all devices.
- **Like Feature:** Users can like local recipes.
- **Authentication:** User login and logout functionality.

---

## Technologies Used

### Frontend:
- React.js
- Tailwind CSS
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose for ORM)

---

## Setup Instructions

### Prerequisites:
- Node.js and npm installed.
- MongoDB installed or access to a MongoDB cloud instance.
- Git installed.

### Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/EatEasy.git
   cd EatEasy
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` folder and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Run the Application:**
   - Access the app at `http://localhost:3000` for the frontend.
   - Ensure the backend is running at `http://localhost:5000`.

---

## Folder Structure

```
EatEasy/
├── backend/
│   ├── index.js
│   ├── Models/
│   ├── Routes/
│   ├── Middleware/
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   └── .env
└── README.md
```

---

## Contribution Guidelines

- Fork the repository.
- Create a feature branch (`git checkout -b feature-name`).
- Commit your changes (`git commit -m 'Add a new feature'`).
- Push to the branch (`git push origin feature-name`).
- Create a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements

- [TheMealDB API](https://www.themealdb.com/) for recipe data.
- Inspiration from various recipe platforms.

---

### Author

Kartik

- **GitHub:** [your-github-username](https://github.com/your-github-username)
- **LinkedIn:** [your-linkedin-profile](https://www.linkedin.com/in/your-linkedin-profile)

