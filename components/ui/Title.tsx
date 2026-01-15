interface TitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Title({ children, className = "", id }: TitleProps) {
  return (
    <h1
      id={id}
      className={`mb-4 text-5xl font-bold text-black dark:text-white md:text-6xl lg:text-7xl ${className}`}
    >
      {children}
    </h1>
  );
}
