/**
 * @eonduck2 24.06.20
 * * 방명록 틀이 될 폼 컴포넌트
 */
const CommentForm: React.FC = () => {
  return (
    <div>
      <form action="/">
        <input type="text" />
        <input type="text" />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default CommentForm;
