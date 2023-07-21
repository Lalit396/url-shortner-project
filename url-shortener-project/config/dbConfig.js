const mongoose = require('mongoose');


const connectToDB = async () => {
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI);

        if(conn) {
            console.log('connection successful...');
        }

    } catch (error) {
        
        console.log(error);

    }
};


module.exports = {
    connectToDB
}