interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className = "", id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`border-b-2 border-blue-500 px-6 py-20 dark:border-blue-400 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
