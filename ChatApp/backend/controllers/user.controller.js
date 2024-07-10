import userModel from "../models/user.model.js";

export const findAllUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        // $ne for not including the loggedIn user in the sidebar of users && .select for removing the attribute password from the datas we got from the model 
        const filteredUsers = await userModel.find({ _id: { $ne : loggedInUserId}}).select("-password")  

        return res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error", error.message)
        return res.status(500).json({ Error: "Internal Server Error"})
    }
}