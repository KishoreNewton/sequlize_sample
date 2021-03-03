import { Sequelize } from 'sequelize';
import { app } from './app'; // express config
import { port } from './common/common.constant';

export const sequelize = new Sequelize(
  process.env.PROJECT_DB_NAME,
  process.env.PROJECT_DB_USERNAME,
  process.env.PROJECT_DB_PASSWORD,
  {
    host: process.env.PROJECT_HOST,
    dialect: 'mysql'
  }
);

const start = async () => {
  console.log('starting up.....');

  if (!process.env.JWT_KEY) {
    throw new Error('Key Missing. Key Required');
  }

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

app.listen(port, (): void => {
  console.log(`Listening on port ${port}`);
});

start();
