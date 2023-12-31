import express from "express";
const app = express();
import Connection from "./db/Conn.js";
import blogRouter from "./routes/blogRouter.js";
import cors from "cors"

const PORT = process.env.PORT || 8000;
Connection();

app.use(cors())
app.use(express.json());
app.use("/api/v1", blogRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})