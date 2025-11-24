import React from "react";

import Link from "./Link";

const StemonInfoLink = () => {
  const getUrl = () => {
    return `https://www.stemon.co.kr/en/`;
  };

  return <Link url={getUrl()} title={"STEMON Co.,Ltd."} />;
};

export default StemonInfoLink;
