const router = require("express").Router();
const fs = require("fs");
const DESTFILE = "./uploads/";
// responsing function
const uploadFile = function (req, res) {
  if (!req.files) {
    return res.status(400).send({ msg: "bad request" });
  }
  // console.log(req?.user?._id);

  let fileName = req.files.file.name;
  fileName = fileName.replace(/\s+/g, "_").trim();
  fileName = fileName.toLowerCase();
  fileName = req?.user?._id + "_id_" + fileName;
  // console.log(fileName);

  fs.writeFile(DESTFILE + fileName, req.files.file.data, () => {
    const url = req.protocol + "://" + req.get("host");
    const finalURL = url + "/public/" + fileName;
    // console.log("file has been written");
    return res.status(200).send({ url: finalURL });
  });
};

// ROUTER -> upload file -> then CONTROLLER
const { verifyToken } = require("../middlewires/verifyToken");
router.post("/upload", verifyToken, uploadFile);

module.exports = router;
