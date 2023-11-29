import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://affaqkhan:Affaqkhan@cluster0.qmkuoxm.mongodb.net/blog`);
        console.log("Connection successful");
    } catch (error) {
        console.log(error);
    }
}

export default Connection;