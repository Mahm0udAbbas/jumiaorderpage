"use client";
import Delivery from "@/components/DeliveryDetails/Delivery";
import EditAdressForm from "../../components/EditAdressForm/EditAdressForm";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
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
