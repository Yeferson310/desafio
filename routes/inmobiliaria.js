const express = require("express")
const { list, searchInmueble, addInmueble } = require("../controllers/inmobiliaria")
const router = express.Router()



router.get("/inmobiliarias",list)
router.get("/inmobiliarias/:id", searchInmueble)
router.post("/inmobiliaria/nuevo", addInmueble)


module.exports = router;