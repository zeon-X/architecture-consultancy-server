const router = require("express").Router();
const fs = require("fs");
const DESTFILE = "./uploads/";
// responsing function
const uploadFile = function (req, res) {
  if (!req.files) {
    return res.status(400).send({ msg: "bad request" });
  }
  // console.log(req?.user?._id);
  //REGEX
  const d = new Date();
  let time = d.getTime();
  let fileName = req.files.file.name;
  fileName = fileName.toLowerCase();
  fileName = fileName.replace(/(\s|[$&+,:;=?@#|'<>^*(){}[\]%!])/g, "_").trim();
  let sliceId = req?.user?._id?.slice(0, 16) || "zzxxccvvbbnnmmllppooii";
  
  fileName = sliceId + "_id_" + fileName+"_"+time;
  // console.log(fileName);

  fs.writeFile(DESTFILE + fileName, req.files.file.data, () => {
    // const url = req.protocol + "://" + req.get("host");
    const url = "https://" + req.get("host");
    const finalURL = url + "/public/" + fileName;
    // console.log("file has been written");
    return res.status(200).send({ url: finalURL });
  });
};

// ROUTER -> upload file -> then CONTROLLER
const { verifyToken } = require("../middlewires/verifyToken");
router.post("/upload", verifyToken, uploadFile);

module.exports = router;
