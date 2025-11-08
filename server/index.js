import express from "express"
import cors from "cors"

const app = express()


app.use(express.json());
app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
            "http://34.126.208.71:5174",
            "http://deploy.smartdoorlocks.in"
            // add production url
        ],
        credentials: true,
        // methods: ["GET", "POST"],
        // allowedHeaders: ["Content-Type", "Authorization"]
    }
));

// API route

app.get("/api/message", (req, res) =>{
    res.json({message: "Hello from HK-Developers Server"})

});


const PORT = 4000
// app.listen(PORT, () => {
app.listen(PORT, "0.0.0.0", () => {
    // console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Server is running at http://0.0.0.0:${PORT}`);

})
