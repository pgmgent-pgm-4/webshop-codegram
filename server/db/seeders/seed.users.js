// import 'babel-polyfill';
import faker from 'faker';
import { v4  as uuidv4 } from 'uuid';
import database from '../index.js';

database.connect();

const generateUsers = (amount = 50) => {
  let users = [];
  for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random()*2);
    const user = {
      id: uuidv4(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      email_verified: !!random,
      password: 'chinchillas4ever',
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
    generatedUsers.forEach(async (user) => {
      await database.User.create(user)
    });
    console.table(generatedUsers)
  } catch (err) {
    console.error(err);
  }
}

seedUsers();