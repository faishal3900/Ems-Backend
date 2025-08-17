import express from "express";
import AddEmploye from "../Controllers/AddEmploye.js";
import AllEmployeData from "../Controllers/AllEmployeData.js";
import EditEmploye from "../Controllers/EditEmploye.js";
import DeleteEmploye from "../Controllers/DeleteEmploye.js";

const router = express.Router();

router.post("/add-employe", AddEmploye);

router.get("/all-employe", AllEmployeData);

router.delete("/delete-employe/:employeId", DeleteEmploye);

router.put("/edit-employe/:id", EditEmploye);

export default router;
