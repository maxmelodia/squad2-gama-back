const { Router } = require('express');

const route = Router();

const userData = [
    {id:'1', nome:'maxwell', role: 'backend'},
    {id:'2', nome:'ester', role: 'backend'},
    {id:'3', nome:'ariany', role: 'frontend'}
];

route
.get("/users", (req, res) => {
    res.send(userData);
});

route
.get("/users/:user_id", (req, res) => {
    const { user_id } = req.params;
    res.send(userData.filter((d) => d.id === user_id));
});


module.exports = route;
