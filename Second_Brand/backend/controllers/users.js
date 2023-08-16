const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const Users = db.users;

async function get(req, res) {
  const user = await Users.findByPk(req.params.id);
  if (user == null) {
    res.send({ message: "User tidak ada" });
  } else {
    res.send({
      Foto_Profil: user.user_image,
      Nama: user.user_name,
      Kota: user.user_city,
      Alamat: user.user_address,
      No_Handphone: user.user_phone,
    });
  }
}

async function create(req, res) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.user_password, salt);
  req.body.user_password = hash;

  const user = {
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
  };

  const insertUser = await Users.create(user);
  res.json(insertUser);
}

async function login(req, res) {
  const isUserExist = await Users.findOne({
    where: { user_email: req.body.user_email },
  });
  if (isUserExist) {
    // compare hash bcrypt
    const isPasswordTrue = bcrypt.compareSync(
      req.body.user_password,
      isUserExist.user_password
    );
    if (isPasswordTrue) {
      //generate token
      const token = jwt.sign(
        {
          id: isUserExist.id,
          user_name: isUserExist.user_name,
          user_email: isUserExist.user_email,
        },
        process.env.TOKEN_SECRET
      );
      res.json({
        status: 200,
        token,
      });
      return;
    }

    res.json({
      status: 400,
      message: "password is wrong",
    });
    return;
  }

  // return user not found
  res.json({
    status: 400,
    message: "user not found",
  });
  return;
}

module.exports = {
  create,
  login,
  get,
};
