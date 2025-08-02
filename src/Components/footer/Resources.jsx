import React from 'react';
import { MdOutlinePrivacyTip } from "react-icons/md";

const Resources = () => {
  return (
    <div className="w-full max-w-md px-4 sm:px-6 lg:px-0 flex flex-col justify-center gap-4 pt-10">
      <div className="poppins-bold text--black text-xl sm:text-2xl uppercase">
        Resources
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-gray-700 text-sm sm:text-base cursor-pointer hover:text-black transition">
          <MdOutlinePrivacyTip className="text-xl" />
          <span>Safety, Privacy & Terms</span>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
