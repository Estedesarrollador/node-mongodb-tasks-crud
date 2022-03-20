import path from "path";
import express from "express";
import morgan from "morgan";
import { create } from "express-handlebars";

import indexRoutes from "./routes/index.routes";


const app = express();

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));

const exphbs2 = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});

app.engine(".hbs", exphbs2.engine);
app.set("view engine", ".hbs");

// Middelewares
app.use(morgan("dev"));

// routes
app.use(indexRoutes);

app.use(express.urlencoded({ extended: false }));


// static files
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404")
})

export default app;
