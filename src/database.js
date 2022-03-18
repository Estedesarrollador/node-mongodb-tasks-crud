import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    // const db = await connect(MONGODB_URI);
    const db = await connect('mongodb+srv://basededatos:rootroot@cluster0.ie3jl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    console.log("DB connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
