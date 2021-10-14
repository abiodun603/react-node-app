const express = require('express')
const dotenv = require("dotenv");
const morgan = require("morgan"),
connectDB = require("./config/db")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");
// abiodun
//password damilare112

const app = express()
dotenv.config();
connectDB();
// mongodb+srv://abiodun:<password>@react-node-app.xjo1j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//set up a middleware, where an incoming request have to go through
// app.use, the parameter can be function i.e request, response, next
// the next is a function that passed out request to the next middleware if need be
// const productRoutes = require("./routes/product");
// const orderRoutes = require("./routes/order");

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "It works"
//     })
// });
app.use(morgan("dev"));
// app.use(notFound);
// app.use(errorHandler)
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())
app.use(express.json())

app.use("/product", productRoutes)
app.use("/order", orderRoutes)
app.use("/api/users", userRoutes)


module.exports = app;