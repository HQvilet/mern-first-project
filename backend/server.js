import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/dbconnection.js";
import path from "path"
import router from "./routes/product.route.js";
//IqT8s6RX5PWqnhc9
dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", router);

if(process.env.NODE_ENV === "production")
{
    console.log('On production');
    app.use(express.static(path.join(__dirname, `/frontend/dist`)));

    app.get("*a", (req, res) =>{
        res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
        // res.send("asd");
    });
}
    
app.listen(process.env.PORT, () =>{
    connectDB();
    console.log(`+ Listening on port ${process.env.PORT}`);
});