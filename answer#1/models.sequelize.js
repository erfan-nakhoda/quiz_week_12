const { Sequelize, Model, DataTypes } = require("@sequelize/core");
const sequelize = require("./sequelize.config");

class Posts extends Model {}

const User = sequelize.define("user", {
    username : {type : DataTypes.STRING(25), unique : true,allowNull : false},
    bio : {type : DataTypes.STRING(100), allowNull : true},
    age : {type : DataTypes.INTEGER}
}, {timestamps : false})

Posts.init({
    title : {type : DataTypes.STRING(20), allowNull : false},
    description : {type : DataTypes.TEXT, allowNull : true},
    status: { type: DataTypes.ENUM("uploaded", "pending"), defaultValue: "pending" },
    userId: { type: DataTypes.INTEGER, allowNull: false, references : {
        model : User,
        key : "id",
       
    },  onDelete : "CASCADE"}
}, { sequelize, timestamps: false })

User.hasMany(Posts);

module.exports = {
    User,
    Posts
}


