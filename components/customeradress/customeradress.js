import { Card } from "flowbite-react";
import ListHeader from "../Header/Header";
import Link from "next/link";
function CustomerAdress() {
  return (
    <>
      <section className="bg-[#e5e5e580]">
        <Card>
          <div className="flex justify-between items-center">
            <ListHeader value="delivery details" color="text-green-900" />
            <Link href="/editadress">
              <span className="ms-2">Change</span>
            </Link>
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
