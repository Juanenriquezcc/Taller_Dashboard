type StatIcon = "cart" | "users" | "bag";
type MenuIcon = "home" | "orders" | "products" | "analytics" | "marketing" | "messages";

type StatCard = {
  id: number;
  icon: StatIcon;
  label: string;
  value: string;
  trend: string;
  positive: boolean;
};

type MenuItem = {
  id: number;
  icon: MenuIcon;
  label: string;
  active?: boolean;
  badge?: string;
  chevron?: boolean;
};

const statCards: StatCard[] = [
  { id: 1, icon: "cart", label: "Total Sales", value: "263k", trend: "15.6%", positive: true },
  { id: 2, icon: "users", label: "Total Visitors", value: "35k", trend: "6.2%", positive: false },
  { id: 3, icon: "bag", label: "Total Orders", value: "165k", trend: "3.5%", positive: true },
];

const mainMenu: MenuItem[] = [
  { id: 1, icon: "home", label: "Dashboard", active: true },
  { id: 2, icon: "orders", label: "Orders", chevron: true },
  { id: 3, icon: "products", label: "Products", chevron: true },
  { id: 4, icon: "analytics", label: "Analytics" },
  { id: 5, icon: "marketing", label: "Marketing", chevron: true },
  { id: 6, icon: "messages", label: "Messages", badge: "25" },
];

const integrations = [
  { id: 1, label: "Jira", icon: "jira" as const },
  { id: 2, label: "Slack", icon: "slack" as const },
  { id: 3, label: "Intercom", icon: "intercom" as const },
];

const days = [21, 22, 23, 24, 25];
const conversionValue = 58.19;

function polarToCartesian(cx: number, cy: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy - radius * Math.sin(angleInRadians),
  };
}

function describeArc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, radius, startAngle);
  const end = polarToCartesian(cx, cy, radius, endAngle);
  const largeArcFlag = Math.abs(endAngle - startAngle) <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

