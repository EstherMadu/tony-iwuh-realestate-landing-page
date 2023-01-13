import React from "react";

function Experience() {
  return (
    <main>
      <div>
        <img src="/images/house.jpg" alt="house" className="house" />
      </div>
      <div className="pl-20 ">
        <h2 className="font-semibold text-gray-500 text-5xl mt-14 ">
          Experience
        </h2>
        <p className=" pt-8 w-9/12 text-xl">
          We value of all classes of interests in real estate including
          residential, commercial, institutional and industrial, personal and
          corporate properties. The need for regular valuation of all properties
          cannot be over-emphasized. The purpose includes:
        </p>
        <ul class="list-inside list-disc  lg:flex justify-between w-10/12 pt-8 text-xl marker:text-blue-900 leading-10 font-light">
          <span>
            <li>Going Concern</li>
            <li>Sales/Purchase</li>
            <li>Annual Valuation and Advisory Services</li>
            <li>Financial Reporting</li>
          </span>
          <span>
            <li>Mortgage</li>
            <li>Business Planning</li>
            <li>Merger and Acquisition </li>
            <li>Insurance/Risk Management</li>
          </span>
          <span>
            <li>Tax Management</li>
            <li>Dispute Resolution</li>
            <li>Pre Funding Due Diligence</li>
            <li>Asset Management</li>
            <li>Financial Opinions</li>
          </span>
        </ul>
      </div>
      <div className="pl-20 bg-blue-900 text-white rounded-xl mx-20 p-10 mt-20">
        <h2 className="font-medium  text-3xl mt-14 ">
          Our team of experts consists of
        </h2>
        <ul className="list-disc list-inside leading-10 mt-10 text-lg lg:pl-8">
          <li>Qualified and Registered Valuers</li>
          <li>
            Chartered Valuation Surveyors and Certified Practicing Valuers
          </li>
          <li>Qualified Engineers</li>
        </ul>
      </div>
    </main>
  );
}

export default Experience;
