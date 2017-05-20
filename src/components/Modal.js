import React from "react";
import PropTypes from "prop-types";

const Modal = ({ children }) => (
  <div className="modal-wrapper">
    <div className="modal-content">
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};

export default Modal;
