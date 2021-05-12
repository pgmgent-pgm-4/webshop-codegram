// migrations/models/model.js
import sequelize from 'sequelize';

const model = sequelize.define('foo', {
  createdAt: {
      type: this.sequelize.DATE,
      allowNull: false,
  },
  updatedAt: {
      type: this.sequelize.DATE,
      allowNull: true,
  },
});

export default model;