type IconName =
  | MenuIcon
  | StatIcon
  | "search"
  | "bell"
  | "calendar"
  | "cloud"
  | "logout"
  | "jira"
  | "slack"
  | "intercom"
  | "chevronLeft"
  | "chevronRight"
  | "arrowUp"
  | "arrowDiag";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const base = className ?? "h-6 w-6";

  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M4 10.8 12 4l8 6.8v8a1 1 0 0 1-1 1h-4.8v-5.3H9.8V20H5a1 1 0 0 1-1-1v-8.2Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "orders") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <rect x="6" y="6" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "products") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M8 7h8l2 4H6l2-4Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 11v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "analytics") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M6 18V9M12 18V6M18 18v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "marketing") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M4 13h4l9-4v10l-9-4H4v-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 15v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "messages") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M5 7h14v9H9l-4 3V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "cart") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M6 8h13l-1.5 6.2H8L6.7 9.2 5.4 6H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="18" r="1.3" fill="currentColor" />
        <circle cx="16" cy="18" r="1.3" fill="currentColor" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="2" fill="currentColor" />
        <circle cx="15" cy="9" r="2" fill="currentColor" />
        <path d="M5 17a4 4 0 0 1 8 0M11 17a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "bag") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M7 8h10l-1 11H8L7 8Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M12 4a4 4 0 0 0-4 4v2.3c0 .8-.3 1.6-.8 2.3L6 14h12l-1.2-1.4a3.6 3.6 0 0 1-.8-2.3V8a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 17a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <rect x="4" y="6" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4v4M16 4v4M4 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "cloud") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M8 17h8a3 3 0 0 0 .3-6A5 5 0 0 0 6.8 9 3.2 3.2 0 0 0 8 17Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "logout") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M10 7V5h-5v14h5v-2M14 12H6m8 0-2.5-2.5M14 12l-2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "jira") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M12 4 7 9l5 5 5-5-5-5Zm0 6-5 5 5 5 5-5-5-5Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "slack") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M10 4.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#f84f57" />
        <path d="M18 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="#27c4f5" />
        <path d="M14 19.2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill="#f6be34" />
        <path d="M6 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="#2eb67d" />
      </svg>
    );
  }

  if (name === "intercom") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10h8M8 14h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "chevronLeft") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="m14 7-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "arrowUp") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M12 20V7m0 0L7 12m5-5 5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "arrowDiag") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
        <path d="M6 18 18 6m0 0h-7m7 0v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={base} fill="none" aria-hidden="true">
      <path d="m10 7 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6fc] p-2 md:p-4">
      <div className="mx-auto grid min-h-[96vh] max-w-375 grid-cols-1 gap-4 rounded-[30px] bg-white p-3 shadow-[0_24px_70px_rgba(33,46,86,0.1)] lg:grid-cols-[250px_1fr] lg:p-4">
        <aside className="flex flex-col rounded-3xl border border-[#eef0f7] bg-white px-3 pb-3 pt-4">
          <div className="mb-7 flex flex-row items-center gap-3 px-2">
            <div className="flex h-9 w-9 items-center justify-center bg-[#efb016] text-[15px] font-extrabold text-white [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)]">R</div>
            <p className="text-[40px] font-black leading-none text-[#10153a]">flex</p>
          </div>

          <p className="mb-4 px-3 text-sm font-semibold text-[#aeb4c9]">Menu</p>
          <nav className="flex basis-auto flex-col gap-1">
            {mainMenu.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`group flex flex-row items-center justify-between rounded-[18px] px-4 py-3 text-sm font-semibold transition ${
                  item.active
                    ? "bg-[#4f47f5] text-white shadow-[0_12px_26px_rgba(79,71,245,0.38)]"
                    : "text-[#1b2146] hover:bg-[#f4f6fe]"
                }`}
              >
                <span className="flex basis-10/12 items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.active ? "bg-white/20" : "text-[#161e45]"}`}>
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span>{item.label}</span>
                </span>
                <span className="flex basis-2/12 justify-end text-sm">
                  {item.badge ? (
                    <span className="animate-pulse-soft rounded-full bg-[#1fc57d] px-2 py-0.5 text-[10px] font-semibold text-white">
                      {item.badge}
                    </span>
                  ) : item.chevron ? (
                    <span className="text-[#bbc2d8] group-hover:text-[#8f98bb]">
                      <Icon name="chevronRight" className="h-4 w-4 rotate-90" />
                    </span>
                  ) : (
                    <span className="h-3.5 w-3.5" />
                  )}
                </span>
              </a>
            ))}
          </nav>

          <p className="mb-3 mt-9 px-3 text-sm font-semibold text-[#aeb4c9]">Integrations</p>
          <div className="flex flex-col gap-1.5">
            {integrations.map((tool) => (
              <button
                key={tool.id}
                type="button"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#29305b] transition hover:bg-[#f6f7fc]"
              >
                <span className="text-[#3b4cf5]">
                  <Icon name={tool.icon} className="h-6 w-6" />
                </span>
                {tool.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-[#181f46] transition hover:bg-[#f6f7fc]"
          >
            <Icon name="logout" className="h-6 w-6" />
            Logout
          </button>
        </aside>

        <main className="rounded-3xl border border-[#eef0f7] bg-[#fbfcff] p-4 md:p-5">
          <header className="flex flex-wrap items-center gap-3 md:flex-nowrap">
            <button
              type="button"
              className="order-1 flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ebf7] bg-white text-[#b2b9cf]"
            >
              <Icon name="chevronLeft" className="h-6 w-6" />
            </button>

            <div className="order-3 flex w-full items-center gap-2 rounded-full border border-[#e8ebf7] bg-white px-4 py-2 md:order-2 md:w-97.5">
              <span className="text-[#b2b9cf]">
                <Icon name="search" className="h-6 w-6" />
              </span>
              <input
                aria-label="search"
                defaultValue=""
                placeholder="Search"
                className="w-full border-none bg-transparent text-sm font-semibold text-[#141a37] outline-none placeholder:text-[#b0b7ce]"
              />
            </div>

            <div className="order-2 ml-auto flex flex-row-reverse items-center gap-3 md:order-3">
              <div className="flex items-center gap-3 border-l border-[#eceff8] pl-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffb56e,#ff6f3f)] text-sm font-bold text-white">
                L
                </div>
                <p className="text-xl font-extrabold text-[#28306a]">Hi, Lay</p>
              </div>
              <div className="border-l border-[#eceff8] px-3 text-right">
                <p className="text-[11px] font-semibold text-[#afb6cc]">Your Balance</p>
                <p className="text-[28px] font-extrabold leading-none text-[#3c4ef0]">$5.456</p>
              </div>
              <button
                type="button"
                className="relative mr-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ebf7] bg-white text-[#8f96b3]"
              >
                <Icon name="bell" className="h-6 w-6" />
                <span className="absolute right-2 top-2 h-2 w-2 animate-pulse rounded-full bg-[#4c47f5]" />
              </button>
            </div>
          </header>

          <section className="mt-6 flex flex-wrap items-center gap-3 md:flex-nowrap">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f47f5] text-white shadow-[0_12px_25px_rgba(79,71,245,0.4)]">
                <Icon name="home" className="h-7 w-7" />
              </span>
              <h1 className="text-[34px] font-extrabold tracking-tight text-[#141938]">Dashboard</h1>
            </div>
            <div className="ml-auto flex flex-row gap-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-[#dfe3f0] bg-white px-5 py-2 text-sm font-semibold text-[#7e87ab]"
              >
                <Icon name="calendar" className="h-6 w-6" />
                This Month
                <Icon name="chevronRight" className="h-4 w-4 rotate-90" />
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-[#20c37f] px-6 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(34,196,128,0.35)]"
              >
                <Icon name="cloud" className="h-6 w-6" />
                Download Report
              </button>
            </div>
          </section>

          <div className="mt-5 rounded-[26px] bg-[#f2f3f9] p-3 md:p-4">
            <section className="grid grid-flow-col grid-cols-1 grid-rows-1 gap-3 md:grid-cols-3">
              {statCards.map((card) => (
                <article
                  key={card.id}
                  className="group flex min-h-26 items-center gap-3 rounded-[18px] border border-[#eceef7] bg-white px-4 py-3 transition hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f2fe] text-[#5a52f5]">
                    <Icon name={card.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#a7aec5]">{card.label}</p>
                    <div className="mt-1 flex items-baseline gap-2">
                      <p className="text-[50px] font-extrabold leading-none text-[#171d39]">{card.value}</p>
                      <p className={`text-sm font-bold ${card.positive ? "text-[#27ba7a]" : "text-[#ef6d74]"}`}>
                        {card.positive ? "↑" : "↓"} {card.trend}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-4 grid grid-cols-12 grid-rows-[auto_auto] gap-4">
            <article className="col-span-12 col-start-1 col-end-13 row-span-2 rounded-3xl border border-[#eceef7] bg-white p-5 lg:col-span-7 lg:col-end-8">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-extrabold leading-none text-[#161d3d]">Online Store Sessions</h2>
                <button
                  type="button"
                  className="rounded-full border border-[#e8ebf3] bg-[#fbfcff] px-5 py-2 text-sm font-semibold text-[#aab1c7]"
                >
                  View Report
                </button>
              </div>

              <div className="mt-5 flex items-end justify-between border-b border-[#eceef7] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f2fe] text-[#4f47f5]">
                    <Icon name="users" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#9ba2bf]">Visitors</p>
                    <p className="text-[50px] font-extrabold leading-none text-[#171d39]">68</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 text-right">
                  <p className="text-[30px] font-extrabold leading-none text-[#1eb574]">↑ 15.6%</p>
                  <p className="text-[24px] font-extrabold leading-none text-[#4e4bf2]">26</p>
                  <p className="text-sm font-bold text-[#f16c70]">↓ 1.6%</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xl font-extrabold text-[#1b2143]">Sessions Over Time</p>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-full border border-[#e3e6f3] px-4 py-1.5 text-xs font-semibold text-[#8b93b4]"
                  >
                    <Icon name="calendar" className="h-4 w-4" />
                    February
                    <Icon name="chevronRight" className="h-4 w-4 rotate-90" />
                  </button>
                </div>

                <div className="rounded-2xl bg-[#fcfdff] p-2">
                  <div className="flex items-stretch gap-2">
                    <div className="flex h-42.5 w-8 flex-col justify-between py-2 text-[14px] font-semibold text-[#8d94ae]">
                      <span>15</span>
                      <span>10</span>
                      <span>5</span>
                      <span>0</span>
                    </div>
                    <svg viewBox="0 0 620 200" className="h-42.5 w-full">
                      <path d="M0 40h620M0 80h620M0 120h620M0 160h620" stroke="#eef1fa" strokeWidth="2" />
                      <path
                        className="chart-path"
                        d="M0 164 C 42 160, 65 80, 128 92 S 220 175, 300 128 S 392 72, 474 126 S 555 172, 620 36"
                        fill="none"
                        stroke="#5a52f5"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8ebf8] text-[#9ea5c1]"
                  >
                    <Icon name="chevronLeft" className="h-4 w-4" />
                  </button>
                  <div className="flex gap-2">
                    {days.map((day) => (
                      <span
                        key={day}
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                          day === 21
                            ? "animate-float bg-[#4d46f6] text-white shadow-[0_10px_24px_rgba(77,70,246,0.35)]"
                            : "text-[#8c95b6]"
                        }`}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8ebf8] text-[#9ea5c1]"
                  >
                    <Icon name="chevronRight" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>

            <article className="relative col-span-12 col-start-1 col-end-13 min-h-44 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#4f47f5_0%,#3f38de_100%)] p-5 text-white lg:col-span-5 lg:col-start-8 lg:col-end-13">
              <div className="pointer-events-none absolute -right-8 top-5 h-36 w-36 rounded-full bg-white/10 blur-xl" />
              <div className="pointer-events-none absolute right-8 top-6 h-20 w-8 rounded-t-full border-[6px] border-b-0 border-white/92" />
              <div className="pointer-events-none absolute -bottom-2.5 right-8 h-28 w-9 rotate-10 rounded-t-full border-[6px] border-b-0 border-[#2b2a53]" />
              <div className="pointer-events-none absolute right-16 top-8 text-white">
                <Icon name="arrowUp" className="h-10 w-10" />
              </div>
              <div className="pointer-events-none absolute right-26 top-24 text-white/95">
                <Icon name="arrowUp" className="h-8 w-8" />
              </div>
              <div className="pointer-events-none absolute bottom-10 right-30 h-2.5 w-6 rounded-full bg-white/85" />
              <div className="pointer-events-none absolute bottom-6 left-38 h-4 w-5 rounded-full bg-white/80 blur-[1px]" />
              <h3 className="relative text-[42px] font-black leading-none">Need More Stats?</h3>
              <p className="relative mt-2 text-[15px] font-semibold text-white/85">Upgrade to pro for added benefits.</p>
              <button
                type="button"
                className="relative mt-6 flex items-center gap-2 rounded-full bg-[#20c37f] px-6 py-2.5 font-bold text-white shadow-[0_10px_24px_rgba(34,196,128,0.35)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/80 text-xs">
                  <Icon name="arrowUp" className="h-3.5 w-3.5" />
                </span>
                Go Pro Now
              </button>
            </article>

            <article className="col-span-12 col-start-1 col-end-13 rounded-3xl border border-[#eceef7] bg-white p-5 lg:col-span-5 lg:col-start-8 lg:col-end-13">
              <h3 className="text-[18px] font-extrabold leading-none text-[#171d39]">Conversion</h3>
              <div className="mt-3 flex justify-center">
                <div className="relative h-48 w-80 overflow-hidden">
                  <svg viewBox="0 0 320 180" className="h-full w-full">
                    <defs>
                      <linearGradient id="conversionGradient" x1="40" y1="140" x2="280" y2="140" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#7974ff" />
                        <stop offset="100%" stopColor="#3f39de" />
                      </linearGradient>
                    </defs>
                    <path
                      d={describeArc(160, 140, 98, 180, 0)}
                      fill="none"
                      stroke="#e4e7f8"
                      strokeWidth="44"
                      strokeLinecap="butt"
                    />
                    <path
                      d={describeArc(160, 140, 98, 180, 180 - (conversionValue / 100) * 180)}
                      fill="none"
                      stroke="url(#conversionGradient)"
                      strokeWidth="44"
                      strokeLinecap="butt"
                    />
                    <line
                      x1={polarToCartesian(160, 140, 40, 180 - (conversionValue / 100) * 180).x}
                      y1={polarToCartesian(160, 140, 40, 180 - (conversionValue / 100) * 180).y}
                      x2={polarToCartesian(160, 140, 112, 180 - (conversionValue / 100) * 180).x}
                      y2={polarToCartesian(160, 140, 112, 180 - (conversionValue / 100) * 180).y}
                      stroke="#9aa2e6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-x-0 bottom-6 text-center">
                    <p className="text-[52px] font-extrabold leading-none text-[#151b39]">
                      {conversionValue.toFixed(2).replace(".", ",")}%
                    </p>
                    <p className="text-sm font-bold text-[#20be77]">↑ 3.5%</p>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex justify-between border-t border-[#eceef7] pt-4 text-sm font-semibold text-[#4e5678]">
                <p className="flex items-center gap-1.5"><span className="text-[#20be77]"><Icon name="arrowUp" className="h-5 w-5" /></span>Income $542,317</p>
                <p className="flex items-center gap-1.5"><span className="text-[#1b2143]"><Icon name="arrowDiag" className="h-5 w-5" /></span>Expences $497,456</p>
              </div>
            </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
