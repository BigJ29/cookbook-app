const bcrypt = require('bcrypt');
const User = require('../models/User');


module.exports = {
  async createUser(req, res) {
    try {
      const { firstName, lastName, password, email } = req.body;

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        return res.json(user);
      }

      return res.status(400).json({
        message: "Email already exist! Log in instead.",
      });
      
    } catch (err) {
      throw Error(`Error while registering a new user: ${err}`);
    }
  }
};