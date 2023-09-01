import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],  // This message will be sent if email is not unique
        required: [true, "Email is required!"]
    },
    
    username: {
        type: String,
        required: [true, "Username is required!"],
        match:  [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },

    image: {
        type: String
    },
});

// In NextJS the route only gets created and run when its called. Thats why "models" was added to assign existing models to existing variables and ensure the existing model is reused
const User = models.User || model("User", UserSchema); 

export default User;