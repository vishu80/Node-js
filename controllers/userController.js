const user = require("../db/models/usermodel");
const generateJwtToken = require("../utlis/jwtToken");

//@desc Auth user & get token
//@route Post /api/users/login
//@access Public

exports.authUser = async (req, res) => {
  const { email, password } = req.body;
  const users = await user.User.findOne({ email });
  if (users?.password == password && users.email == email) {
    res.status(200).json({
      _id: users._id,
      name: users.name,
      email: users.email,
      isAdmin: users.isAdmin,
      token: generateJwtToken(users._id),
    });
  } else {
    res.status(401).json({
      message: "User not authorize",
    });
  }
};

exports.getUserProfile = async (req, res) => {
  const {id}=req.params
  user.User.findById({'_id':id},function(err,data){
    if(err)
      res.status(400).json({
          message:'User detail with this id'+id+""+'Not found'
      })
    if(data)
    res.status(200).json({
        data
    })
  })

 
};

exports.registerUser = async (req, res) => {
  const { email, password, name } = req.body;
  const registerUser = await user.User.findOne({ email });
  if (registerUser != null) {
    res.status(400).json({
      message: "User already register",
    });
  } 

  const userData = await user.User.create({
    name,
    email,
    password,
  });
  if (userData) {
    res.status(201).json({
      message: "User Registered successfully",
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      isAdmin: userData.isAdmin,
      token: generateJwtToken(userData._id),
    });
  } else {
    res.status(400).json("Invalid user data");
  }
};



exports.updateUserProfile = async (req, res) => {
  user.User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "not found with id " + req.params.id,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating  with id " + req.params.id,
      });
    });
};
// if (users?.password == password && users.email == email) {
//   res.status(200).json({
//     _id: users._id,
//     name: users.name,
//     email: users.email,
//     isAdmin: users.isAdmin,
//     token: generateJwtToken(users._id),
//   });
// } else {
//   res.status(401).json({
//     message: "User not authorize",
//   });
// }
