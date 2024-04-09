import React, { useState, useContext, useEffect } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BQUser = (props: any) => {
  const {
    switchLocale = (text: string) => text,
    items,
    defaultLocale,
    forceCollapse = true,
    notifyChange = () => 0,
    user,
  } = props;

  const toggleCollapse = () => {
    notifyChange();
  };
  if (!user) return null;
  const { name, lastname, role } = user as any;

  return (
    <div
      className="group relative bar-menu-container w-fit z-[99999] flex flex-col overflow-visible has-tooltip"
      tabIndex={0}
    >
      <FontAwesomeIcon
        icon={faUser}
        className="fa-regular fa-1x hamberguer-button "
        style={{ opacity: 0.7 }}
        onClick={toggleCollapse}
      />
      <div className="absolute w-fit z-[999999] top-[20px] right-[-10px] bg-[#353535] hidden group-hover:flex group-hover:flex-col rounded-md p-2 shadow-md  whitespace-nowrap">
        <span className="font-bold">
          {name} {lastname}
        </span>
        <span className="text-sm italic">{role}</span>
      </div>
    </div>
  );
};
