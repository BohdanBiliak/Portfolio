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
    company: "Trucks for U (Direct Help)",
    period: {
      en: "Jun 2025 – Present · 8 months",
      pl: "Cze 2025 – Obecnie · 8 miesięcy",
      uk: "Черв 2025 – Нині · 8 місяців",
    },
    summary: {
      en: "Humanitarian & military logistics coordination platform consolidating vehicle data, driver availability, and real-time IoT telemetry.",
      pl: "Humanitarna i wojskowa platforma koordynacji logistycznej konsolidująca dane pojazdów, dostępność kierowców i telemetrię IoT w czasie rzeczywistym.",
      uk: "Гуманітарна та військова платформа координації логістики, яка консолідує дані транспортних засобів, доступність водіїв та телеметрію IoT в реальному часі.",
    },
    responsibilities: {
      en: [
        "Developed backend services using NestJS modular architecture to manage vehicles, drivers, and operational workflows",
        "Designed and implemented RESTful APIs for ingesting, validating, and processing IoT telemetry data from vehicles",
        "Implemented authentication and authorization with JWT, Passport.js, and RBAC, securing access for volunteers, drivers, and military users",
        "Applied Redis caching for frequently accessed data such as vehicle status and assignments, improving API response times",
        "Wrote unit tests for services, integration tests for API endpoints, and e2e tests for backend flows using Jest and Supertest",
        "Performed regression testing after feature updates to ensure system stability and prevent breaking existing workflows",
      ],
      pl: [
        "Opracowano usługi backendowe przy użyciu modularnej architektury NestJS do zarządzania pojazdami, kierowcami i przepływami operacyjnymi",
        "Zaprojektowano i wdrożono RESTful API do pobierania, walidacji i przetwarzania danych telemetrycznych IoT z pojazdów",
        "Wdrożono uwierzytelnianie i autoryzację za pomocą JWT, Passport.js i RBAC, zabezpieczając dostęp dla wolontariuszy, kierowców i użytkowników wojskowych",
        "Zastosowano buforowanie Redis dla często dostępnych danych, takich jak status pojazdu i przypisania, poprawiając czasy odpowiedzi API",
        "Napisano testy jednostkowe dla usług, testy integracyjne dla punktów końcowych API i testy e2e dla przepływów backendowych przy użyciu Jest i Supertest",
        "Przeprowadzono testy regresyjne po aktualizacjach funkcji, aby zapewnić stabilność systemu i zapobiec uszkodzeniu istniejących przepływów pracy",
      ],
      uk: [
        "Розроблено бекенд-сервіси за допомогою модульної архітектури NestJS для управління транспортними засобами, водіями та операційними процесами",
        "Спроектовано та впроваджено RESTful API для отримання, перевірки та обробки телеметричних даних IoT від транспортних засобів",
        "Впроваджено аутентифікацію та авторизацію за допомогою JWT, Passport.js та RBAC, забезпечуючи доступ для волонтерів, водіїв та військових користувачів",
        "Застосовано кешування Redis для часто використовуваних даних, таких як статус транспортного засобу та призначення, покращуючи час відповіді API",
        "Написано юніт-тести для сервісів, інтеграційні тести для API ендпоінтів та e2e тести для бекенд-процесів за допомогою Jest та Supertest",
        "Проведено регресійне тестування після оновлень функцій для забезпечення стабільності системи та запобігання порушень існуючих робочих процесів",
      ],
    },
    techStack:
      "Node.js, TypeScript, NestJS, PostgreSQL, Redis, JWT, Passport.js, Docker, CI/CD, Jest, Supertest, Git",
  },
  {
    role: {
      en: "Backend Developer",
      pl: "Backend Developer",
      uk: "Backend Developer",
    },
    company: "AIESEC Polska",
    period: {
      en: "Oct 2023 – Nov 2024 · 1 year 2 months",
      pl: "Paź 2023 – Lis 2024 · 1 rok 2 miesiące",
      uk: "Жовт 2023 – Лист 2024 · 1 рік 2 місяці",
    },
    summary: {
      en: "Recruitment & CRM automation platform streamlining workflows through messaging platforms and API integrations.",
      pl: "Platforma automatyzacji rekrutacji i CRM usprawniająca przepływy pracy poprzez platformy komunikacyjne i integracje API.",
      uk: "Платформа автоматизації рекрутингу та CRM, що оптимізує робочі процеси через месенджери та інтеграції API.",
    },
    responsibilities: {
      en: [
        "Developed backend services and automation bots in Node.js and TypeScript, reducing manual recruitment and reporting work",
        "Built Telegram, WhatsApp, and Messenger bots using webhooks and asynchronous processing for real-time workflows",
        "Implemented RESTful APIs with modular service architecture, improving code reuse and maintainability",
        "Automated CRM processes including lead tracking, reminders, data synchronization, and reporting",
        "Integrated Google Sheets and external APIs for analytics dashboards and performance monitoring",
        "Delivered backend-driven landing pages and microsites integrated with APIs for marketing campaigns",
      ],
      pl: [
        "Opracowano usługi backendowe i boty automatyzacyjne w Node.js i TypeScript, redukując ręczną pracę rekrutacyjną i raportową",
        "Zbudowano boty Telegram, WhatsApp i Messenger przy użyciu webhooks i przetwarzania asynchronicznego dla przepływów pracy w czasie rzeczywistym",
        "Wdrożono RESTful API z modularną architekturą usług, poprawiając ponowne wykorzystanie kodu i łatwość konserwacji",
        "Zautomatyzowano procesy CRM, w tym śledzenie leadów, przypomnienia, synchronizację danych i raportowanie",
        "Zintegrowano Google Sheets i zewnętrzne API dla pulpitów analitycznych i monitorowania wydajności",
        "Dostarczono strony docelowe i mikrostrony oparte na backendzie zintegrowane z API dla kampanii marketingowych",
      ],
      uk: [
        "Розроблено бекенд-сервіси та ботів автоматизації на Node.js та TypeScript, зменшуючи ручну роботу з рекрутингу та звітності",
        "Створено ботів Telegram, WhatsApp та Messenger за допомогою вебхуків та асинхронної обробки для робочих процесів у реальному часі",
        "Впроваджено RESTful API з модульною архітектурою сервісів, покращуючи повторне використання коду та підтримку",
        "Автоматизовано CRM-процеси, включаючи відстеження лідів, нагадування, синхронізацію даних та звітність",
        "Інтегровано Google Sheets та зовнішні API для аналітичних панелей та моніторингу продуктивності",
        "Створено лендінги та мікросайти на основі бекенду, інтегровані з API для маркетингових кампаній",
      ],
    },
    techStack:
      "Node.js, TypeScript, JavaScript (ES6+), REST APIs, Webhooks, Telegram Bot API, Google APIs, Docker, CI/CD, Git",
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
      en: "E-commerce platform migrating offline retail business to online sales with full payment integration and order management.",
      pl: "Platforma e-commerce migrująca tradycyjny handel detaliczny do sprzedaży online z pełną integracją płatności i zarządzaniem zamówieniami.",
      uk: "Платформа електронної комерції, що переводить офлайн-роздрібний бізнес у онлайн-продажі з повною інтеграцією платежів та управлінням замовленнями.",
    },
    responsibilities: {
      en: [
        "Developed authentication, product, order, and user API modules using NestJS with JWT authentication and RBAC",
        "Built authentication module with JWT access and refresh tokens for login, registration, and protected routes",
        "Optimized product list and order history endpoints by analyzing slow queries with pgAdmin and improving indexes",
        "Integrated Stripe payment module using Stripe API for payment intent creation and confirmation",
        "Developed responsive frontend pages including product listing, cart, and checkout using React and Tailwind CSS",
        "Implemented cart and checkout UI logic with state management, form validation, and API error handling",
        "Wrote unit and integration tests for authentication and product APIs using Jest and Supertest",
        "Provided post-launch support, fixing bugs and implementing feature updates",
      ],
      pl: [
        "Opracowano moduły API uwierzytelniania, produktów, zamówień i użytkowników przy użyciu NestJS z uwierzytelnianiem JWT i RBAC",
        "Zbudowano moduł uwierzytelniania z tokenami dostępu i odświeżania JWT dla logowania, rejestracji i chronionych tras",
        "Zoptymalizowano punkty końcowe listy produktów i historii zamówień poprzez analizę wolnych zapytań za pomocą pgAdmin i poprawę indeksów",
        "Zintegrowano moduł płatności Stripe przy użyciu Stripe API do tworzenia i potwierdzania intencji płatności",
        "Opracowano responsywne strony frontendowe, w tym listę produktów, koszyk i kasa przy użyciu React i Tailwind CSS",
        "Wdrożono logikę UI koszyka i kasy z zarządzaniem stanem, walidacją formularzy i obsługą błędów API",
        "Napisano testy jednostkowe i integracyjne dla API uwierzytelniania i produktów przy użyciu Jest i Supertest",
        "Zapewniono wsparcie po uruchomieniu, naprawiając błędy i wdrażając aktualizacje funkcji",
      ],
      uk: [
        "Розроблено модулі API аутентифікації, продуктів, замовлень та користувачів за допомогою NestJS з JWT-аутентифікацією та RBAC",
        "Створено модуль аутентифікації з JWT токенами доступу та оновлення для входу, реєстрації та захищених маршрутів",
        "Оптимізовано ендпоінти списку продуктів та історії замовлень шляхом аналізу повільних запитів за допомогою pgAdmin та покращення індексів",
        "Інтегровано модуль платежів Stripe за допомогою Stripe API для створення та підтвердження платіжних намірів",
        "Розроблено адаптивні фронтенд-сторінки, включаючи список продуктів, кошик та оформлення замовлення за допомогою React та Tailwind CSS",
        "Впроваджено логіку UI кошика та оформлення замовлення з управлінням станом, валідацією форм та обробкою помилок API",
        "Написано юніт та інтеграційні тести для API аутентифікації та продуктів за допомогою Jest та Supertest",
        "Надано підтримку після запуску, виправляючи помилки та впроваджуючи оновлення функцій",
      ],
    },
    techStack:
      "Node.js, TypeScript, JavaScript (ES6+), NestJS, PostgreSQL, React, Tailwind CSS, Stripe API, JWT, Docker, CI/CD, Jest, Supertest, Git",
  },
];
