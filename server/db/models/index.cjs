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
database.Course = require('./courses')(sequelize, DataTypes);
database.NewsLetter = require('./newsletter')(sequelize, DataTypes);
database.OrderProducts = require('./order_products')(sequelize, DataTypes);
database.Order = require('./orders')(sequelize, DataTypes);
database.PaymentInfo = require('./payment_info')(sequelize, DataTypes);
database.Payment = require('./payments')(sequelize, DataTypes);
database.ProductReviews = require('./product_reviews')(sequelize, DataTypes);
database.Profile = require('./profile')(sequelize, DataTypes);
database.Promotion = require('./promotions')(sequelize, DataTypes);
database.Subscription = require('./subscriptions')(sequelize, DataTypes);
database.User = require('./user')(sequelize, DataTypes);
database.Video = require('./videos')(sequelize, DataTypes);

database.Category.belongsToMany(database.Course, { through: 'CourseHasCategories' });
database.Course.belongsToMany(database.Category, { through: 'CourseHasCategories' });
database.Profile.hasOne(database.User, { foreignKey: 'user_id' });
database.Course.hasMany(database.Video, { foreignKey: 'course_id' });

export default database;
