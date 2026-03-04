import mongoose from 'mongoose';

const Db_URI =
 'mongodb://localhost:27017/project-management';

// type 2
const ConnectDB = mongoose.connect(Db_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Could not connect to MongoDB', 
            err);

        process.exit(1); // Exit process with failure
    });
export default ConnectDB;




//type 1
// const ConnectDB = async () =>{  
//     try {
//         await mongoose.connect(Db_URI);
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Could not connect to MongoDB', error);
//         process.exit(1); // Exit process with failure
//     }
// }