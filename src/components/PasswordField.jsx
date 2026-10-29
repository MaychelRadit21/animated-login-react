import { useState } from "react";
import InputField from "./InputField";

export default function PasswordField({ label, value, onChange, autoComplete = "current-password" }) {
  const [visible, setVisible] = useState(false);

  return (
    <InputField
      label={label}
      value={value}
      onChange={onChange}
      type={visible ? "text" : "password"}
      autoComplete={autoComplete}
    >
      <button
        className="toggle"
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Sembunyikan password" : "Tampilkan password"}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </InputField>
  );
}
