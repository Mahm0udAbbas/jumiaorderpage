"use client";
import { Button } from "flowbite-react";
function SaveButton({ handleSubmit, label, color }) {
  return (
    <div>
      <Button
        color={color}
        className="font-semibold uppercase rounded w-full "
        onClick={() => handleSubmit()}
      >
        {label}
      </Button>
    </div>
  );
}

export default SaveButton;
