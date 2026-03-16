export const userAuthenticated = (req, res, next) => {
    if(!req.auth().userAuthenticated) {
        return res.status(401).json({ message: "Unauthenticated - you must be logged in first."})
    }

    next();
}; 