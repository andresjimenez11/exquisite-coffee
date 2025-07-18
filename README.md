# Exquisite Coffee ☕

A modern coffee shop management system built with Laravel backend and React frontend.

## 🚀 Features

- Modern coffee shop interface
- Product management system
- User authentication
- Responsive design
- RESTful API architecture

## 🛠️ Tech Stack

**Backend:**
- Laravel (PHP Framework)
- MySQL Database
- Composer

**Frontend:**
- React
- Vite
- Axios for API calls
- Modern CSS/JavaScript

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- PHP (7.4 or higher)
- Composer
- Node.js and npm
- MySQL or MariaDB
- Git

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/andresjimenez11/exquisite-coffee.git
cd exquisite-coffee
```

### 2. Backend Setup (Laravel)

1. **Navigate to the backend directory:**
   ```bash
   cd Exquisite-Coffee-Backend
   ```

2. **Install PHP dependencies:**
   ```bash
   composer install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Generate application key:**
   ```bash
   php artisan key:generate
   ```

5. **Configure database:**
   - Open the `.env` file
   - Update the database configuration:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=exquisite_coffee
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```
   - **Important:** Create an empty database with the name specified in `DB_DATABASE`

6. **Run migrations and seed the database:**
   ```bash
   php artisan migrate --seed
   ```
   
   **Note:** If you need to reseed the database later, you can run:
   ```bash
   php artisan db:seed
   ```

7. **Start the backend server:**
   ```bash
   php artisan serve
   ```
   The backend will be available at `http://127.0.0.1:8000`

### 3. Frontend Setup (React)

1. **Open a new terminal and navigate to the frontend directory:**
   ```bash
   cd Exquisite-Coffee-Frontend
   ```

2. **Install JavaScript dependencies:**
   ```bash
   npm install
   ```

3. **Configure API URL:**
   - Create a `.env` file in the frontend directory
   - Add the following line:
   ```env
   VITE_API_URL=http://127.0.0.1:8000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (or the port shown in your terminal)

## 🎯 Usage

1. Make sure both backend and frontend servers are running
2. Open your browser and navigate to the frontend URL (usually `http://localhost:5173`)
3. The application should now be fully functional with seeded data

## 📁 Project Structure

```
exquisite-coffee/
├── Exquisite-Coffee-Backend/     # Laravel backend
│   ├── app/
│   ├── database/
│   ├── routes/
│   └── ...
└── Exquisite-Coffee-Frontend/    # React frontend
    ├── src/
    ├── public/
    └── ...
```

## 🔑 API Endpoints

The Laravel backend provides RESTful API endpoints for:
- Product management
- User authentication
- Order processing
- And more...

## 🐛 Troubleshooting

**Common Issues:**

1. **Database connection error:**
   - Verify your database credentials in the `.env` file
   - Make sure your database server is running
   - Ensure the database exists

2. **CORS issues:**
   - Check that the frontend `.env` file has the correct backend URL
   - Verify Laravel CORS configuration

3. **Dependencies issues:**
   - Run `composer install` again in the backend
   - Run `npm install` again in the frontend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Andrés Felipe Jiménez**
- GitHub: [@andresjimenez11](https://github.com/andresjimenez11)

## 📞 Support

If you encounter any issues during installation or usage, please feel free to open an issue on GitHub.