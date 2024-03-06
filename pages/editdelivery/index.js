import { Card } from "flowbite-react";
import CustomerAdress from "@/components/customeradress/customeradress";
import DeliveryDetailsForm from "@/components/deliveryDetailsForm/deliveryDetailsForm";
import ListHeader from "@/components/Header/Header";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
function EditDelivery() {
  return (
    <>
      <section className="bg-[#e5e5e580]">
        <CustomerAdress />
        <DeliveryDetailsForm />
        <div className="text-grey-100">
          <PaymentMethod />
        </div>
      </section>
    </>
  );
}

export default EditDelivery;
