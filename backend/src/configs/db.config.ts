import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
  connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    (conn) => {
      console.log("Db Connected Successfully !");
    },
    (err) => {
      console.error("Error While Connecting Db", err);
      process.exit(1);
    }
  );
};
