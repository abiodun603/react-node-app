const express = require("express")
const router = express.Router();

const {registerUser} = require("../controllers/userController");

router.route("/").post(registerUser);


// router.get("/", (req, res, next) => {
//     res.status(200).json({
//         message: "Handling Get request to /Products"
//     })
// });

// router.post("/", (req, res, next) => {
//     const product = {
//         name: req.body.name
//     }
//     res.status(200).json({
//         message: "Handling Post request to /Products",
//         createProduct: product
//     })
// });

// router.get("/:productId", (req, res, next) =>{
//     const id = req.params.productId;
//     if(id == "special"){
//         res.status(200).json({
//             message: "You discovered a special ID",
//             id : id
//         })
//     }else{
//         res.status(200).json({
//             message: "You discovered an ID"
//         })
//     }
// });

// router.patch("/:productId", (req, res, next) =>{
//     res.status(200).json({
//         message: "You updated an ID",
//     })
// });

// router.patch("/:productId", (req, res, next) =>{
//     res.status(200).json({
//         message: "You deleted this ID",
//     })
// });

module.exports = router;