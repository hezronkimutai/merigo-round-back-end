export default (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      password: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
      signupType: DataTypes.STRING,
    },
    {}
  );
  users.associate = (models) => {};
  return users;
};