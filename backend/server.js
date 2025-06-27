const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); 
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: 'signup'
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES ( ?)";

    const values = [
        req.body.name, 
        req.body.email, 
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error")
        }
        return res.json(data)

    });
});
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error")
        }
        if (data.length > 0) {
            return res.json({ status: "success" });
        } else {
            return res.json({ status: "fail" });
        }


    });
});
app.post('/home', (req, res) => {
    const sql = "INSERT INTO booking (place, vehicleType, name, mobile, entryDateTime, exitDateTime) VALUES ( ?)";

    const values = [
        req.body.place, 
        req.body.vehicleType, 
        req.body.name, 
        req.body.mobile, 
        req.body.entryDateTime, 
        req.body.exitDateTime
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error", details: err });
        }
        return res.json(data)

    });
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
    });