export const signup = (req, res) => {
    try {
        const {fullname, gmail, password} = req.body;
    } catch (error) {
        console.log(Error);
    }
}

export const login = (req, res) => {
    res.send("This is from login page")
}

export const logout = (req, res) => {
    res.send("This is from logout page")
}