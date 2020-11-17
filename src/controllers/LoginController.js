const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(200).json({
          message: 'Requires email and password'
        });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(200).json({
          message: 'Email doesnt match any user. Register instead.'
        });
      }

      if (user && (await bcrypt.compare(password, user.password))) {
        const userResponse = {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
        return res.json(userResponse)
      } else {
        return res.status(400).json({
          message: 'User or password doesnt match!'
        })
      }
    } catch (error) {
      throw Error(`Error while authenticating user ${error}`)
    }
  }
}