import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

const Comments: React.FC = () => {
  const allComments: Comment[] = [
    { id: 1, text: '첫 번째 댓글' },
    { id: 2, text: '두 번째 댓글' },
    { id: 3, text: '세 번째 댓글' },
    { id: 4, text: '네 번째 댓글' },
    { id: 5, text: '다섯 번째 댓글' },
  ];

  const [visibleComments, setVisibleComments] = useState<Comment[]>(allComments.slice(0, 2));
  const [isAllCommentsVisible, setIsAllCommentsVisible] = useState<boolean>(false);

  const showMoreComments = () => {
    setVisibleComments(allComments);
    setIsAllCommentsVisible(true);
  };

  return (
    <div>
      <ul>
        {visibleComments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      {!isAllCommentsVisible && (
        <button onClick={showMoreComments}>더보기</button>
      )}
    </div>
  );
};

export default Comments;