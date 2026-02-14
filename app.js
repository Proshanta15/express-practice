import express from "express";
import path from "path";
import { shortnerRoutes } from "./routes/shortner.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.use(shortnerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
