import pkg from 'sequelize';
import { databaseVariables, EnvironmentVariables } from '../config/index.js';
const { Sequelize, DataTypes } = pkg;
const sequelize = new Sequelize(databaseVariables[EnvironmentVariables.NODE_ENV]);
const database = {};

database.sequelize = sequelize;
database.Sequelize = Sequelize;

database.Category = require('./category.js')(sequelize, DataTypes);
database.CourseHasCategories = require('./course_has_categories')(sequelize, DataTypes);
database.CourseVideos = require('./course_videos')(sequelize, DataTypes);
database.Courses = require('./courses')(sequelize, DataTypes);
database.NewsLetter = require('./newsletter')(sequelize, DataTypes);
database.OrderProducts = require('./order_products')(sequelize, DataTypes);
database.Orders = require('./orders')(sequelize, DataTypes);
database.PaymentInfo = require('./payment_info')(sequelize, DataTypes);
database.Payments = require('./payments')(sequelize, DataTypes);
database.ProductReviews = require('./product_reviews')(sequelize, DataTypes);
database.Profile = require('./profile')(sequelize, DataTypes);
database.Promotions = require('./promotions')(sequelize, DataTypes);
database.User = require('./user')(sequelize, DataTypes);
database.Videos = require('./videos')(sequelize, DataTypes);

export default database;
