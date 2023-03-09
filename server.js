// Basic Lib Imports
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
// Database connection with mongoose
const connectDB = require("./config/db");
connectDB();
const port = process.env.PORT || 5000;

const Student = require('./models/studentModel')

// Express app initialization
const app = express();
app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

// Application routes
app.use("/api/v1/users", require("./routes/userRouters"));
app.use("/api/v1/appointment", require("./routes/appointmentRouters"));

// Error handler middleware
app.use(errorHandler);


// Practice Mongodb database 
run()
async function run() {
  try {
    // const student = await Student.create({
    //   name: "Reza",
    //   email: 'Reza@gmail.com',
    //   age: 23
    // })
    const student = await Student.find({})
    console.log(student);
  } catch (error) {
    console.log(error.message);
  }
}
app.listen(port, () =>
  console.log(`Server started on port http://127.0.0.1:${port}/`)
);
