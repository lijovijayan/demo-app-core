import { APP } from '@config';
import mongoose from 'mongoose';

async function connect() {
    // mongoose.set('debug', true);
    mongoose
        .connect(`${APP.databaseURL}${APP.database}`)
        .then(() => {
            console.log(
                `connected database on ${APP.databaseURL}${APP.database}`
            );
        })
        .catch(() => {
            console.log(
                `failed to connect database on ${APP.databaseURL}${APP.database}`
            );
        });
}

export const DATABASE = {
    connect
};
