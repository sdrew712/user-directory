import React from "react";

const BottomNav = ({
  onNext,
  onPrev,
  onEdit,
  onDelete,
  onNew,
  editActionText,
}) => {
  return (
    <nav>
      <span onClick={onPrev}>{"< Previous"}</span>
      <span>
        <button onClick={onEdit}>{editActionText}</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onNew}>New</button>
      </span>
      <span onClick={onNext}>{"Next >"}</span>
    </nav>
  );
};

export default BottomNav;
