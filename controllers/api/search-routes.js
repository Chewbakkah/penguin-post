const router = require("express").Router();
const { User, Post, Comment, Favorite } = require("../../models");

router.get("/:username", (req, res) => {
    console.log(req.params.username);
    console.log('ding');
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
        //console.log("LOOK HERE");
        //console.log(dbUserData[0].dataValues.id);
       res.redirect(`/profile/${dbUserData[0].dataValues.id}`);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;