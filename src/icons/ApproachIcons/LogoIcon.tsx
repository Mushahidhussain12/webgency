import { SVGProps, FC } from "react";

export const LogoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <div className="flex items-center space-x-2 text-black dark:text-gray-300">

    <span className="font-semibold text-2xl tracking-wide text-black dark:text-gray-300 transition-colors duration-300">
      Coderizz
    </span>
  </div>
);
