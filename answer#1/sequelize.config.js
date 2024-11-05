const { Sequelize } = require("@sequelize/core");
    const sequelize = new Sequelize({
        dialect: "mysql",
        host: "localhost",
        port: 3306,
        database: `quiz_week_12`,
        password: "",
        user: "root"
    })

    sequelize.authenticate().then(() => {
        console.log("connected");

    }).catch(err => {
        if (err) console.log(err);

    })

module.exports = sequelize;