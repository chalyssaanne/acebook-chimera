const ChalyssaController = {
  Index: (req, res) => {
    res.render("chachacha/index", { title: "Chalyssa's Easter Egg!" });
  },
};

module.exports = ChalyssaController;