import mongoose, {Schema} from "mongoose";
const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    age:{
      type: Number,
      required: true
    },
    image:{
       
        type:String
    }
    role:{
        type:String,
        enum:["customer" || "admin"],
        default:"customer"
    }
},Timestamp:true)



const User = mongoose.model("User", UserSchema)

// create methode 
const insertData = User.create({name:"Jishan", age:20})