import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

function ContactUs() {
  return (
    <div className="w-full max-w-md px-4 sm:px-6 lg:px-0 flex flex-col justify-center gap-4">
      <div className="poppins-bold text--black text-xl sm:text-2xl uppercase">
        Contact Us
      </div>
      <ul className="space-y-3">
        <li className="flex items-start sm:items-center gap-3 text-gray-700 text-sm sm:text-base">
          <CiLocationOn className="text-xl" />
          <span>11 North Avenue, Orlando, FL 32801</span>
        </li>
        <li className="flex items-start sm:items-center gap-3 text-gray-700 text-sm sm:text-base">
          <IoCallOutline className="text-xl" />
          <span>352-306-4415</span>
        </li>
        <li className="flex items-start sm:items-center gap-3 text-gray-700 text-sm sm:text-base break-all">
          <CgMail className="text-xl" />
          <span>support@amazon.com</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
