export default function SubmitButton({ loading, children }) {
  return (
    <button className={loading ? "btn loading" : "btn"} type="submit" disabled={loading}>
      <span className="label">{children}</span>
      <span className="spinner">
        <i />
      </span>
    </button>
  );
}
