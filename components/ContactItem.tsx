interface ContactItemProps {
  label: string;
  value: string;
}

export default function ContactItem({ label, value }: ContactItemProps) {
  return (
    <p className="text-black dark:text-gray-300">
      <span className="font-bold text-black dark:text-white">{label}:</span> {value}
    </p>
  );
}
