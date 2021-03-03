import { Sequelize } from 'sequelize';
import { app } from './app'; // express config
import { port } from './common/common.constant';

const start = async () => {
  console.log('starting up.....');

  const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

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
