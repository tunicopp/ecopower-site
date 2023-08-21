import { twMerge } from "tailwind-merge";

export interface TitleComponent {
  children: React.ReactNode;
  className?: string;
}

const TitleComponent: React.FC<TitleComponent> = ({ children, className }) => {
  return (
    <h2
      className={twMerge(
        "align-middle text-4xl lg:text-5xl font-semibold lg:leading-[56px] leading-none z-10",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default TitleComponent;
