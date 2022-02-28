const router = require("express").Router();
const { User } = require("../../models");

router.get("/:username", (req, res) => {
    User.findAll({
        attributes: { exclude: ["password"] },
        where: {
            username: req.params.username,
        }
    })
    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        // console.log(dbUserData);

       res.redirect(`/profile/${dbUserData[0].dataValues.id}`);
    // res.json(dbUserData[0].dataValues.id);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;