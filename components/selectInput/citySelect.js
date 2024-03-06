"use client";
import { Label, Select } from "flowbite-react";
function SelectInputField({ governorates, lableValue }) {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value={lableValue} />
      </div>
      <Select
        id="countries"
        variant="outlined"
        color="error"
        required
        className="rounded-lg  border-grey-500    focus:border-red-900   "
      >
        {governorates.map((governorate) => {
          return <option key={governorate}>{governorate}</option>;
        })}
      </Select>
    </div>
  );
}

export default SelectInputField;
