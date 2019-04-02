// TodoItem Model
const TodoItem = require('../../model/todoitems');

module.exports.getItems = (req, res) => {
  TodoItem
    .find()
    .sort({ date: -1 })
    .then(todoitems => res.json(todoitems))
    .catch(err => console.log(err));
}

module.exports.createItem = (req, res) => {
  const newItem = new TodoItem({
    title: req.body.title
  })

  newItem
    .save()
    .then(todoitem => res.json(todoitem))
    .catch(err => console.log(err));
}

module.exports.deleteItem = (req, res) => {
  TodoItem
    .findByIdAndRemove(req.params.id)
    .then(() => res.json({ sucess: true }))
    .catch(() => res.status(404).json({ sucess:false }));
}