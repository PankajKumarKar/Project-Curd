import asyncHandler from "express-async-handler";
import { studentModel } from "../models/Student.model";

//Add

export const addStudentHandler = asyncHandler(async (req, res) => {
  try {
    const { fullName, mobile, gender, city } = req.body;
    const saveStudent = await studentModel.create({
      fullName,
      mobile,
      gender,
      city,
    });

    res.status(200).send(saveStudent);
  } catch (error) {
    res.status(400).send("Error While Adding Data");
  }
});

//Get All
export const getAllStudentHandler = asyncHandler(async (req, res) => {
  try {
    const allStudent = await studentModel.find({});
    res.status(200).send(allStudent);
  } catch (error) {
    res.status(500).send("Error While Fetching All Student !");
  }
});

//Get By iD

export const getStudentByIdHandler = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const findStudent = await studentModel.findOne({ _id: id });
    res.status(200).send(findStudent);
  } catch (error) {
    res.status(500).send("Error While Fetching By Id !");
  }
});

//update

export const updateStudentHandler = asyncHandler(async (req, res) => {
  try {
    const id = req.body.id;
    const updateStudent = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).send(updateStudent);
  } catch (error) {
    res.status(500).send("Error While Update student !");
  }
});

//delete by id

export const deleteStudentHandler = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await studentModel.findByIdAndDelete({ _id: id });
    res.status(200).send(deleteStudent);
  } catch (error) {
    res.status(400).send("Error While Deleting Studeny !");
  }
});
