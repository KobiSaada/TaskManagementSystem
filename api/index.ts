import app from './app';
import connectDB from './MongoDB/dbConn';

const PORT = process.env.PORT || 3001;

const HOST = 'localhost';
connectDB();



app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});