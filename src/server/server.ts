import express, { Request, Response } from "express";

const app = express();
const port = 3000;

interface Comment {
  id: number;
  text: string;
}

// 더미 데이터 예시
const comments: Comment[] = [
  { id: 1, text: "첫번째 댓글" },
  { id: 2, text: "두번째 댓글" },
  { id: 3, text: "세번째 댓글" },
  { id: 4, text: "네번째 댓글" },
  { id: 5, text: "다섯번째 댓글" },
];

app.get("/comment", (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const commentsPerPage = 2;
  const start = (page - 1) * commentsPerPage;
  const end = start + commentsPerPage;

  res.status(200).json(comments.slice(start, end));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
