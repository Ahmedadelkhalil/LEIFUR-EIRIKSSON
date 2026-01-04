import { useState } from "react";
import "./alert.css";

type M = {
  msg: string;
  status: boolean;
};

const Alert = ({ msg, status }: M) => {
  const [open, setOpen] = useState(status);
  return (
    <div
      className={`alert-container fixed top-5 right-5 z-50 w-[300px] sm:w-[350px] border-2 border-overlay shadow-xl ${
        open === false ? "hideAlert" : ""
      } transition duration-500 ease-in`}
    >
      <div
        className="alert"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="alert-header bg-boxes text-white p-1">
          <div className="flex justify-between items-center mx-3 my-1">
            <div className="flex flex-col">
              <span className="mr-3 font-bold">Hôtel Leifur Eiríksson</span>
              <small className="font-semibold capitalize">just now</small>
            </div>
            <button
              type="button"
              className="border border-white px-2 text-sm"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
        </div>
        <div className="alert-body bg-white text-boxes text-sm font-semibold capitalize py-2 px-3">
          <p className="mb-0">{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
