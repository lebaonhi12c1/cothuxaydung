import React, { useState } from "react";
import Modal from "react-modal";
import "@/pages/products/index";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    border: 2,
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transition",
    padding: "2rem",
    width: "90%",
    maxWidth: "600px",
    overflow: "visible",
    zIndex: 1000,
  },
};
const searchProducts = (products, searchTerm) => {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const SearchModal = ({ isOpen, onRequestClose, onSubmit, products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = searchProducts(products, searchTerm);
    if (typeof onSubmit === "function") {
      onSubmit(filteredProducts);
    }
    onRequestClose();
  };
  

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.2s ease-in-out",
          zIndex: 9998,
        }}
      />
      <h2 style={{ position: "relative" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="placeholder-opacity-50"
            id=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "black",
              width: "100%",
              height: "100%",
              padding: "0.5rem",
              textAlign: "center",
            }}
          />
          <button
            type="submit"
            style={{
              display: "none",
            }}
          >
            Tìm kiếm
          </button>
        </form>
      </h2>
    </Modal>
  );
};

export default SearchModal;
