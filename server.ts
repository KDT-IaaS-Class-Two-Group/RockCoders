import express from "express";
import path from "node:path";
import { SymbolDisplayPartKind } from "typescript";

const __dirname = path.resolve();
// const express = require(`express`);
// const path = require(`node:path`);

const app: any = express();

app.set(`PORT`, Number(process.env.PORT ?? 8080));
const PORT: number = app.get(`PORT`);

const buildPath: string = path.join(__dirname, "build");

app.use("/build", express.static(buildPath));

app.get("*", (req: any, res: any) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(app.get(`PORT`), () => {
  console.log(`Server is running on http://localhost:${app.get(`PORT`)}`);
});
