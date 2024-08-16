const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
