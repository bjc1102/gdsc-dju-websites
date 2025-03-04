import React from 'react';

import { useTheme } from 'styled-components';

interface CheckIconProps {
  type: 'none' | 'success' | string;
}

const CheckIcon = ({ type }: CheckIconProps) => {
  const theme = useTheme();
  const selectColor = () => {
    switch (type) {
      case 'success':
        return theme.colors.green500;
      case 'error':
        return theme.colors.red600;
      default:
        return theme.colors.grey400;
    }
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99992 0.833008C4.93992 0.833008 0.833252 4.93967 0.833252 9.99967C0.833252 15.0597 4.93992 19.1663 9.99992 19.1663C15.0599 19.1663 19.1666 15.0597 19.1666 9.99967C19.1666 4.93967 15.0599 0.833008 9.99992 0.833008ZM9.99992 17.333C5.95742 17.333 2.66659 14.0422 2.66659 9.99967C2.66659 5.95717 5.95742 2.66634 9.99992 2.66634C14.0424 2.66634 17.3333 5.95717 17.3333 9.99967C17.3333 14.0422 14.0424 17.333 9.99992 17.333ZM14.2074 5.94801L8.16659 11.9888L5.79242 9.62384L4.49992 10.9163L8.16659 14.583L15.4999 7.24967L14.2074 5.94801Z"
        fill={selectColor()}
      />
    </svg>
  );
};

export default CheckIcon;
