import { useForm } from "react-hook-form"

interface valuesSelect {
  value: string
  label: string
}
interface InputComponentsProps {
  label: string
  typeElement: "text" | "password"
  idElement: string
  listValues?: valuesSelect[]
}

export default function InputComponents({ label, typeElement, idElement, listValues }: InputComponentsProps) {
  const { register } = useForm()
  return (
    <>
      <label htmlFor={ idElement } className="font-semibold">
        { label }
      </label>
      {
        listValues?.length ? (
          <select name="" id="">
            {
              listValues.map(item => (
                <option value={item.value}>{ item.label }</option>
              ))
            }
          </select>
        ) : (
          <input
            {...register("user")}
            type={ typeElement === "text" ? "text" : "password" }
            id={ idElement }
            className="mt-1 w-full border border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        )
      }
    </>
  )
}
