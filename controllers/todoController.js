const mongoose = require('mongoose')
const to_do = mongoose.model('to_do')

exports.addToDo = async (req, res) => {
  const newTodo = await (new to_do(req.body)).save()

  if (newTodo) {
    res.status(201).send({message: "Successfully added a new todo."})
  }
}
