const Router = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');

const router = new Router();

router.post('/registration',
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Password must be longer than 4 and shorter than 12 characters").isLength({min: 4, max: 12}),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({message: "Registration error", errors});
      }

      const {email, password} = req.body;

      const candidate = await User.findOne({email});

      if (candidate) {
        return res.status(400).json({message: `User ${email} already exist`});
      }

      const hashPassword = await bcrypt.hash(password, 15);
      const user = new User({email, password: hashPassword});
      await user.save();
      return res.json({message: "User was created"});

    } catch (e) {
      console.log(e);
      res.send({message: "Server error"});
    }
  })

module.exports = router;