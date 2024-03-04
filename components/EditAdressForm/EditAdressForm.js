"use client";
import { Card, Label, Select, FloatingLabel } from "flowbite-react";
import SelectInputField from "../selectInput/citySelect";
import ListHeader from "../Header/Header";
import SaveButton from "../Button/SaveButton";
import CancelButton from "../CancelButton/CancelButton";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const governorates = [
  "Alexandria",
  "Aswan",
  "Asyut",
  "Beheira",
  "Beni Suef",
  "Cairo",
  "Dakahlia",
  "Damietta",
  "Faiyum",
  "Gharbia",
  "Giza",
  "Ismailia",
  "Kafr El Sheikh",
  "Luxor",
  "Matrouh",
  "Minya",
  "Monufia",
  "New Valley",
  "North Sinai",
  "Port Said",
  "Qalyubia",
  "Qena",
  "Red Sea",
  "Sohag",
  "South Sinai",
  "Suez",
];
const cairo_areas = [
  "Nasr City",
  "Heliopolis",
  "Maadi",
  "Zamalek",
  "Dokki",
  "New Cairo",
  "Mohandessin",
  "Helwan",
  "6th of October City",
  "Mokattam",
  "Abbassiya",
  "Hadayek El Kobba",
  "El Marg",
  "Shubra",
  "El Zeitoun",
  "Sayeda Zeinab",
  "Waili",
  "Manial",
  "Boulaq",
  "Bab El Shaareya",
  "Matariya",
  "Rod El Farag",
  "Khalifa",
  "Ain Shams",
  "El-Ma'asara",
  "El Khanka",
  "Benha",
  "Shubra El Kheima",
];

function EditAdressForm() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    adress: "",
  });
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    phoneError: "",
    adressError: "",
  });
  const [isFormValid, setIsFormValid] = useState(true);
  useEffect(() => {}, []);
  console.log("hi");
  const validateForm = (e) => {
    console.log(e.target.name);
    if (e.target.name == "firstname") {
      setInfo({ ...info, firstName: e.target.value });
      setErrors({
        ...errors,
        firstNameError:
          e.target.value.length == 0 ? "First Name is Required" : "",
      });
    }
    if (e.target.name == "lastname") {
      setInfo({ ...info, lastName: e.target.value });
      setErrors({
        ...errors,
        lastNameError:
          e.target.value.length == 0 ? "Last Name is Required" : "",
      });
    }
    if (e.target.name == "phone") {
      setInfo({ ...info, phone: e.target.value });
      setErrors({
        ...errors,
        phoneError: e.target.value.length == 0 ? "Phone is Required" : "",
      });
    }
    if (e.target.name == "adress") {
      setInfo({ ...info, adress: e.target.value });
      setErrors({
        ...errors,
        adressError: e.target.value.length == 0 ? "Address is Required" : "",
      });
    }
    for (let error in errors) {
      console.log(error);
      console.log(errors[error].length);
      if (errors[error].length > 0) {
        setIsFormValid(false);
        break;
        console.log(isFormValid);
      } else {
        setIsFormValid(true);
      }
    }
  };
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/CustomerAdress");
    console.log(errors);
    console.log(isFormValid);
    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };
  return (
    <>
      <Card className=" rounded p-0">
        <ListHeader value={"1.customer adress"} />
        <section className="px-0  border-y-2">
          <h6 className="uppercase mt-4 mb-2 text-xs ">edit adress</h6>
          <div className="grid grid-cols-1 sm:gid-cols-2 gap-4 p-0">
            <div>
              <FloatingLabel
                variant="outlined"
                label="FirstName"
                color="error"
                className="  border-grey-500 text-grey-500 text-orange-500"
                value={info.firstName}
                name="firstname"
                onChange={(e) => {
                  validateForm(e);
                }}
              />
              <span className="text-xs text-red-600">
                {errors.firstNameError}
              </span>
            </div>
            <div>
              <FloatingLabel
                variant="outlined"
                label="LastName"
                name="lastname"
                className="  border-grey-500 text-grey-500 text-orange-500 "
                value={info.lastName}
                onChange={(e) => {
                  validateForm(e);
                }}
              />
              <span className="text-xs text-red-600">
                {errors.lastNameError}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-4">
            <span className="place-self-center col-span-1   ">+20</span>
            <div className=" col-span-7 sm:col-span-3  ">
              <div>
                <FloatingLabel
                  variant="outlined"
                  label="Phone Number"
                  name="phone"
                  type="number"
                  value={info.phone}
                  onChange={(e) => {
                    validateForm(e);
                  }}
                  className="border-grey-500 text-grey-500 text-orange-500"
                />
                <span className="text-xs text-red-600">
                  {errors.phoneError}
                </span>
              </div>
            </div>
            <span className="place-self-center col-span-1  ">+20</span>
            <div className=" col-span-7 sm:col-span-3  ">
              <FloatingLabel
                className="  border-grey-500 text-grey-500 text-orange-500"
                variant="outlined"
                type="number"
                label="Additional Phone Number"
              />
            </div>
          </div>
          <div className="">
            <div>
              <FloatingLabel
                variant="outlined"
                label="Address"
                name="adress"
                className="  border-grey-500 text-grey-500 text-orange-500"
                value={info.adress}
                onChange={(e) => {
                  validateForm(e);
                }}
              />
              <span className="text-xs text-red-600">{errors.adressError}</span>
            </div>
          </div>
          <div className="">
            <FloatingLabel
              className="  border-grey-500 text-grey-500 text-orange-500"
              variant="outlined"
              label="Additionsl Information"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 p-0">
            <div className="   ">
              <SelectInputField
                governorates={governorates}
                lableValue={"Region"}
              />
            </div>
            <div className="  mb-4 ">
              <SelectInputField
                governorates={cairo_areas}
                lableValue={"City"}
              />
            </div>
          </div>
        </section>
        <div className="flex flex-row justify-items-center items-center place-self-end  ">
          <CancelButton />
          <SaveButton
            handleSubmit={handleSubmit}
            label="save"
            color="warning"
          />
        </div>
      </Card>
    </>
  );
}

export default EditAdressForm;
