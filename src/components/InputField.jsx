import { useId } from "react";

export default function InputField({ label, value, onChange, type = "text", autoComplete, children }) {
  const id = useId();

  return (
    <div className={children ? "field has-toggle" : "field"}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        autoComplete={autoComplete}
      />
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
