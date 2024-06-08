import React, { useState, useCallback, useEffect } from "react";
import "./note-style.css";

function Note(props) {
  const [updating, setUpdating] = useState(false);
  const [priority, setPriority] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  const toggleUpdating = useCallback(() => {
    document.getElementById(`h1-${props.id}`).focus();
    setUpdating((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (updating) {
      // Focus on the h1 element when updating state becomes true
      document.getElementById(`h1-${props.id}`).focus();
    }
  }, [updating, props.id]);

  useEffect(() => {
    if (!updating) {
      // Update current time when not in update mode
      setCurrentTime(new Date().toLocaleString());
    }
  }, [updating]);

  function handleClick() {
    props.onDelete(props.id);
  }

  function setTitle(event) {
    const id = props.id;
    const title = event.target.innerText;
    const content = props.content;
    props.onUpdate(id, title, content);
  }

  function setContent(event) {
    const id = props.id;
    const title = props.title;
    const content = event.target.innerText;
    props.onUpdate(id, title, content);
  }

  function handlePriorityChange(event) {
    setPriority(parseInt(event.target.value));
  }

  return (
    <div className="note" style={{ backgroundColor: props.color }}>
      <h1
        contentEditable={updating}
        className={updating ? "editable" : ""}
        onChange={setTitle}
        id={`h1-${props.id}`}
      >
        {props.title}
      </h1>
      <p contentEditable={updating} onChange={setContent}>
        {props.content}
      </p>
      {!updating && (
        <>
          <p className="timeStamp" style={{fontSize:"12px"}}>Last updated: {currentTime}</p>
          <label htmlFor={`priority-${props.id}`}>Priority:</label>
          <input
            type="number"
            id={`priority-${props.id}`}
            value={priority}
            onChange={handlePriorityChange}
          />
        </>
      )}
      <button onClick={handleClick}>
        <box-icon name="trash-alt" type="solid" flip="horizontal"></box-icon>
      </button>
      <button onClick={toggleUpdating}>
        {updating ? (
          <box-icon name="check"></box-icon>
        ) : (
          <box-icon name="edit-alt" type="solid"></box-icon>
        )}
      </button>
    </div>
  );
}

export default Note;
