const router = require("express").Router();
const { Fact } = require("../../models");

router.get("/:id", (req, res) => {
    Fact.findOne({
        where: {
            id: req.params.id,
        },
        include: [
          {
              model: Fact,
              attributes: ["id", "fact"],
          },
        ],
    })
      .then((fact) => {
          if (!fact) {
              res.status(404).json({ message: "No fact found" });
              return;
          }
          res.json(fact);
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
});