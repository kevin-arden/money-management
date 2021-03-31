const { Budgets } = require("../../models");

exports.getBudget = async (req, res) => {
  try {
    const budget = await Budgets.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      messages: "Success",
      data: {
        budget,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postBudget = async (req, res) => {
  try {
    const addbudget = await Budgets.create({
      money: req.body.money,
      type: req.body.type,
    });

    console.log(req.body);

    const newbudget = await Budgets.findOne({
      where: { id: addbudget.id },
    });

    res.send({
      message: "Budget successfully added",
      data: {
        newbudget,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.editBudget = async (req, res) => {
  try {
    const { id } = req.params;

    const getbudget = await Budgets.findOne({
      where: { id },
    });

    if (!getbudget) {
      return res.status(400).send({
        status: "Server Error",
        error: {
          message: "Data Budget Not Found",
        },
      });
    }

    await Budgets.update(
      {
        money: req.body.money,
        type: req.body.type,
      },
      {
        where: { id },
      }
    );

    const getupdatedbudget = await Budgets.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      messages: "Budget Successfully Edited",
      data: {
        getupdatedbudget,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteBudget = async (req, res) => {
  try {
    const { id } = req.params;

    const getbudget = await Budgets.findOne({
      where: { id },
    });

    if (!getbudget) {
      return res.send({
        messages: `Budget with id ${id} is not found`,
      });
    }

    await Budgets.destroy({
      where: { id },
    });

    res.send({
      messages: `Budget successfully deleted`,
      data: getbudget,
    });

  } catch (err) {
    console.log(err);
  }
};
