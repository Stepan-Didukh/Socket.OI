//Описуємо таблиці
module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
        }
    }, {
        tableName:'user',
        timestamps:false
    });
    return User
};