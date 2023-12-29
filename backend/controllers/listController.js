// controllers/listController.js
const listModel = require('../models/listModel');

exports.getList = async function (req, res) {
  try {
    const items = await listModel.getItems();
    res.render('list', { listTitle: 'Today', newListItems: items });
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.render('list', { listTitle: 'Today', newListItems: [] });
  }
};

exports.postList = async function (req, res) {
  const newItem = req.body.newItem;

  try {
    await listModel.addItem(newItem);
    res.redirect('/');
  } catch (error) {
    console.error('Error adding todo:', error);
    res.redirect('/');
  }
};
