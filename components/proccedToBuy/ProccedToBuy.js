"use client";
import { Card } from "flowbite-react";
import SaveButton from "../Button/SaveButton";
function ProccedToBuy() {
  function handleSubmit() {
    console.log("submit");
  }
  return (
    <>
      <Card>
        <div>
          <h5 className=" border-b-2 py-1 font-semibold text-sm ">
            Order summary
          </h5>
          <div className=" border-b-2 py-1 text-sm">
            <div className="flex flex-row justify-between items-center py-1  ">
              <p className="">Items total (1)</p>
              <p className="font-semibold ">EGP 1000</p>
            </div>
            <div className="flex flex-row justify-between items-center py-1 ">
              <span>Delivery fees</span>
              <span className="font-semibold ">EGP 35</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <span className="text-sm capitalize  font-medium">total</span>
            <span className="text-xl">EGP 1035</span>
          </div>
          <div className="">
            <SaveButton
              label="confirm order"
              handleSubmit={handleSubmit}
              disable="disabled"
            />
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProccedToBuy;
