const NagoreController = {
    Index: (req, res) => {
      res.render("nagore/index", { title: "Nagore's Easter Egg" });
    },
  };
  
  module.exports = NagoreController;