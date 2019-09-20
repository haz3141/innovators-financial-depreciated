module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email    : DataTypes.STRING,
    password : {
      type     : DataTypes.STRING,
      validate : {
        len : [ 1 ]
      }
    }
  });
  return User;
};
