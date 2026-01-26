export interface ExperienceData {
  role: {
    en: string;
    pl: string;
    uk: string;
  };
  company: string;
  period: {
    en: string;
    pl: string;
    uk: string;
  };
  summary: {
    en: string;
    pl: string;
    uk: string;
  };
  responsibilities: {
    en: string[];
    pl: string[];
    uk: string[];
  };
  techStack: string;
}

export const experiencesData: ExperienceData[] = [
  {
    role: {
      en: "Backend Developer",
      pl: "Backend Developer",
      uk: "Backend Developer",
    },
    company: "Trucks for U",
    period: {
      en: "Jun 2025 – Jan 2026 · 8 months",
      pl: "Cze 2025 – Sty 2026 · 8 miesięcy",
      uk: "Черв 2025 – Січ 2026 · 8 місяців",
    },
    summary: {
      en: "Humanitarian & military logistics coordination platform designed to coordinate volunteers, vehicle drivers, and military logistics by consolidating vehicle data, driver availability, and real-time IoT telemetry.",
      pl: "Humanitarna i wojskowa platforma koordynacji logistycznej zaprojektowana do koordynacji wolontariuszy, kierowców pojazdów i logistyki wojskowej poprzez konsolidację danych pojazdów, dostępności kierowców i telemetrii IoT w czasie rzeczywistym.",
      uk: "Гуманітарна та військова платформа координації логістики, призначена для координації волонтерів, водіїв транспортних засобів та військової логістики шляхом консолідації даних транспортних засобів, доступності водіїв та телеметрії IoT в реальному часі.",
    },
    responsibilities: {
      en: [
        "Developed backend domain logic for vehicle coordination, driver assignment, and logistics workflows, supporting dozens of concurrent operations",
        "Designed and maintained REST API contracts for fleet management, telemetry ingestion, assignments, and access control, enabling consistent data exchange across services",
        "Implemented a real-time IoT telemetry pipeline, processing continuous vehicle updates every few seconds and converting them into operational logistics signals",
        "Introduced role-based access control (RBAC) using JWT and Passport.js, separating permissions for volunteers, drivers, coordinators, and military operators",
        "Applied Redis caching and database query optimization, reducing p95 response times by ~25–35% on high-traffic endpoints",
        "Expanded automated test coverage for business-critical flows, significantly reducing production regressions during active operations",
        "Supported production stability during live missions by deploying hotfixes and regression-tested changes without service interruption",
      ],
      pl: [
        "Opracowano logikę domenową backendu dla koordynacji pojazdów, przypisywania kierowców i przepływów logistycznych, obsługując dziesiątki równoczesnych operacji",
        "Zaprojektowano i utrzymywano kontrakty REST API dla zarządzania flotą, pozyskiwania telemetrii, przypisań i kontroli dostępu, umożliwiając spójną wymianę danych między usługami",
        "Wdrożono pipeline telemetrii IoT w czasie rzeczywistym, przetwarzając ciągłe aktualizacje pojazdów co kilka sekund i konwertując je na operacyjne sygnały logistyczne",
        "Wprowadzono kontrolę dostępu opartą na rolach (RBAC) przy użyciu JWT i Passport.js, rozdzielając uprawnienia dla wolontariuszy, kierowców, koordynatorów i operatorów wojskowych",
        "Zastosowano buforowanie Redis i optymalizację zapytań do bazy danych, redukując czasy odpowiedzi p95 o ~25–35% na punktach końcowych o dużym ruchu",
        "Rozszerzono pokrycie testów automatycznych dla przepływów krytycznych dla biznesu, znacznie zmniejszając regresje produkcyjne podczas aktywnych operacji",
        "Wspierano stabilność produkcji podczas aktywnych misji, wdrażając poprawki i zmiany przetestowane regresyjnie bez przerw w usłudze",
      ],
      uk: [
        "Розроблено бекенд-логіку для координації транспортних засобів, призначення водіїв та логістичних робочих процесів, підтримуючи десятки одночасних операцій",
        "Спроектовано та підтримувано контракти REST API для управління автопарком, отримання телеметрії, призначень та контролю доступу, забезпечуючи послідовний обмін даними між сервісами",
        "Впроваджено пайплайн телеметрії IoT в реальному часі, обробляючи постійні оновлення транспортних засобів кожні кілька секунд та перетворюючи їх на операційні логістичні сигнали",
        "Впроваджено контроль доступу на основі ролей (RBAC) за допомогою JWT та Passport.js, розділяючи дозволи для волонтерів, водіїв, координаторів та військових операторів",
        "Застосовано кешування Redis та оптимізацію запитів до бази даних, зменшуючи час відповіді p95 на ~25–35% на ендпоінтах з високим трафіком",
        "Розширено покриття автоматизованих тестів для бізнес-критичних потоків, значно зменшуючи регресії в продакшені під час активних операцій",
        "Підтримано стабільність продакшену під час живих місій шляхом розгортання виправлень та регресійно перевірених змін без переривання сервісу",
      ],
    },
    techStack:
      "Node.js, TypeScript, JavaScript (ES6+), NestJS, REST APIs, PostgreSQL, Prisma, Redis, JWT, Passport.js, Docker, CI/CD, Jest, Supertest, Git",
  },
  {
    role: {
      en: "Fullstack Developer",
      pl: "Fullstack Developer",
      uk: "Fullstack Developer",
    },
    company: "AIESEC Lublin",
    period: {
      en: "Oct 2023 – Nov 2024 · 1 year 2 months",
      pl: "Paź 2023 – Lis 2024 · 1 rok 2 miesiące",
      uk: "Жовт 2023 – Лист 2024 · 1 рік 2 місяці",
    },
    summary: {
      en: "Recruitment & CRM automation platform focused on streamlining recruitment, CRM, and reporting workflows through messaging platforms and API integrations.",
      pl: "Platforma automatyzacji rekrutacji i CRM skoncentrowana na usprawnieniu przepływów rekrutacji, CRM i raportowania poprzez platformy komunikacyjne i integracje API.",
      uk: "Платформа автоматизації рекрутингу та CRM, зосереджена на оптимізації робочих процесів рекрутингу, CRM та звітності через месенджери та інтеграції API.",
    },
    responsibilities: {
      en: [
        "Helped ship an internal automation platform adopted by 5+ local AIESEC teams, replacing manual recruitment coordination via spreadsheets and chats",
        "Automated lead intake, status transitions, reminders, and reporting flows, reducing manual coordinator effort by ~30–40% during active recruitment cycles",
        "Built and maintained Node.js backend services processing hundreds of candidate interactions per month across multiple recruitment campaigns",
        "Implemented multi-channel messaging bots (Telegram, WhatsApp, Messenger), increasing candidate reply rate and reducing average response latency from hours to minutes for engaged candidates",
        "Designed event-driven webhook workflows to process external messaging events asynchronously, improving delivery reliability and preventing request blocking",
        "Refactored legacy logic into modular services, reducing time to implement new recruitment flows from days to hours",
        "Integrated Google Sheets and external APIs to generate near-real-time dashboards, eliminating manual report preparation for coordinators",
        "Delivered backend-driven landing pages and microsites used to collect structured candidate data during recruitment campaigns",
      ],
      pl: [
        "Pomógł wdrożyć wewnętrzną platformę automatyzacji przyjętą przez ponad 5 lokalnych zespołów AIESEC, zastępując ręczną koordynację rekrutacji za pomocą arkuszy kalkulacyjnych i czatów",
        "Zautomatyzował przyjmowanie leadów, przejścia statusów, przypomnienia i przepływy raportowania, redukując ręczny wysiłek koordynatorów o ~30–40% podczas aktywnych cykli rekrutacyjnych",
        "Zbudował i utrzymywał usługi backendowe Node.js przetwarzające setki interakcji z kandydatami miesięcznie w ramach wielu kampanii rekrutacyjnych",
        "Wdrożył boty do przesyłania wiadomości wielokanałowych (Telegram, WhatsApp, Messenger), zwiększając wskaźnik odpowiedzi kandydatów i redukując średni czas odpowiedzi z godzin do minut dla zaangażowanych kandydatów",
        "Zaprojektował przepływy pracy webhooków opartych na zdarzeniach do asynchronicznego przetwarzania zewnętrznych zdarzeń wiadomości, poprawiając niezawodność dostarczania i zapobiegając blokowaniu żądań",
        "Zrefaktoryzował starą logikę na modularne usługi, redukując czas wdrożenia nowych przepływów rekrutacyjnych z dni do godzin",
        "Zintegrował Google Sheets i zewnętrzne API w celu generowania pulpitów w czasie niemal rzeczywistym, eliminując ręczne przygotowywanie raportów dla koordynatorów",
        "Dostarczył strony docelowe i mikrostrony oparte na backendzie, używane do zbierania ustrukturyzowanych danych kandydatów podczas kampanii rekrutacyjnych",
      ],
      uk: [
        "Допоміг запустити внутрішню платформу автоматизації, прийняту понад 5 локальними командами AIESEC, замінивши ручну координацію рекрутингу через таблиці та чати",
        "Автоматизував прийом лідів, переходи статусів, нагадування та потоки звітності, зменшуючи ручні зусилля координаторів на ~30–40% під час активних циклів рекрутингу",
        "Побудував та підтримував бекенд-сервіси Node.js, що обробляють сотні взаємодій з кандидатами на місяць в рамках кількох рекрутингових кампаній",
        "Впровадив багатоканальних ботів для обміну повідомленнями (Telegram, WhatsApp, Messenger), збільшуючи показник відповідей кандидатів та зменшуючи середню затримку відповіді з годин до хвилин для залучених кандидатів",
        "Спроектував робочі процеси вебхуків на основі подій для асинхронної обробки зовнішніх повідомлень, покращуючи надійність доставки та запобігаючи блокуванню запитів",
        "Рефакторив застарілу логіку в модульні сервіси, зменшуючи час впровадження нових потоків рекрутингу з днів до годин",
        "Інтегрував Google Sheets та зовнішні API для генерації панелей майже в реальному часі, усунувши ручну підготовку звітів для координаторів",
        "Створив лендінги та мікросайти на основі бекенду, що використовуються для збору структурованих даних кандидатів під час рекрутингових кампаній",
      ],
    },
    techStack:
      "Node.js, Prisma, PostgreSQL, TypeScript, JavaScript (ES6+), REST APIs, Webhooks, Telegram Bot API, Google APIs, Docker, CI/CD, Git",
  },
  {
    role: {
      en: "Fullstack Developer",
      pl: "Fullstack Developer",
      uk: "Fullstack Developer",
    },
    company: "AMASALE",
    period: {
      en: "Mar 2023 – Aug 2023 · 6 months",
      pl: "Mar 2023 – Sie 2023 · 6 miesięcy",
      uk: "Бер 2023 – Серп 2023 · 6 місяців",
    },
    summary: {
      en: "E-commerce platform developed to migrate a traditional retail business to online sales. Implemented backend modules (authentication, products, orders, payments), frontend user flows, and provided post-launch maintenance and bug fixes.",
      pl: "Platforma e-commerce opracowana w celu migracji tradycyjnego biznesu detalicznego do sprzedaży online. Wdrożono moduły backendowe (uwierzytelnianie, produkty, zamówienia, płatności), przepływy użytkownika frontendowego i zapewniono konserwację i naprawy błędów po uruchomieniu.",
      uk: "Платформа електронної комерції, розроблена для міграції традиційного роздрібного бізнесу до онлайн-продажів. Впроваджено бекенд-модулі (аутентифікація, продукти, замовлення, платежі), фронтенд-потоки користувачів та забезпечено підтримку та виправлення помилок після запуску.",
    },
    responsibilities: {
      en: [
        "Delivered a production e-commerce platform that enabled a retail business to launch online sales within ~6 months",
        "Implemented backend services for auth, catalog, orders, and payments, supporting end-to-end checkout flows from product browsing to payment confirmation",
        "Designed REST APIs consumed by the frontend, maintaining stable contracts across multiple release iterations",
        "Integrated Stripe Checkout, handling payment intents, confirmations, retries, and failure cases",
        "Built responsive frontend flows (catalog, cart, checkout) used by real customers post-launch",
        "Resolved post-launch production issues and shipped incremental fixes, stabilizing the platform during early usage",
      ],
      pl: [
        "Dostarczono produkcyjną platformę e-commerce, która umożliwiła firmie detalicznej uruchomienie sprzedaży online w ciągu ~6 miesięcy",
        "Wdrożono usługi backendowe dla uwierzytelniania, katalogu, zamówień i płatności, obsługując kompleksowe przepływy zakupowe od przeglądania produktów do potwierdzenia płatności",
        "Zaprojektowano REST API wykorzystywane przez frontend, utrzymując stabilne kontrakty w wielu iteracjach wydań",
        "Zintegrowano Stripe Checkout, obsługując intencje płatności, potwierdzenia, ponowne próby i przypadki niepowodzeń",
        "Zbudowano responsywne przepływy frontendowe (katalog, koszyk, kasa) używane przez prawdziwych klientów po uruchomieniu",
        "Rozwiązano problemy produkcyjne po uruchomieniu i wysłano przyrostowe poprawki, stabilizując platformę podczas wczesnego użytkowania",
      ],
      uk: [
        "Надано продакшн платформу електронної комерції, яка дозволила роздрібному бізнесу запустити онлайн-продажі протягом ~6 місяців",
        "Впроваджено бекенд-сервіси для аутентифікації, каталогу, замовлень та платежів, підтримуючи наскрізні потоки оформлення замовлення від перегляду продуктів до підтвердження платежу",
        "Спроектовано REST API, які використовує фронтенд, підтримуючи стабільні контракти протягом кількох ітерацій випуску",
        "Інтегровано Stripe Checkout, обробляючи платіжні наміри, підтвердження, повторні спроби та випадки невдач",
        "Побудовано адаптивні фронтенд-потоки (каталог, кошик, оформлення замовлення), які використовуються реальними клієнтами після запуску",
        "Вирішено проблеми продакшену після запуску та випущено інкрементальні виправлення, стабілізуючи платформу під час раннього використання",
      ],
    },
    techStack:
      "Node.js, TypeScript, JavaScript (ES6+), NestJS, REST APIs, PostgreSQL, Stripe API, React, Tailwind CSS, JWT, Docker, CI/CD, Jest, Supertest, Git",
  },
];
