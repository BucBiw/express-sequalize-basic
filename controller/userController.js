const models = require('../models/index');

exports.index = async (req, res, next) => {

    // const users = await models.User.findAll();
    // const users = await models.User.findAll({
    //     attributes: ['id', 'name', 'email', 'create_at'],
    //     order: [['id', 'desc']]
    // });
    //call data by model
    const users = await models.User.findAll({
        attributes: ['id', 'name', ['email', 'username'], 'create_at'],
        order: [['id', 'desc']]
    });

    //call data by sql
    const sql = 'select id, name, email, create_at from users order by id desc';
    const usersSQL = await models.sequelize.query(sql, {
        type: models.sequelize.QueryTypes.SELECT
    });

    res.status(200).json({
        data: usersSQL
    });
}