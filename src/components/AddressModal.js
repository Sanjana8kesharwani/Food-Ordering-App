

const AddAddressModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>Save delivery address</h2>

        <div className="map-placeholder">
          <p>📍 Map placeholder (use Google Maps API here)</p>
        </div>

        <input type="text" placeholder="Address" className="input-box" />
        <input type="text" placeholder="Door / Flat No." className="input-box" />
        <input type="text" placeholder="Landmark" className="input-box" />

        <div className="address-type-btns">
          <button>🏠 Home</button>
          <button>💼 Work</button>
          <button>📍 Other</button>
        </div>

        <button className="save-btn">SAVE ADDRESS & PROCEED</button>
      </div>
    </div>
  );
};

export default AddAddressModal;
