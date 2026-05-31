import e from "express";
import cors from "cors";

const app = e();

app.use(cors({ origin: "*" }));

app.get("/", async (req, res) => {
  return res.status(200).json({
    message: "server is listening!",
  });
});

export default app;
