import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export function saveUser(req, res) {

    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashPassword,

    });

    newUser.save()
    .then(() => {
        res.status(201).json({ message: 'User created successfully' });
    })
    .catch((error) => {
        res.status(500).json({ error: 'Failed to create user' });
    });
}

export function loginUser(req, res) {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "Email not found" });
      }

      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }

        const token = jwt.sign(
          { name: user.name, role: user.role },
            "random456",
          { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token });
    })
    .catch((error) => {
      res.status(500).json({ error: "Server error" });
    });
}

