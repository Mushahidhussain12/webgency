import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  btnClasses?: string;
  classes?: string;
}

const Index: FC<Props> = ({ title, classes, btnClasses, ...props }) => {
  return (
    <button
      className={`relative inline-flex overflow-hidden rounded-full p-1 text-sm uppercase focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-stroke-light dark:focus:ring-offset-stroke-dark transition-colors duration-300 ${btnClasses}`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#CBD5E1_50%,#000000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#CCC2DC_0%,#4A4458_50%,#CCC2DC_100%)]" />
      <span
        className={`inline-flex h-full min-h-10 cursor-pointer items-center justify-center rounded-full font-medium text-white backdrop-blur-3xl transition duration-300 ${classes}`}
      >
        {title}
      </span>
    </button>
  );
};
export default Index;
