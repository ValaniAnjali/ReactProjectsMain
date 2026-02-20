import { useEffect, useRef } from "react";

function ConfirmDeleteDialog({ isOpen, onConfirm, onCancel }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      style={{
        border: "none",
        borderRadius: "12px",
        padding: "24px",
        width: "350px",
        maxWidth: "90%",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        textAlign: "center"
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Confirm Deletion</h3>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        Are you sure you want to delete this project?
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px"
        }}
      >
        <button
          onClick={onConfirm}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#e74c3c",
            color: "white",
            cursor: "pointer",
            fontWeight: "500"
          }}
        >
          Delete
        </button>

        <button
          onClick={onCancel}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: "500"
          }}
        >
          Cancel
        </button>
      </div>

      {/* Backdrop styling */}
      <style>
        {`
          dialog::backdrop {
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
          }
        `}
      </style>
    </dialog>
  );
}

export default ConfirmDeleteDialog;
