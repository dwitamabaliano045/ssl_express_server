var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200);
  res.header("Content-Type", "application/json");
  res.send(
    JSON.stringify(
      {
        message: "Secret Data !",
        data: [
          {
            user_id: "40404",
            name: "Raden Dwitama Ganteng",
            password: "304184eujd8j8f9298j",
          },
        ],
      },
      null,
      1
    )
  );
});

module.exports = router;
