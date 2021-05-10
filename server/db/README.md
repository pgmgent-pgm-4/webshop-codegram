# Database

Ga naar folder /server/db met `cd server/db`

`..\..\node_modules\.bin\sequelize model:generate --name User --attributes id:string,username:string,email:string,email_verification:integer,password:string,role:string,last_login:integer`

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