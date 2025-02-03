import express, { request, response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/product", (request, response) => {
  response.json({
    id: 1,
    name: "Product 1",
    price: 100,
  });
});

app.post("/product", (request, response) => {
  console.log(request.body);
  response.json({
    dataRequestBody: request.body,
    message: "Product created successfully",
    // data: {
    //   cek: "abc",
    // },
  });
});

app.listen(3000, () => {
  console.log("Server Is running on port 3000");
});
