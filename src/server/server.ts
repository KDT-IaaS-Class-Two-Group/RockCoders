import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.config.js";

const PORT= process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

// 웹팩 미들웨어 설정
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output!.publicPath!
  })
);

app.use(express.static(path.resolve("dist")));
// 핫 미들웨어 설정
app.use(webpackHotMiddleware(compiler));

// 정적 파일 제공
app.use(express.static(path.resolve("public")));
app.use(express.static(path.resolve("src")));
app.use(express.static(path.resolve("static")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});