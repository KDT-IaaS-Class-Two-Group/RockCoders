import path from "path";
import { fileURLToPath } from 'url';
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const compiler = webpack(config as any);

// 웹팩 미들웨어 설정
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output!.publicPath!
  })
);

app.use(express.static(path.join(__dirname, "dist")));
// 핫 미들웨어 설정
app.use(webpackHotMiddleware(compiler));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});