/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';

import { APP } from '@config';
import routes from '@routes';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// END - middlewares

app.use('/', (req, res, next) => {
    console.log(
        `requested on:  ${APP.host}:${APP.port}${req.url}  [${req.method}]`
    );
    next();
});

app.use('/', routes);
app.listen(APP.port, APP.host, () => {
    return console.log(`server is listening on ${APP.host}:${APP.port}`);
});
