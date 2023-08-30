
const User = (Sequelize, DataTypes) => {
    const model = Sequelize.define('visitor', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name : {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT('medium'),
        }
    }, {
        tableName: 'user', // 실제 db 테이블명
        freezeTableName: true,
        timestamps: false,
    });
    return model;
};

module.exports = Visitor;