import config from './common/config';
import app from './app';

import {
    unhandledRejection, uncaughtException
} from "./middlewares";

const { PORT } = config;


app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));

process.on('uncaughtException', uncaughtException);
process.on('unhandledRejection', unhandledRejection);

// throw Error('Error');
// Promise.reject(Error('Error'));
// Раскомитить 16 и 17 строчку для ошибки