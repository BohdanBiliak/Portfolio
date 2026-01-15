interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Subtitle({ children, className = "", id }: SubtitleProps) {
  return (
    <p id={id} className={`mb-8 text-xl text-gray-600 dark:text-gray-400 md:text-2xl ${className}`}>
      {children}
    </p>
  );
}
