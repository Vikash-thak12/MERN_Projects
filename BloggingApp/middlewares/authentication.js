import { validation } from "../services/authentication.js";

export function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName]
        if(!tokenCookieValue) {
            // return res.status(401).send('Unauthorized');
            return next();
        }

        try {
            const usePayload = validation(tokenCookieValue)
            req.user = usePayload
        } catch (error) {
            
        }
        return next();
    }
}