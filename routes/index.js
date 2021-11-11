const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController.js')
const {catchErrors} = require('../handlers/errorHandlers')

router.get('/', (req, res) => {
  res.send('Hey! It works!');
});
router.post('/add', catchErrors(todoController.addToDo))

module.exports = router;
