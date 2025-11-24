//import React from "react";
//import Link from "./Link";

/*
const StemonDDDSLink = () => {
  const getUrl = () => {
    return `https://www.stemon.co.kr/en/`;
  };

  return <Link url={getUrl()} title={"STEMON DDDS"} />;
};
*/

/*
const StemonDDDSLink = () => {
  return (
          <a
            href="https://gist.github.com/FredrikOseberg/7fad0e5c1458559c544de6f0dd41e602#file-widget"
          >
            TEST
          </a>
  )
};
*/

import { useEffect } from 'react';

const StemonDDDSLink = () => {
  useEffect(() => {
    window.open("https://www.stemon.co.kr/en/sub/rnd/programing.asp")
  }, []);

  return (
    <div>
    </div>
  );
};

export default StemonDDDSLink;
