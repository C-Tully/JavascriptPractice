import { useRef, useState } from "react";

import type { FormHandle } from "../Form/Form";
import Form from "../Form/Form";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";

export default function TestForm() {
  const form = useRef<FormHandle>(null);
  const [isLoading, setIsLoading] = useState(false);

  const inputConfig = [
    {
      name: "uName",
      type: "text",
      id: "uName",
      label: {
        className: "block mb-1 text-sm font-medium text-gray-700",
        name: "User name",
      },
      required: true,
    },
    {
      name: "uPass",
      type: "password",
      id: "uPass",
      label: {
        className: "block mb-1 text-sm font-medium text-gray-700",
        name: "Password",
      },
      required: true,
    },
  ];

  async function handleFormSubmit(data: unknown) {
    console.log("Raw Form data::", data);
    setIsLoading(true);
    //extract out relevant data
    const { uName, uPass } = data as { uName: string; uPass: string };

    if (uName && uPass) {
      //Dispatch action... do something here
      //simulate backend

      await new Promise<void>((resolve) => {
        console.log("Promise Start::");
        setTimeout(() => {
          console.log("Timing out inner");
          resolve();
        }, 3000);
      });
      console.log("Timing out done");

      form.current?.clear();
    } else {
      //throw up error message stating missing inputs?
    }
    setIsLoading(false);
  }

  return (
    <Form
      ref={form}
      onSave={handleFormSubmit}
      id="test-form"
      className={
        "w-[70%] bg-white rounded-b-md shadow-lg p-8 mx-auto border-b-black"
      }
    >
      <div className="flex flex-col items-center gap-4">
        {inputConfig.map((item) => (
          <div className="w-full max-w-sm" key={item.id}>
            <Input
              label={item.label}
              id={item.id}
              type={item.type}
              name={item.name}
              labelClassName={item.label.className}
            />
          </div>
        ))}
        <Button
          disabled={isLoading}
          className={
            "bg-sky-500 hover:bg-sky-700 block mb-1 text-sm font-medium text-gray-700 rounded-xs"
          }
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </Form>
  );
}
