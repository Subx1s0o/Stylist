import { ContactsData } from "@/types/contactsData.interface";

import { EndPoints } from "../constans/endpoints";

export async function sendContactsData(data: ContactsData) {
  console.log(data);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${EndPoints.CONTACTS}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error Sending Data", error);
    throw error;
  }
}
