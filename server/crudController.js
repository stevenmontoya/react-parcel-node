module.exports.create = (Model) => (req, res, next) => {
  new Model(req.body)
    .save()
    .then((data) => res.json(data))
    .catch((error) => next({ error }));
};

module.exports.getAll = (Model) => (req, res, next) => {
  Model.find()
    .then((data) => res.json(data))
    .catch((err) => next);
};
