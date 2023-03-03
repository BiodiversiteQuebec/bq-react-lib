import React, { useEffect, useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ForestIcon from '@mui/icons-material/Forest';
import { CompassSvg } from '../BQSvgs';

export const BQButtonMenu = ({ activeBtn, notifyChange, mapBtnClick }: any) => {
  //const [activeBtn, setActiveBtn] = useState(0);
  const x = 1;

  return (
    <div className="relative flex gap-4 w-full justify-center items-center">
      <div
        onClick={() => {
          if (mapBtnClick) {
            mapBtnClick();
          }
        }}
        className={`flex justify-center items-center w-[50px] h-[50px] ${
          activeBtn === 3 ? 'bg-white' : 'bg-darkgreen'
        } rounded-full shadow-lg`}
      >
        <CompassSvg
          color={`${activeBtn === 3 ? '#2e483e' : 'white'}`}
          width="25px"
          height="24px"
        />
      </div>
      <div
        onClick={() => {
          if (notifyChange) {
            notifyChange(1);
          }
        }}
        className={`flex justify-center items-center w-[50px] h-[50px] ${
          activeBtn === 1 ? 'bg-white' : 'bg-darkgreen'
        } rounded-full shadow-lg`}
      >
        <ForestIcon
          sx={{
            color: `${activeBtn === 1 ? '#2e483e' : 'white'}`,
          }}
        />
      </div>
      <div
        className={`flex justify-center items-center w-[50px] h-[50px] ${
          activeBtn === 2 ? 'bg-white' : 'bg-darkgreen'
        } rounded-full shadow-lg`}
        onClick={() => {
          if (notifyChange) {
            notifyChange(2);
          }
        }}
      >
        <InfoIcon
          sx={{
            color: `${activeBtn === 2 ? '#2e483e' : 'white'}`,
          }}
        />
      </div>
    </div>
  );
};
