import { Router } from 'express';
import countries from '@routes/country.route';
import states from '@routes/state.route';
import cities from '@routes/city.route';
import cources from '@routes/cource.route';
import skills from '@routes/skill.route';
import colleges from '@routes/college.route';
import students from '@routes/student.route';

const routes = Router();

routes.use('/countries', countries);
routes.use('/states', states);
routes.use('/cities', cities);
routes.use('/cources', cources);
routes.use('/skills', skills);
routes.use('/colleges', colleges);
routes.use('/students', students);

export default routes;
