import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
    >
      <div
        className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
        style={props.completed ? { textDecoration: "line-through" } : null}
      >
        <span className="me-auto">{props.title}</span>

        {isMouseOver && (
          <>
            <button className="btn btn-success" onClick={() => props.onMark()}>
              <IconCheck />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => props.onMoveUp()}
            >
              <IconArrowUp />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => props.onMoveDown()}
            >
              <IconArrowDown />
            </button>
            <button className="btn btn-danger" onClick={() => props.onDelete()}>
              <IconTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
