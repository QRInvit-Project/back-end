import { createConnection } from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connectDB = async () => {
  try {
    const connection = await createConnection(dbConfig);
    console.log("Database connected!");
    return connection;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

export default connectDB;