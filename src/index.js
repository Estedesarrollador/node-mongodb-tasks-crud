import app from "./app";
import "./utils/mongoose";


app.listen(app.get("port"), () => {
  console.log(`Our app is running on port ${ app.get("port") }`);
});
