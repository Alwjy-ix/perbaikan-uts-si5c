const Laboratorium = require('../models/LaboratoriumModel');

exports.create = async (req, res) => {
  try {
    const laboratorium = await Laboratorium.create(req.body);
    res.status(201).json(laboratorium);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Laboratorium.find());
};