const { User } = require("../answer#1/models.sequelize");

async function FindPostsByParentID(id) {
    let posts = null;
    const user = await User.findByPk(id);
    if(user) posts = await user.getPosts({row : true});
    else console.error("user not found");
    const postDataValues = posts.map(post => post.dataValues);
    return postDataValues;
}

module.exports = FindPostsByParentID;