import { Router } from 'express';
import countries from '@routes/country.route';
import states from '@routes/state.route';
import cities from '@routes/city.route';
import cources from '@routes/cource.route';
import skills from '@routes/skill.route';
import colleges from '@routes/college.route';
import students from '@routes/student.route';

const routes = Router();

routes.use('/oneshot/api/v1/countries', countries);
routes.use('/oneshot/api/v1/states', states);
routes.use('/oneshot/api/v1/cities', cities);
routes.use('/oneshot/api/v1/cources', cources);
routes.use('/oneshot/api/v1/skills', skills);
routes.use('/oneshot/api/v1/colleges', colleges);
routes.use('/oneshot/api/v1/students', students);

export default routes;
