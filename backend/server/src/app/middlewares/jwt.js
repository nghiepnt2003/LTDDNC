var jwt = require("jsonwebtoken");
var fs = require("fs");

// Encode
// file privateKey được tạo từ OpenSSL
var privateKey = fs.readFileSync("../key/private.pem");
const generateAccessToken = (uid, role) =>
  jwt.sign({ _id: uid, role }, privateKey, {
    expiresIn: "2d",
    algorithm: "RS256",
  });

const generateRefreshToken = (uid, role) =>
  jwt.sign({ _id: uid }, privateKey, {
    expiresIn: "7d",
    algorithm: "RS256",
  });

const verifyAccessToken = (req, res, next) => {
  try {
    var cert = fs.readFileSync("../key/publickey.crt");

    // Bear Token
    // headers: {authorization: Bearer token}

    if (req?.headers?.authorization?.startsWith("Bearer")) {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, cert, { algorithms: ["RS256"] }, (err, data) => {
        if (err) {
          return res
            .status(401)
            .json({ success: false, message: "Invalid access token !!!" });
        }
        req.user = data;
        next();
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Require authentication !!!" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
};
