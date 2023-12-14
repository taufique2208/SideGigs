import React from 'react';
import './CardBox.css';
import { NavLink } from 'react-router-dom';

function CardBox({ title, description, minprice,maxprice, id }) {
  return (
    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-blue-100 w-80 ">
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="items-center w-full justify-center grid grid-cols-1 text-left">
          <div>
            <h2 className="text-black font-bold text-lg lg:text-3xl">{title}</h2>
            <p className="text-black tracking-tight xl:text-1xl mt-5">{description}</p>
          </div>
          <div className="mt-2">
            <p>
              <span className="text-black tracking-tight xl:text-2xl">{minprice}-{maxprice} Rs</span>
              <span className="text-black font-medium text-base"></span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <NavLink
            className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
            to={`/projects/${id}`}
          >
            Apply
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CardBox;
