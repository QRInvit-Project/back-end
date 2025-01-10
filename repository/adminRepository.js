import connectDB from '../config/dbConfig';

const getAdminByEmail = async (email) => {
  const connection = await connectDB();
  const [rows] = await connection.query('SELECT * FROM Admin WHERE Email = ?', [email]);
  await connection.end();
  return rows[0];
};

export default { getAdminByEmail };
