import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../Models/user.js';
export const register = async (req, res) => {
  const {username, email, password, mobileNumber} = req.body;
  try{
      if(!username || !email || !password || !mobileNumber) {
        return res.json({message:"All fields are required"});

      }
      const existingUser = await User.findOne({email});
      if(existingUser){
        return res.json({message:"User already exixts"});
      }
      else{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          username,
          email,
          password:hashedPassword, 
          mobileNumber
        })
        await newUser.save();
        res.status(201).json({message:"user registered successfully"});
      }


  }
  catch(error){
    res.status(500).json({message:"Server error"});
  }
}

export const Login = async (req, res)=>{
  try{
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "ALl fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ message: "Invalid password" });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ token, message: "Login successful" });
      }
    }

  }
  catch(error){
    return res.status(500).json({messsage:"server error" , error: error.message});
  }
  
}

export const getUser = async(req, res)=> {
  try{
     const user = await User.findById(req.userId).select("-password");
    if(!user){
      return res.status(404).json({ message :"user not define",
        
      })
    }
    res.status(200).json(user);
  }
  catch(err){
    console.log(error.response?.status);
  console.log(error.response?.data);

  }


}

// export default { register, Login };