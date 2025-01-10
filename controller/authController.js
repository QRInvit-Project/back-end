import { login as _login } from '../service/authService';
import { generateToken } from '../util/jwtUtil';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await _login(email, password);
    const token = generateToken(admin);
    res.status(200).json({ token, admin });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};

export default { login, logout };
