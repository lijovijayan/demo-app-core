import { Router } from 'express';
import cities from '@routes/city.route';
import cources from '@routes/cource.route';
import skills from '@routes/skill.route';
import colleges from '@routes/college.route';
import states from '@routes/state.route';
import students from '@routes/student.route';
import countries from '@routes/country.route';

const routes = Router();

routes.use('/states', states);
routes.use('/colleges', colleges);
routes.use('/skills', skills);
routes.use('/cources', cources);
routes.use('/cities', cities);
routes.use('/students', students);
routes.use('/countries', countries);

export default routes;
