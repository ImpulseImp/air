import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput(props: FormInputProps) {
  const { label, name, type, defaultValue, placeholder } = props;

  return (
    <div className="mb-2 flex flex-col space-y-2 font-medium">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <input
        className="rounded-md border border-slate-300 p-1 px-4 outline-none dark:border-none"
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default FormInput;
