// TODO: User 모델 정의
const User = (Sequelize, DataTypes) => {
    const model = Sequelize.define('visitor', {
        userid: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name : {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(20),
        }
    }, {
        tableName: 'user', // 실제 db 테이블명
        freezeTableName: true,
        timestamps: false,
    });
    return model;
};

module.exports = User;