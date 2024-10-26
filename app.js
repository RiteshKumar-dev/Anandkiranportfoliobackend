require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")

const contactRoute = require("./Routes/Contact")

const connectDb = require("./Utils/dbConfig")


const corsOptions = {
  origin: ["http://localhost:5173", "https://dranandkiran.netlify.app"],
  methods: "GET,POST,PATCH,DELETE,UPDATE,PUT,HEAD ",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json())


// Routes
app.use("/api/v1", contactRoute);

app.get('/api/v1/root', (req, res) => {
  res.json("This is a root path");
});



const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`);
  })
})
