import { Router } from 'express';
import { StudentController } from '@controllers';
import { StudentService } from '@services';

const student = Router();

// controller and service instances
const studentService = new StudentService();
const studentController = new StudentController(studentService);
// end - controller and service instances

student.use('/', (req, res, next) => {
    next();
});

// routes
student.get('/', studentController.getStudents);
student.post('/', studentController.getStudentsWithFilter);
student.get('/:id', studentController.getStudentById);
// end - routes

export default student;
