"use client";
import { Card } from "flowbite-react";
import ListHeader from "../Header/Header";

function CustomerAdress() {
  return (
    <>
      <section className="">
        <Card>
          <div className="flex justify-between items-center">
            <ListHeader value="delivery details" color="text-green-900" />
            <span className="ms-2">Change</span>
          </div>
          <div>
            <span className="mb-3">Mahmoud Abbas</span>
            <div>elmaady | Cairo - Maadi-Ashanat El Maadi | +02 1281935436</div>
          </div>
        </Card>
      </section>
    </>
  );
}

export default CustomerAdress;
