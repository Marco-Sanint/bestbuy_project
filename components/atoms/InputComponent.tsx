import { useFormContext } from "react-hook-form";

import { standardInput } from "../../utils/Tokens";

interface valuesSelect {
  value: string;
  label: string;
}
interface InputComponentsProps {
  label: string;
  typeElement?: "text" | "password" | "email" | "select";
  idElement: string;
  nameRegister: string;
  listValues?: valuesSelect[];
}

export default function InputComponents({
  label,
  typeElement = "text",
  idElement,
  listValues,
  nameRegister,
}: InputComponentsProps) {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={idElement} className="font-semibold">
        {label}
      </label>
      {listValues?.length ? (
        <select
          {...register(nameRegister)}
          id={idElement}
          className={standardInput}
        >
          {listValues.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...register(nameRegister)}
          type={typeElement}
          id={idElement}
          className={standardInput}
        />
      )}
    </>
  );
}