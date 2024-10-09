const mongoose = require('mongoose');

const main = async () => {
    try {
        await mongoose.connect("mongodb+srv://academy:6IRuUXQcuxy8ilbx@cluster0.mf78gev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected successfully");
    } catch (error) {
        console.log(error);
    }
};

main();
