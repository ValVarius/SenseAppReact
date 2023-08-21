import { useState } from "react";
import "./style.css";

export default function DeleteButton (props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = (event) => {
    // event.preventDefault()
    setIsDeleting(true);
    // do something async
    setTimeout(() => {
      setIsDeleting(false);
      setIsDeleted(true);
      setTimeout(() => {
        setIsDeleted(false);
      }, 625);
    }, 1500);
  };
  

  return (
    <button
      onClick={() => {
        handleClick();
        props.deleteItem(props.item);
      }}
      className={isDeleting || isDeleted ? "delbutton deleting " : "delbutton "}
      disabled={isDeleting || isDeleted}
    >
      <span className="button-text">
        {isDeleting || isDeleted ? "Deleting" : "Delete"}
      </span>
      <span className="animation">
        <span className="balls"></span>
        <span className="lid"></span>
        <span className="can">
          <span className="filler"></span>
        </span>
      </span>
    </button>
  );
};