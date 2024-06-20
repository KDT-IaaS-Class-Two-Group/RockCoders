/**
 * @eonduck2 24.06.20
 * * 방명록 틀이 될 폼 컴포넌트
 */
const commentForm: React.FC = () => {
  return (
    <div>
      <form action="/comment">
        <input type="text" />
        <input type="text" />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default commentForm;
