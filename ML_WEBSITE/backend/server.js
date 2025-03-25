require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const PYTHON_API_URL = process.env.PYTHON_API_URL;

app.post("/api/predict", async (req, res) => {
    try {
        const { temperature, irradiance } = req.body;
        const response = await axios.post(PYTHON_API_URL, { temperature, irradiance });
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Node.js server running on port ${PORT}`);
});
