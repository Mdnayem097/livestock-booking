import React from "react";

const bookingPage = () => {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Page details</legend>

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Phon Number</label>
        <input type="number" className="input" placeholder="Phon Number" />

        <label className="label">Address</label>
        <input type="text" className="input" placeholder="Address" />
      </fieldset>
    </div>
  );
};

export default bookingPage;
