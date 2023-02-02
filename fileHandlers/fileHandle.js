const router = require("express").Router();
const fs = require("fs");
const DESTFILE = "./public/data/file/";
const DESTIMAGE = "./public/data/image/";
// responsing function
const uploadFile = function (req, res) {
  if (!req.files) {
    return res.status(400).send({ msg: "bad request" });
  }
  if (!req.files.file) {
    //IMAGE
    fs.writeFile(DESTIMAGE + req.files.image.name, req.files.image.data, () => {
      const url = req.protocol + "://" + req.get("host");
      const finalURL = url + "/public/data/image/" + req.files.image.name;
      console.log("image has been written");

      return res.status(200).send({ url: finalURL });
    });
  } else {
    //FILE
    fs.writeFile(DESTFILE + req.files.file.name, req.files.file.data, () => {
      const url = req.protocol + "://" + req.get("host");
      const finalURL = url + "/public/data/file/" + req.files.file.name;
      console.log("file has been written");
      return res.status(200).send({ url: finalURL });
    });
  }
};

// ROUTER -> upload file -> then CONTROLLER

router.post("/upload", uploadFile);

module.exports = router;
