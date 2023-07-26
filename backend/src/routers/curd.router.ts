import { Router } from "express";
import {
  addStudentHandler,
  deleteStudentHandler,
  getAllStudentHandler,
  getStudentByIdHandler,
  updateStudentHandler,
} from "../controllers/curd.controller";

const router = Router();

router.post("/addStudent", addStudentHandler);
router.get("/getAllStudent", getAllStudentHandler);
router.get("/getStudentById/:id", getStudentByIdHandler);
router.put("/updateStudent", updateStudentHandler);
router.delete("/deleteStudent/:id", deleteStudentHandler);

export default router;
