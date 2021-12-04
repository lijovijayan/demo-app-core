import { Router } from 'express';
import { SkillController } from '@controllers';
import { SkillService } from '@services';

const skill = Router();

// controller and service instances
const skillService = new SkillService();
const skillController = new SkillController(skillService);
// end - controller and service instances

skill.use('/', (req, res, next) => {
    next();
});

// routes
skill.get('/', skillController.getSkills);
skill.post('/', skillController.getSkillsWithFilter);
skill.get('/:id', skillController.getSkillById);
// end - routes

export default skill;
