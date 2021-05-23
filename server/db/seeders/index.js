import faker, { seed } from 'faker';
import { v4  as uuidv4 } from 'uuid';
import database from '../index.js';

database.connect();

let generatedUsers = [];
let generatedProfiles = [];

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
};

const generateProfiles = () => {
  let profiles = [];
  for (let i = 0; i < generatedUsers.length; i++) {
    const profile = {
      id: uuidv4(),
      UserId: generatedUsers[i].id,
      dob: faker.date.past(),
      img_url: faker.image.avatar(),
      subscription: null,
      recent_activity: null,
    };
    profiles.push(profile);
  };
  return profiles;
}

const seedUsers = async () => {
  try {
    generatedUsers = generateUsers();
    generatedUsers.forEach(async (user) => {
      await database.User.create(user);
    });
    console.table(generatedUsers);
    seedProfiles();
  } catch (err) {
    console.error(err);
  }
}

const seedProfiles = async () => {
  try {
    generatedProfiles = generateProfiles();
    generatedProfiles.forEach(async (profile) => {
      await database.Profile.create(profile);
    });
    console.table(generatedProfiles);
  } catch (err) {
    console.error(err);
  }
}

seedUsers();