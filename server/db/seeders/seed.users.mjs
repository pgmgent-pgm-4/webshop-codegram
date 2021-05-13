import faker from 'faker';
import { v4  as uuidv4 } from 'uuid';
import database from '../models/index.cjs';

const generateUsers = (amount = 50) => {
  let users = [];
  for (let i = 0; i < amount; i++) {
    let random = Math.round(Math.random);
    const user = {
      id: uuidv4(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      email_verification: !!random,
      password: faker.internet.password(),
      role: 'guest',
      last_login: faker.date.recent(),
    }
    users.push(user);
  }
  return users;
}

const seedUsers = async () => {
  try {
    const generatedUsers = generateUsers();
    const users = await database.User.bulkCreate(generatedUsers);
    console.table(users)
  } catch (err) {
    console.error(err);
  }
}

