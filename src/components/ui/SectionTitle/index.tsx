import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  title: string;
  classes?: string;
}

const Index: FC<Props> = ({ title, classes, ...props }) => {
  return (
    <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-center text-text-1-light dark:text-text-1-dark transition-colors duration-300 ${classes}`} {...props}>
      {title}
    </h3>
  );
};
export default Index;
