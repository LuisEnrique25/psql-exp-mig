const { getAll, create, getOne, remove, update, setArea } = require('../controllers/proyect.controllers');
const express = require('express');

const routerProyect = express.Router();

routerProyect.route('/')
    .get(getAll)
    .post(create);

routerProyect.route("/:id/areas")
    .post(setArea)

routerProyect.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update)
    

module.exports = routerProyect;