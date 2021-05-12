# Database

Ga naar folder /server/db met `cd server/db`

## Maak een nieuwe Model / Table
`..\..\node_modules\.bin\sequelize model:generate --name User --attributes id:string,username:string,email:string,email_verification:integer,password:string,role:string,last_login:integer`

`..\..\node_modules\.bin\sequelize model:generate --name Payments --attributes user_id:integer, order_id:integer, total:integer`

`..\..\node_modules\.bin\sequelize model:generate --name Order_Products --attributes courses_id:integer, order_id:integer, price:integer`

`..\..\node_modules\.bin\sequelize model:generate --name Payment_Info --attributes user_id:integer, payment_id:integer, first_name:string, last_name:string, card_number:integer, cvv:integer, expiration_date:date,country:string`

`..\..\node_modules\.bin\sequelize model:generate --name Category --attributes name:string, description:string`

`..\..\node_modules\.bin\sequelize model:generate --name Subscriptions --attributes profile_id:integer, start_date:date, end_date:date, price:integer, subscription_type:string`

`..\..\node_modules\.bin\sequelize model:generate --name Course_Has_Categories --attributes category_id:integer, course_id:integer`

`..\..\node_modules\.bin\sequelize model:generate --name Promotions --attributes course_id:integer, subscription_id:integer, price_modifier:integer`

`..\..\node_modules\.bin\sequelize model:generate --name Courses --attributes user_id:integer, unlocked:boolean, name:string, description:string, price:integer, tags:blob, lecturer:string, duration:integer, difficulty_level:text, certificatate:boolean, language:string`

`..\..\node_modules\.bin\sequelize model:generate --name Course_Videos --attributes course_id:integer`

`..\..\node_modules\.bin\sequelize model:generate --name Videos --attributes playlist_id:integer, url:string, name:string, paused_at:integer, duration:integer`

`..\..\node_modules\.bin\sequelize model:generate --name Product_Reviews --attributes user_id:integer, course_id:integer, stars:integer, review:string`

`..\..\node_modules\.bin\sequelize model:generate --name Newsletter --attributes user_id:integer, date_since_sub:date, email:text`

--> Maakt een user model aan. Modificaties met ../.. aangezien we niet beginnen in de root folder. 
De aangmaakte model ziet er zo uit: 

```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    email_verification: DataTypes.INTEGER,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    last_login: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
```


Bron van de gebruikte commands en relevant artikel: [StackAbuse - Using Sequelize.js and SQLite in an Express app](https://stackabuse.com/using-sequelize-js-and-sqlite-in-an-express-js-app/).

## Migreer het model naar een sqlite3 database
Important note: 
> Om gebruik te maken van het command

`..\..\node_modules\.bin\sequelize db:migrate`

> Is het belangrijk om de gegenereerde bestanden in `/migrations/*-create-*.js` te hernoemen naar `.cjs`

## Genereer een seeder
`..\..\node_modules\.bin\sequelize seed:generate --name seed-user`

## Seed the database (add --debug flag to debug)
`..\..\node_modules\.bin\sequelize db:seed:all` 

## Unseed the database
`..\..\node_modules\.bin\sequelize db:seed:undo:all`