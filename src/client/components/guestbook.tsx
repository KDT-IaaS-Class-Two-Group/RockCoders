import React, { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

const Guestbook: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState<number>(1);

  const loadMoreComments = async () => {
    try {
      const response = await fetch(`/comment?page=${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Comment[] = await response.json();
      setComments((prevComments) => [...prevComments, ...data]);
      setPage((prevPage) => prevPage + 1);
      console.log("load");
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <button onClick={loadMoreComments}>더보기</button>
    </div>
  );
};

export default Guestbook;
