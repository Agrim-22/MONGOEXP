const mongoose = require("mongoose");
const Chat=require("./models/chat.js");


main().then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
    {
        from:"Neha",
        to:"Priya",
        msg:"send your Exam sheets",
        created_at:new Date(),
    },
    {
        from:"Rohit",
        to:"Mohit",
        msg:"teach me JS callbacks",
        created_at:new Date(),

    },
    {
        from:"Amit",
        to:"Sumit",
        msg:"all the best",
        created_at:new Date(),
    },
    {
        from:"Mohan",
        to:"Rohan",
        msg:"hello mongoose welcome in coding",
        created_at:new Date(),
    },
    {
        from:"Anita",
        to:"Sunita",
        msg:"Lets do gossips",
        created_at:new Date(),
    },
    {
        from:"Geeta",
        to:"Reeta",
        msg:"We are papa ki pari",
        created_at:new Date(),
    },
];

Chat.insertMany(allChats);