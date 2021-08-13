import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();



app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts',postRoutes);

const CONNEcTION_URL = 'mongodb+srv://mohammadaliproject:mohammadali01625456039@cluster.arihi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.
connect(CONNEcTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).
catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);