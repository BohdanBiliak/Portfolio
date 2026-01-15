export default function Footer() {
  return (
    <footer className="border-t-2 border-blue-500 bg-white px-6 py-8 dark:border-blue-400 dark:bg-black">
      <div className="mx-auto max-w-6xl text-center text-black dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bohdan Biliak. All rights reserved.</p>
      </div>
    </footer>
  );
}
