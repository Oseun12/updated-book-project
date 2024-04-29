import App from "./app";
import BookRoute from "./routes/bookRoutes";
import RatingRoute from "./routes/ratingRoutes";
import UserRoute from "./routes/userRoutes";
import AuthRoute from "./routes/authRoutes";


export const app = new App([
    new UserRoute(),
    new BookRoute(),
    new RatingRoute(),
    new AuthRoute()
]);

app.listen();