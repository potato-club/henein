import React from "react";
import styled from "styled-components";
import { usePostRecommend } from "../../../hooks/detailPageHooks/usePostRecommend";
import { useLocalStorage } from "../../../hooks/storage/useLocalStorage";

interface ILikeIcon {
  id: string;
}

const LikeIcon = ({ id }: ILikeIcon) => {
  const { getLocalStorage } = useLocalStorage();
  const accessToken = getLocalStorage("access");
  const { recommend } = usePostRecommend({ id, accessToken });
  
  return (
    <>
      <Svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={recommend}
      >
        <Rect x="0.5" y="0.5" width="39" height="39" rx="19.5" />
        <mask
          id="mask0_132_572"
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="24"
          height="24"
        >
          <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_132_572)">
          <path
            d="M20 28.3213L19.6664 28.0224C18.0628 26.5859 16.7394 25.3504 15.6979 24.317L20 28.3213ZM20 28.3213L20.3336 28.0224M20 28.3213L20.3336 28.0224M20.3336 28.0224C21.9372 26.5859 23.2606 25.3504 24.3021 24.317L20.3336 28.0224ZM26.7922 21.5982L26.792 21.5983C26.1751 22.3777 25.3433 23.2845 24.3022 24.3169L26.7922 21.5982ZM26.7922 21.5982C27.4085 20.8189 27.857 20.1003 28.1151 19.4455L26.7922 21.5982ZM22.0487 14.2453L22.049 14.2451C22.7957 13.7507 23.6164 13.5 24.5 13.5C25.6237 13.5 26.587 13.8799 27.3536 14.6464C28.1201 15.413 28.5 16.3763 28.5 17.5C28.5 18.1515 28.3694 18.8009 28.1152 19.4453L22.0487 14.2453ZM22.0487 14.2453C21.4081 14.67 20.9257 15.2051 20.6182 15.85H19.3818C19.0743 15.2051 18.5919 14.67 17.9513 14.2453L17.951 14.2451M22.0487 14.2453L17.951 14.2451M17.951 14.2451C17.2043 13.7507 16.3836 13.5 15.5 13.5C14.3763 13.5 13.413 13.8799 12.6464 14.6464C11.8799 15.413 11.5 16.3763 11.5 17.5C11.5 18.1515 11.6306 18.8009 11.8848 19.4453L17.951 14.2451ZM13.208 21.5983L13.2078 21.5982C12.5915 20.8189 12.143 20.1003 11.8849 19.4455L13.208 21.5983ZM13.208 21.5983C13.8249 22.3777 14.6567 23.2845 15.6978 24.3169L13.208 21.5983ZM29.5 17.5C29.5 18.2092 29.3809 18.903 29.1415 19.5837C28.9047 20.2551 28.4798 21.0145 27.8487 21.8638L27.8486 21.8639C27.2178 22.7133 26.3608 23.6821 25.2714 24.7714C24.1797 25.8632 22.7951 27.1651 21.1157 28.6782C21.1156 28.6783 21.1155 28.6784 21.1153 28.6785L20 29.6785L18.8847 28.6785C18.8845 28.6784 18.8844 28.6783 18.8843 28.6782C17.2049 27.1651 15.8203 25.8632 14.7286 24.7714C13.6392 23.6821 12.7822 22.7133 12.1514 21.8639L12.1513 21.8638C11.5202 21.0146 11.0958 20.2552 10.8597 19.5841L10.8595 19.5837C10.6194 18.903 10.5 18.2092 10.5 17.5C10.5 16.0578 10.9779 14.8792 11.9286 13.9286C12.8792 12.9779 14.0578 12.5 15.5 12.5C16.2936 12.5 17.0462 12.6673 17.763 13.0028C18.4807 13.3388 19.0982 13.8111 19.619 14.4238L20 14.872L20.381 14.4238C20.9018 13.8111 21.5193 13.3388 22.237 13.0028C22.9538 12.6673 23.7064 12.5 24.5 12.5C25.9422 12.5 27.1208 12.9779 28.0714 13.9286C29.0221 14.8792 29.5 16.0578 29.5 17.5Z"
            stroke="#FF8038"
          />
        </g>
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="19.5"
          stroke="#E6E6E6"
        />
      </Svg>
    </>
  );
};

export default LikeIcon;

const Rect = styled.rect`
  &:hover {
    fill: red;
  }
  fill: ${(prop) => prop.theme.card};
`;

const Svg = styled.svg`
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 4px;
`;
