import { Router } from 'express';
import bank from '@routes/bank.route';

const routes = Router();

routes.use('/bank', bank);

export default routes;
