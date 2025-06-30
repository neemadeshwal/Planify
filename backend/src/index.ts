import { initServer } from "./app";
import { PORT } from "./utils/constants";

async function init() {
  const { app } = await initServer();

  app.get("/", (req, res) => {
    res.send("Hello world...");
  });

  app.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT, "......");
  });
}

init();
