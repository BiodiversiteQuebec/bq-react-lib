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
        //console.log('***** mouseenter ****');
        setCollapse((oldValue: boolean) => false);
      };

      const click = (event: any) => {
        //console.log('***** click ****');
        setCollapse((oldValue: boolean) => !oldValue);
      };
      if (bqheader) {
        bqheader.addEventListener('mouseleave', mouseleave);
        bqheader.addEventListener('mouseenter', mouseenter);
        //bqheader.addEventListener('click', click);
      }

      return () => {
        if (bqheader) {
          bqheader.removeEventListener('mouseleave', mouseleave);
          bqheader.removeEventListener('mouseenter', mouseenter);
          //bqheader.removeEventListener('click', click);
        }
      };
    }
    return () => {};
  }, [user]);
  if (!user) return null;
  const { name, lastname, role } = user as any;

  return (
    <div
      className="p-2 bq-user relative bar-menu-container w-fit flex flex-col overflow-visible"
      tabIndex={0}
    >
      <FontAwesomeIcon
        icon={faUser}
        className="fa-regular fa-1x hamberguer-button "
        style={{ opacity: 0.7 }}
      />
      {!collapse && (
        <div
          style={{
            background: '#353535',
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '40px',
            right: '-10px',
            width: 'fit-content',
            zIndex: 999999,
          }}
          className="flex flex-col rounded-md p-2 shadow-md hover:cursor-pointer"
        >
          <span className="font-bold">
            {name} {lastname}
          </span>
          <span className="text-sm" style={{ fontStyle: 'italic' }}>
            {role}
          </span>
        </div>
      )}
    </div>
  );
};
