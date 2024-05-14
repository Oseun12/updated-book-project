import App from "./app";
import BookRoute from "./routes/bookRoutes";
import RatingRoute from "./routes/ratingRoutes";
import UserRoute from "./routes/userRoutes";
import AuthRoute from "./routes/authRoutes";
import User2Route from "./routes/userRoutes";
import User3Route from "./routes/userRoutes";


export const app = new App([
    new UserRoute(),
    new BookRoute(),
    new RatingRoute(),
    new AuthRoute(),
    new User2Route(),
    new User3Route()
]);

app.listen();