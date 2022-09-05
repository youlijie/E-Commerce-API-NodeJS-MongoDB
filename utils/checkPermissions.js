const CustomError = require("../errors")

const checkPermissions = (requestUser, resourceUserId) => {
    // console.log(requestUser);
    // console.log(resourceUserId);
    // console.log(typeof ressourceUserId);
    if(requestUser.role === "admin") return
    if(requestUser.userId === resourceUserId.toString()) return
    throw new CustomError.unauthorizedError("Not authorized to acces this route")
}

module.exports = checkPermissions