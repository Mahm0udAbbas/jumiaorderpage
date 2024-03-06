"use client";
import { Button } from "flowbite-react";

function CancelButton({ handleSubmit }) {
  return (
    <div>
      <Button
        color="yellow"
        className="me-2 font-semibold text-yellow-500 uppercase enabled:hover:bg-red-100 border-none rounded "
        onClick={() => handleSubmit()}
      >
        Cancel
      </Button>
    </div>
  );
}

export default CancelButton;
