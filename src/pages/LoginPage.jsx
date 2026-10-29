import { useState } from "react";
import AuroraBackground from "../components/AuroraBackground";
import LoginCard from "../components/LoginCard";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Checkbox from "../components/Checkbox";
import SubmitButton from "../components/SubmitButton";
import Toast from "../components/Toast";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  let toastTimer;
  const showToast = (message) => {
    setToast(message);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => setToast(""), 2600);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      showToast("Email belum valid");
      return;
    }
    if (password.length < 6) {
      showToast("Password minimal 6 karakter");
      return;
    }

    setLoading(true);

    // --- Demo: ganti blok ini dengan pemanggilan API kamu ---
    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password, remember }),
    // });
    // if (!res.ok) { setLoading(false); return showToast("Email atau password salah"); }
    // const data = await res.json();
    // localStorage.setItem("token", data.token);
    // window.location.href = "/dashboard";
    setTimeout(() => {
      setLoading(false);
      showToast("Berhasil masuk! Ini demo — hubungkan ke API kamu.");
    }, 1500);
  };

  const handleSocial = (provider) => showToast(`Login dengan ${provider} (demo)`);

  return (
    <>
      <AuroraBackground />

      <div className="page">
        <LoginCard>
          <div className="logo">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <h1>Selamat datang kembali</h1>
          <p className="sub">Masuk untuk melanjutkan ke dashboard kamu.</p>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <InputField
              label="Alamat email"
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="email"
            />

            <PasswordField label="Password" value={password} onChange={setPassword} />

            <div className="row">
              <Checkbox label="Ingat saya" checked={remember} onChange={setRemember} />
              <a className="link" href="#">
                Lupa password?
              </a>
            </div>

            <SubmitButton loading={loading}>Masuk</SubmitButton>

            <div className="divider">atau</div>

            <div className="socials">
              <button className="social" type="button" onClick={() => handleSocial("Google")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9.5" />
                  <path d="M12 7.5v9M7.5 12h9" />
                </svg>
                Google
              </button>
              <button className="social" type="button" onClick={() => handleSocial("GitHub")}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
                GitHub
              </button>
            </div>
          </form>

          <p className="foot">
            Belum punya akun? <a href="#">Daftar sekarang</a>
          </p>
        </LoginCard>
      </div>

      <Toast message={toast} />
    </>
  );
}
