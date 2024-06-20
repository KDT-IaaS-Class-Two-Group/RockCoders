import React from "react";

const commentForm = () => {
  return (
    <div>
      <form action="/comment">
        <input type="text" name="nickname" />
        <input type="text" name="content" />
      </form>
    </div>
  );
};

export default commentForm;
