import { FC, HTMLAttributes } from "react";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const LinkedinLogo: FC<Props> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8Z"
        className="fill-muted dark:fill-white"
        {...props}
      />
      <path
        d="M62 62H51.316V43.802c0-4.99-1.896-7.777-5.845-7.777-4.296 0-6.54 2.901-6.54 7.777V62H28.632V27.333H38.93v4.67s3.096-5.729 10.453-5.729c7.353 0 12.617 4.49 12.617 13.777V62ZM16.35 22.794c-3.508 0-6.35-2.864-6.35-6.397C10 12.864 12.842 10 16.35 10c3.507 0 6.347 2.864 6.347 6.397 0 3.533-2.84 6.397-6.348 6.397ZM11.032 62h10.736V27.333H11.033V62Z"
        className="fill-white dark:fill-muted"
      />
    </g>
  </svg>
);
