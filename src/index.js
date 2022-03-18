import app from "./app";
import "./database";
import { PORT } from "./config";


app.listen(process.env.PORT || 3000, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

console.log("Server on port", PORT);
