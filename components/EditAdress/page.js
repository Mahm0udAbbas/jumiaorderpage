"use client";
import Delivery from "../DeliveryDetails/Delivery";
import EditAdressForm from "../EditAdressForm/EditAdressForm";
import PaymentMethod from "../PaymentMethod/PaymentMethod";

function FirstPage() {
  return (
    <>
      <div>
        <EditAdressForm />
      </div>
      <div className="text-grey-100">
        <Delivery />
      </div>
      <div className="text-grey-100">
        <PaymentMethod />
      </div>
    </>
  );
}

export default FirstPage;
