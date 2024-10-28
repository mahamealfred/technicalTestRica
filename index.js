const express = require('express');
const cors = require('cors');
const dbConnect = require("./db/config");

const routes=require("./routes")
const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use(routes)

dbConnect();
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))