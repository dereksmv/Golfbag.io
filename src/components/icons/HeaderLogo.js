import React from "react";
import styled from "styled-components";

const HeaderLogo = () => {
  const StyledHeaderLogoSvg = styled.svg`
    width: 48px;
    height: 48px;
    margin-right: 8px;
  `;
  return (
    <>
      <StyledHeaderLogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.79 96.79"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="95.79" height="95.79" rx="29.42" fill="#fff"/><path d="M95.58 67.47a24.89 24.89 0 01-.58 7.68 25.5 25.5 0 01-3 7.29l-.52.87-.59.81c-.41.53-.78 1.1-1.22 1.61a30.19 30.19 0 01-2.83 2.94 29.76 29.76 0 01-3.23 2.56c-.58.37-1.18.72-1.78 1.08-.29.18-.59.37-.89.54l-.94.45a30 30 0 01-8 2.7 31.6 31.6 0 01-4.22.53c-1.45.11-2.76.12-4.09.15q-8 .12-15.93.11c-5.32 0-10.63 0-15.94-.12-1.33 0-2.63 0-4.09-.15a31.25 31.25 0 01-4.14-.52 30.24 30.24 0 01-8-2.7l-.94-.45c-.3-.17-.6-.36-.9-.54-.59-.36-1.19-.7-1.77-1.08a28.83 28.83 0 01-3.23-2.56A30.19 30.19 0 016 85.72c-.44-.51-.81-1.07-1.22-1.61l-.59-.81-.52-.86a25.5 25.5 0 01-3-7.29 24.6 24.6 0 01-.56-7.68l.29 1.89c0 .31.08.63.14.94l.24.91c.16.61.28 1.23.47 1.83l.64 1.76a25.45 25.45 0 003.67 6.46l.55.75.62.69c.42.46.81.94 1.26 1.37a26.07 26.07 0 002.82 2.42 33.74 33.74 0 003.07 2.08c.54.3 1.1.57 1.65.86.27.14.54.29.82.42l.87.35a31.13 31.13 0 007.13 2 28.7 28.7 0 003.7.31c1.2.06 2.55 0 3.88 0 5.31-.09 10.62-.11 15.94-.13s10.62 0 15.93.12c1.33 0 2.69.07 3.88 0a28.55 28.55 0 003.7-.31 31.13 31.13 0 007.13-2l.86-.35c.28-.13.55-.28.83-.42.55-.29 1.11-.56 1.65-.86a35.19 35.19 0 003.07-2.08 28.14 28.14 0 002.82-2.42c.45-.43.83-.91 1.25-1.36l.62-.7.56-.74a25.63 25.63 0 003.63-6.46l.64-1.8c.19-.59.31-1.21.47-1.82l.24-.91c.06-.31.09-.63.14-.94z" fill="#c1e7d7"/><path d="M73.49 35.79V75A49.42 49.42 0 0153 79.43c-20.79 0-34.65-13.36-34.65-31.2 0-18.17 14.45-31.87 34.31-31.87A43.18 43.18 0 0170 20c-.15.32-4.47 9.73-5.35 11.84l-20.48 3.3s-4.69 0-7.27 19.55 23.26 10.18 22.72 4.36-9.91-19.45-9.91-19.45z" fill="#00e55c"/></g></g></StyledHeaderLogoSvg>
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="32"><text transform="translate(0 25)" fill="#585858" font-size="24" font-family="AzoSans-Black,Azo Sans" font-weight="800"><tspan x="0" y="0">golfbag</tspan></text></svg>
    </>
);
}; export default HeaderLogo;