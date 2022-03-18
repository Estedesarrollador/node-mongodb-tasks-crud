import app from "./app";
import "./database";
import { PORT } from "./config";


app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

app.set("port", PORT);

console.log("Server on port", PORT);
