const db = require('../config/database');

// יצירת משתמש חדש
exports.createUser = async (username, hashedPassword, email) => {
    const [result] = await db.execute(
        'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
        [username, hashedPassword, email]
    );
    return result;
};

// חיפוש משתמש לפי שם משתמש
exports.findUserByUsername = async (username) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0]; // משתמש יחיד
};
