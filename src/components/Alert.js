import React from 'react';

function Alert(props) {
  const capitalizeType = (type) => {
    if (type === 'danger') {
      return 'Error';
    }
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    props.message && (
      <div className={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeType(props.message.type)}</strong> {props.message.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    )
  );
}

export default Alert;
