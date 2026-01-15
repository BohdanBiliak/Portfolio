interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`mb-12 text-center text-4xl font-bold tracking-tight text-black dark:text-white ${className}`}
    >
      {children}
    </h2>
  );
}
