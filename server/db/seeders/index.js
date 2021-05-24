/*
Import packages
*/
import faker from 'faker';
import { v4  as uuidv4 } from 'uuid';

/*
Import custom packages
*/
import database from '../index.js';
import { hashPassword } from '../../utils/helper';


// Initialize database connection
database.connect();

// Declare array variables
let generatedUsers = [];
let generatedProfiles = [];
let generatedCategories = [];

/**
 * Generate users
 * @param {number} amount 
 * @returns {array} users
 */
const generateUsers = (amount = 50) => {
  let users = [];
  for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random()*2);
    const user = {
      id: uuidv4(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      email_verified: !!random,
      password: hashPassword('chinchillas4ever'),
      role: 'guest',
      last_login: faker.date.recent(),
    }
    users.push(user);
  }
  return users;
};

/**
 * Generate profiles
 * @returns {array} profiles
 */
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

/**
 * Generate categories
 */
const generateCategories = () => {
  const companyName = 'Codegram';
  const categories = [
    {
      id: uuidv4(),
      name: "Python",
      description: `Python instructors on ${companyName} specialize in everything from software development to data analysis, and are known for their effective, friendly instruction for students of all levels.`,
    },
    {
      id: uuidv4(),
      name: "JavaScript",
      description: `${companyName} instructors specialize in teaching the whole scope of JavaScript—beginner to advanced. Whether you’re interested in back-end development, or app and website building, ${companyName} has a JavaScript course for you.`
    },
    {
      id: uuidv4(),
      name: "React",
      description: `Whether you’re interested in adding React to your existing dev skillset, or you want to develop full-stack web apps by using tools like NodeJS, Redux, and MongoDB in conjunction with React, ${companyName} has a comprehensive selection of courses to choose from.`,
    },
    {
      id: uuidv4(),
      name: "C#",
      description: `Whether you’re using C# in conjunction with Xamarin Forms to build cross-platform apps, or designing a new video game in Unity with C#, ${companyName} has a course for you. ${companyName} hosts top-rated courses on everything from the fundamentals of C# programming to more advanced topics like databases and asynchronous programming.`
    },
    {
      id: uuidv4(),
      name: "CSS",
      description: `Learning how to code HTML without also learning CSS is like learning how to read but not write. All of your hard web development work is lost if you don’t optimize it for different screen sizes. ${companyName} has top-rated courses to show you how CSS helps you do just that.`,
    },
    {
      id: uuidv4(),
      name: "Unity",
      description: `Coding video games for modern consoles requires a lot of specialized skills. Unity allows users to program life-like physics, control game audio, and texture and layer game levels, all in one program. ${companyName} has the courses to show you how they all work together.`
    },
    {
      id: uuidv4(),
      name: "Google Flutter",
      description: `${companyName}'s Flutter courses will enable you to design cross-platform applications that allow you to reuse code across operating systems such as iOS and Android. If you want to design beautiful, natively compiled applications for mobile, web and desktop from a single codebase, ${companyName} has you covered.`,
    },
    {
      id: uuidv4(),
      name: "Java",
      description: `${companyName}’s top-rated Java instructors specialize in a wide array of Java programming practices. Whether you need a basic introduction to Java and website building using Selenium WebDriver, or are continuing your Android app developer education, ${companyName} has you covered.`
    },
    {
      id: uuidv4(),
      name: "SQL",
      description: `SQL isn’t just for software engineers and system administrators. SQL also helps business analysts gain important insights into new marketplaces and make more informed strategic decisions. SQL instructors on ${companyName} have experience with all levels and applications of SQL programming.`,
    },
    {
      id: uuidv4(),
      name: "Angular",
      description: `As Angular grows in popularity, new versions of the front-end framework are constantly being released. That’s why ${companyName} offers a wide range of courses covering every version of Angular available today.`
    },
  ];
  return categories;
}

/**
 * Seed the users into the database
 * Uses: {array} generatedUsers
 * Calls seedProfiles after seeding
 */
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


/**
 * Seed the profiles into the database
 * Uses: {array} generatedProfiles
 */
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

/**
 * Seed the categories into the database
 * Uses: {array} generatedCategories
 */
const seedCategories = async () => {
  try {
    generatedCategories = generateCategories();
    generatedCategories.forEach(async (category) => {
      await database.Category.create(category);
    });
    console.table(generatedCategories);
  } catch (err) {
    console.error(err);
  }
}

/**
 * Call seed Users
 */
// seedUsers();
seedCategories();