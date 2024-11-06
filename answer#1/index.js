const { User, Posts } = require("./answer#1/models.sequelize");
const sequelize = require("./answer#1/sequelize.config");

async function main() {
    await sequelize.sync({ force: true });
    const user = await User.create({ username: "erfan", bio: "this is erfan, Im learning backend", age: 18 })    
    const posts = await Posts.bulkCreate([{ title: "vacation", userId: user.id }, { title: "coding", description: "tuesday's bootcamp", userId: user.id }]);
    user.setPosts(posts);

    const result = await user.getPosts({row  : true});
    console.log(result.map(post => post.dataValues));
    
    
}

main();