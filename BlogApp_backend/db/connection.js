const mongoose=require('mongoose');
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log("DB connection established successfully");
}).catch((error)=>{
    console.error("DB connection unsuccessful !",error);
})