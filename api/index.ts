import app from './app';
import connectDB from './MongoDB/dbConn';

const PORT = process.env.PORT || 3001;

connectDB();


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
