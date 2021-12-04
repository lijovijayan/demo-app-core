import { Router } from 'express';
import { CollegeController } from '@controllers';
import { CollegeService } from '@services';

const college = Router();

// controller and service instances
const collegeService = new CollegeService();
const collegeController = new CollegeController(collegeService);
// end - controller and service instances

college.use('/', (req, res, next) => {
    next();
});

// routes
college.get('/', collegeController.getColleges);
college.post('/', collegeController.getCollegesWithFilter);
college.get('/:id', collegeController.getCollegeById);
// end - routes

export default college;
