
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "menu.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(PORT, () => {
    console.log(`Grand Palace Hotel running at http://localhost:${PORT}`);
});