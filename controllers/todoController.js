const mongoose = require('mongoose')
const to_do = mongoose.model('to_do')

exports.addToDo = async (req, res) => {
  console.log(req.body)

  if (Object.keys(req.body).length !== 0) {
    const newTodo = await (new to_do(req.body)).save()
      return res.status(201).send({message: "Successfully added a new todo."})
  }

  return res.status(400).send({message: "There is no request body"})

}
