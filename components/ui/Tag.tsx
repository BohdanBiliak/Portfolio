interface TagProps {
  children: React.ReactNode;
  highlight?: boolean;
}

export default function Tag({ children, highlight = false }: TagProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-sm font-medium transition-all ${
        highlight
          ? "border-yellow-500 bg-yellow-200 text-black dark:border-yellow-400 dark:bg-yellow-500 dark:text-black"
          : "border-blue-500 bg-white text-black dark:border-blue-400 dark:bg-gray-800 dark:text-white"
      }`}
    >
      {children}
    </span>
  );
}
