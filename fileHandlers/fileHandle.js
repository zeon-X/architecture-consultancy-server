const router = require("express").Router();
const fs = require("fs");
const DESTFILE = "./uploads/";
// responsing function
const uploadFile = function (req, res) {
  if (!req.files) {
    return res.status(400).send({ msg: "bad request" });
  }

  fs.writeFile(DESTFILE + req.files.file.name, req.files.file.data, () => {
    const url = req.protocol + "://" + req.get("host");
    const finalURL = url + "/public/" + req.files.file.name;
    // console.log("file has been written");
    return res.status(200).send({ url: finalURL });
  });
};

// ROUTER -> upload file -> then CONTROLLER
const { verifyToken } = require("../middlewires/verifyToken");
router.post("/upload", verifyToken, uploadFile);

module.exports = router;
