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

  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    if (user) {
      let bqheader: any = document.querySelector('.bq-user');
      const mouseleave = (event: any) => {
        console.log('***** mouseleave ****');
        setCollapse((oldValue: boolean) => true);
      };
      const mouseenter = (event: any) => {
        console.log('***** mouseenter ****');
        setCollapse((oldValue: boolean) => false);
      };

      const click = (event: any) => {
        console.log('***** click ****');
        setCollapse((oldValue: boolean) => !oldValue);
      };
      if (bqheader) {
        bqheader.addEventListener('mouseleave', mouseleave);
        bqheader.addEventListener('mouseenter', mouseenter);
        bqheader.addEventListener('click', click);
      }

      return () => {
        if (bqheader) {
          bqheader.removeEventListener('mouseleave', mouseleave);
          bqheader.removeEventListener('mouseenter', mouseenter);
          bqheader.removeEventListener('click', click);
        }
      };
    }
    return () => {};
  }, [user]);
  if (!user) return null;
  const { name, lastname, role } = user as any;

  return (
    <div
      className="border p-2 bq-user relative bar-menu-container w-fit flex flex-col overflow-visible"
      tabIndex={0}
      onClick={() => {
        console.log(' **** on Click *****');
        setCollapse((oldValue: boolean) => !oldValue);
      }}
    >
      <FontAwesomeIcon
        icon={faUser}
        className="fa-regular fa-1x hamberguer-button "
        style={{ opacity: 0.7 }}
      />
      {!collapse && (
        <div
          style={{ background: '#353535' }}
          className="absolute w-fit z-[999999] top-[20px] right-[-10px] bg-[#353535] flex flex-col rounded-md p-2 shadow-md  whitespace-nowrap"
        >
          <span className="font-bold">
            {name} {lastname}
          </span>
          <span className="text-sm italic">{role}</span>
        </div>
      )}
    </div>
  );
};
