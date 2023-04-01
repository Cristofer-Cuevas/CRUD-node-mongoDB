import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://christopher:yalbano2@localhost:27017/alterna?authMechanism=DEFAULT&authSource=admin");
        console.log("Connection Success");
    } catch (error) {
        console.log(error);
        throw new Error("rror al intentar conectar con Mongo");
    }
};
