const exp=require("express");
const router=exp.Router();
const ac=require("../controller/admin_controller");

router.get("/add",ac.addadmin);
router.post("/login",ac.login);

module.exports=router;