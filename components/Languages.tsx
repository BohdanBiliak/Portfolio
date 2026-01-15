interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export default function Languages() {
  const languages: Language[] = [
    {
      name: "Ukrainian",
      level: "Native",
      proficiency: 100,
    },
    {
      name: "Polish",
      level: "C1 - Advanced",
      proficiency: 90,
    },
    {
      name: "English",
      level: "B2 - Upper Intermediate",
      proficiency: 75,
    },
  ];

  return (
    <section
      id="languages"
      className="border-b-2 border-blue-500 bg-white px-8 py-16 dark:border-blue-400 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-black dark:text-white">
          Languages
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
          Multilingual communication skills for diverse international environments
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400"
            >
              <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">{lang.name}</h3>
              <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
