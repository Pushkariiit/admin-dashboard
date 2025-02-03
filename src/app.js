import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { JSONDATA_LIMIT } from "./constants.js";
import { URLDATA_LIMIT } from "./constants.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors({
    origin: [process.env.CORS_ORIGIN],
    credentials: true
}))
app.use(express.json({limit: JSONDATA_LIMIT}));
app.use(express.urlencoded({extended: true, limit: URLDATA_LIMIT}));
app.use(express.static("public"));
app.use(cookieParser());


app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    next();
});


app.get("/api/v1",(req,res)=>{
    res.send("<h1>Api is working</h1>")
})

//Routes
import userRouter from "./routes/user.route.js"
import shopifyRouter from "./routes/shopify.route.js"
import bargainingRouter from "./routes/bargaining.route.js"
import companyRouter from "./routes/company.route.js"

app.use("/api/v1/users", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/shopify", shopifyRouter);
app.use("/api/v1/bargaining", bargainingRouter);

app.use(errorMiddleware);

export { app };