import React from "react";
import { alertUser } from "src/types";

interface alertProps {
  alert: alertUser | null;
}

const Alert: React.FC<alertProps> = ({ alert }) => {
  return (
    <>
      {alert && (
        <div className={`alert alert-${alert?.type}`}>
          <i className="fas fa-info-circle" /> {alert?.msg}
        </div>
      )}
    </>
  );
};

export default Alert;
