import { sign } from 'jsonwebtoken';
import { secret, expiresIn as _expiresIn } from '../config/jwtConfig';

const generateToken = (admin) => {
  return sign({ id: admin.id, email: admin.email }, secret, {
    expiresIn: _expiresIn,
  });
};

export default { generateToken };