// visitor 모델 정의 (모델 = DB 테이블)

const Visitor = (Sequelize, DataTypes) => {
    // Sequelize: models/index.js에서 sequelize
    // DataTypes: models/index.js에서 Sequelize
    const model = Sequelize.define('visitor', {
        // id varchar(20) primary key,
        // name varchar(20) not NULL,
        // comment varchar(20) not null
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
        tableName: 'visitor', // 실제 db 테이블명
        freezeTableName: true,
        timestamps: false,
    });
    return model;
};

module.exports = Visitor;