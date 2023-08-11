import { twMerge } from "tailwind-merge";

export interface TitleComponent {
  children: React.ReactNode;
  className?: string;
}

const TitleComponent: React.FC<TitleComponent> = ({ children, className }) => {
  return (
    <h2
      className={twMerge(
        "align-middle text-4xl md:text-[48px] font-semibold leading-[56px] z-10",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default TitleComponent;
