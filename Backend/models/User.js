import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:[3, 'Username must be atleast 3 character']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/, 'Please provide the email']
    }    ,
    password:{
        type:String,
        require:[true,'Please provide the password'],
        minlength:[6, 'Password must be atleast 6 character long'],
        select:false
    },
    profileImage:{
        type:String,
        default:null
    },
        timestamp:true
    
});


//hash password before svaing 
userSchema.pre('save',async function(){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.getSalt(10);
    this.password= await bcrypt.hash(this.password, salt);

});

//compare password method
userSchema.methods.matchPassword= async function (enterdPassword){
    return await bcrypt.compare(enteredPassword, this.password);

};

const User= mongoose.model('User', userSchema);

export default User;



