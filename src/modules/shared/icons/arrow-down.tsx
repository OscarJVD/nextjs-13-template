import { Props } from '../IconsProps';
import React from 'react';

export function ArrowDownSvg(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width={props.width}
      height={props.height}
    >
      <title>{props.title}</title>
      <rect width="24" height="24" fill="transparent"></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2975 5.74402C23.4386 5.55668 23.7196 5.55668 23.8595 5.74402C24.0468 5.88515 24.0468 6.1187 23.8595 6.30605L12.2868 18.3009C12.1931 18.3471 12.0994 18.3946 12.0058 18.3946C11.9121 18.3946 11.7722 18.3471 11.7248 18.3009L0.105848 6.30605C-0.0352826 6.1187 -0.0352826 5.88515 0.105848 5.74402C0.293189 5.55668 0.526742 5.55668 0.714083 5.74402L12.0058 17.4566L23.2975 5.74402Z"
        fill={props.color}
      ></path>
    </svg>
  );
}
