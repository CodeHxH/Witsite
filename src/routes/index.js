const { Router } = require("express");
const router = Router();


router.get("/", (req,res) => {
    res.render("../views/index.html");
})


module.exports = router;