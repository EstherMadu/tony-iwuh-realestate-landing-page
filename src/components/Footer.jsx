import React from "react";

function Footer() {
  return (
    <div className=" flex bg-blue-800 p-10 rounded">
      <div>
        <img
          src="/images/tonyiwuh-logo.png"
          alt="logo"
          class="h-32 w-40 m-auto lg:ml-10 grayscale-0 "
        />
        <h2 className="text-white text-2xl font-light text-center lg:text-left">
          TONY IWUH AND ASSOCIATES
        </h2>
        <span className="text-white leading-10 font-light text-sm text-center lg:text-left">
          <p className="mt-4 ml-4">- Certified Practicing Valuer</p>
          <p className="mt-4 ml-4">
            - Certified Practicing Valuer (Plant and Machinery)
          </p>
          <p className="mt-4 ml-4">
            - Liability limited by a scheme approved under Professional
            Standards Legislation.
          </p>
          <p className="mt-12">© 2023 Jason Nwakaeze</p>
        </span>
      </div>
      <div className="ml-auto pr-40 pt-28 text-white">
        <h2 className="font-bold text-5xl">Services</h2>
        <div class="border-b-2 border-black mt-2"></div>
        <p className="leading-10 font-light mt-4">
          - Estate Surveyors and Valuers.
        </p>
        <p className="leading-10 font-semibold">
          - Estate Agency, Facilities Management
        </p>
        <p className="leading-10 font-bold">
          - Valuation of Assets for various purpose
        </p>
      </div>
    </div>
  );
}

export default Footer;
