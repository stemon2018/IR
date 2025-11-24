//import React from "react";
//import Link from "./Link";

// https://www.stemon.co.kr/en/#section3
/*
const StemonEntrLink = () => {
  return (
    window.location.href = 'https://www.stemon.co.kr/en/sub/rnd/entr.asp'    
  )
};

export default StemonEntrLink;
*/


import { useEffect } from 'react';

const StemonEntrLink = () => {
  useEffect(() => {
    // 특정 URL로 이동
    // window.location.href = 'https://www.example.com';
    window.open("https://www.stemon.co.kr/en/sub/rnd/entr.asp")
    // 또는 뒤로가기 기록을 남기지 않고 이동
    // window.location.replace('https://www.example.com');
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때 한 번만 실행됨을 의미

  return (
    <div>
    </div>
  );
};

export default StemonEntrLink;