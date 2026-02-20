function ErrorMessage({ message }) {
  return (
    <div
      style={{
        background: "#ffe6e6",
        color: "#d8000c",
        padding: "10px",
        borderRadius: "6px",
        margin: "10px 0",
        fontWeight: "500",
      }}
    >
      ⚠ {message}
    </div>
  );
}
export default ErrorMessage;
