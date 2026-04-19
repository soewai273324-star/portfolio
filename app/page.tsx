const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const tags = ["#BROADCAST", "#LINUX SYSTEMS", "#SERVER OPS", "#TECH SUPPORT"];

const testimonials = [
  "Stable operations, quick fixes, and dependable technical support.",
  "Strong ownership in server room maintenance and monitoring work.",
  "Hands-on engineer who keeps critical systems running smoothly.",
  "Reliable under pressure with real broadcast infrastructure experience.",
];

const projects = [
  {
    title: "Server Room Infrastructure",
    label: "Featured Project",
    description:
      "Rack organization, hardware maintenance, and operational checks that help keep engineering environments stable and service-ready.",
  },
  {
    title: "Broadcast Equipment Setup",
    label: "System Setup",
    description:
      "Installation support for monitoring devices, broadcast hardware, and critical technical equipment used in day-to-day operations.",
  },
  {
    title: "Satellite and Signal Workflow",
    label: "Field Support",
    description:
      "Technical support around signal environments, satellite workflows, and issue response for reliable service continuity.",
  },
  {
    title: "Monitoring Architecture",
    label: "Diagram Review",
    description:
      "Receiver, switch, splitter, and grabber workflow mapping for clearer maintenance, troubleshooting, and system visibility.",
  },
  {
    title: "Channel Connection Layout",
    label: "Cable Routing",
    description:
      "Structured connection planning that supports clean routing, easier tracing, and dependable channel management.",
  },
];

const experiences = [
  {
    title: "MATV Engineering",
    company: "Broadcast Operations",
    period: "14+ Years",
    description:
      "Maintaining broadcast systems, resolving service-impacting issues, and supporting daily operations across critical environments.",
  },
  {
    title: "Server Room Maintenance",
    company: "Infrastructure Support",
    period: "100+ Channels",
    description:
      "Handling rack systems, hardware organization, and facility support tasks that improve reliability and operational order.",
  },
  {
    title: "Technical Troubleshooting",
    company: "Monitoring and Response",
    period: "99.9% Uptime",
    description:
      "Diagnosing Linux, monitoring, and infrastructure issues quickly to keep systems efficient, stable, and available.",
  },
];

const education = [
  {
    title: "Broadcast Systems Training",
    subtitle: "Practical engineering development",
    description:
      "Hands-on learning across monitoring workflows, signal handling, and operational broadcast support.",
  },
  {
    title: "Linux Server Administration",
    subtitle: "Applied technical knowledge",
    description:
      "System maintenance, issue analysis, and day-to-day support work for dependable server operations.",
  },
  {
    title: "Electrical and Cooling Support",
    subtitle: "Infrastructure fundamentals",
    description:
      "Working knowledge of equipment environments, power-related checks, and cooling support inside technical rooms.",
  },
  {
    title: "Team Leadership",
    subtitle: "Operational coordination",
    description:
      "Experience guiding work, supporting teams, and helping maintain consistency across demanding technical tasks.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#11110f] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[1180px] overflow-hidden border-x border-white/5 bg-[#0b0b09]">
        <section className="relative overflow-hidden px-6 pb-0 pt-6 sm:px-10 lg:px-14 lg:pt-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,203,5,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,203,5,0.08),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_34%)]" />

          <header className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffcb05] text-xs font-bold text-black">
                S
              </span>
              <span className="text-xl font-medium text-white">Portfolio</span>
            </div>

            <nav className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-white/75">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className={`transition hover:text-white ${
                    item.href === "#home" ? "font-semibold text-[#ffcb05]" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div id="home" className="relative pb-14 pt-10 sm:pt-14 lg:pt-16">
            <h1 className="text-center text-[52px] font-semibold uppercase leading-none tracking-[-0.06em] text-white sm:text-[86px] lg:text-[118px] xl:text-[136px]">
              SOE WAI
            </h1>

            <div className="mt-8 grid grid-cols-2 gap-4 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-white/85 sm:grid-cols-4 sm:gap-6 lg:mt-10">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="mt-10 grid gap-10 pb-4 lg:grid-cols-[290px_minmax(0,1fr)] lg:items-center">
              <div className="relative mx-auto w-full max-w-[260px] rounded-[22px] border border-white/10 bg-[#111111] p-4">
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:6px_6px]" />
                <div className="relative flex aspect-[4/4.9] flex-col justify-between overflow-hidden rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,203,5,0.16),rgba(255,203,5,0)_40%),linear-gradient(145deg,#181818,#0a0a0a)] p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#ffcb05]">
                      MATV Engineer
                    </p>
                    <p className="mt-3 max-w-[130px] text-sm leading-6 text-white/68">
                      Broadcast systems, server operations, and infrastructure support.
                    </p>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                        Soe Wai
                      </p>
                      <p className="mt-1 text-sm text-white/55">
                        Bangkok, Thailand
                      </p>
                    </div>
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/5 text-xl font-semibold text-[#ffcb05]">
                      SW
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-[560px] pb-2 lg:ml-4">
                <p className="text-lg leading-8 text-white/86 sm:text-xl">
                  Welcome to my portfolio. I&apos;m Soe Wai, a MATV engineer and
                  technical specialist with more than 14 years of experience. I
                  manage broadcast systems, maintain Linux servers, and solve
                  infrastructure issues that keep services stable and efficient.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-3 rounded-[10px] bg-[#ffcb05] px-7 py-4 text-base font-semibold !text-black transition hover:bg-[#ffd83d] hover:!text-black"
                  >
                    <span className="!text-black">Start a Project Now</span>
                    <span aria-hidden="true" className="!text-black">
                      ↗
                    </span>
                  </a>

                  <a
                    href="#about"
                    className="inline-flex items-center gap-3 rounded-[10px] border border-white/12 bg-white/4 px-6 py-4 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/6"
                  >
                    <span>About Me</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid border-y border-white/10 bg-[#171715] sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((quote) => (
            <div
              key={quote}
              className="border-b border-white/10 px-5 py-5 sm:border-r xl:border-b-0"
            >
              <p className="text-sm tracking-[0.22em] text-[#ffcb05]">★★★★★</p>
              <p className="mt-2 text-sm italic leading-6 text-white/72">
                &quot;{quote}&quot;
              </p>
            </div>
          ))}
        </section>

        <section id="projects" className="px-6 py-14 sm:px-10 lg:px-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[#ffcb05]">✦</span>
              <h2 className="text-xl font-medium text-white">Recent Projects</h2>
            </div>
            <a
              href="#contact"
              className="text-sm font-medium text-[#ffcb05] transition hover:text-[#ffe061]"
            >
              Explore more work ↗
            </a>
          </div>

          <article className="relative mt-8 overflow-hidden rounded-[26px] border border-white/10 bg-[#121212]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,203,5,0.12),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_38%)]" />
            <div className="relative grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div className="max-w-[520px]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#ffcb05]">
                  {projects[0].label}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {projects[0].title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">
                  {projects[0].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/70">
                    Cable Management
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/70">
                    Hardware Support
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/70">
                    Monitoring
                  </span>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[#ffcb05] px-6 py-3 text-sm font-semibold !text-black transition hover:bg-[#ffd83d] hover:!text-black"
                >
                  <span className="!text-black">View Project</span>
                  <span aria-hidden="true" className="!text-black">
                    ↗
                  </span>
                </a>
              </div>

              <div className="relative min-h-[280px] overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,#181818,#0e0e0d)]">
                <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-[#ffcb05]/18 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:34px_34px]" />
                <div className="absolute inset-x-6 top-8 h-px bg-white/10" />
                <div className="absolute inset-x-6 bottom-8 h-px bg-white/10" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <span className="w-fit rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75">
                    Signal Workflow
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                        Reliable systems
                      </p>
                      <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                        MATV
                      </p>
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#ffcb05]">
                      24/7 Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.slice(1).map((project) => (
              <article
                key={project.title}
                className="rounded-[22px] border border-white/10 bg-[#121212] p-6 transition hover:border-white/20"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#ffcb05]">
                  {project.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="border-t border-white/10 bg-[#0f0f0f] px-6 py-14 sm:px-10 lg:px-14"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.78fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[#ffcb05]">✦</span>
                <p className="text-xl font-medium text-white">About Me</p>
              </div>
              <h2 className="mt-6 max-w-[560px] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Keeping broadcast and server systems running without interruption.
              </h2>
              <div className="mt-6 max-w-[560px] space-y-5 text-base leading-8 text-white/72">
                <p>
                  I have worked across monitoring systems, Linux servers, server
                  rooms, electrical support, cooling systems, and technical issue
                  resolution. My background combines hands-on maintenance with team
                  leadership and operational responsibility.
                </p>
                <p>
                  I have supported more than 100 TV channels, delivered server room
                  relocation work, and maintained stable uptime in demanding
                  production environments.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[#ffcb05] px-6 py-3 text-sm font-semibold !text-black transition hover:bg-[#ffd83d] hover:!text-black"
              >
                <span className="!text-black">Download Resume</span>
                <span aria-hidden="true" className="!text-black">
                  ↓
                </span>
              </a>
            </div>

            <aside className="rounded-[24px] border border-white/10 bg-[#111111]">
              <div className="relative overflow-hidden rounded-t-[24px] border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,203,5,0.14),rgba(255,203,5,0)_42%),linear-gradient(145deg,#181818,#0a0a0a)] px-6 py-8">
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:8px_8px]" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-black/30 text-3xl font-semibold text-[#ffcb05]">
                    SW
                  </span>
                  <p className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Soe Wai
                  </p>
                  <p className="mt-2 text-sm text-white/55">
                    MATV Engineer &amp; Technical Specialist
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/10">
                <div className="bg-[#111111] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Focus
                  </p>
                  <p className="mt-2 text-sm text-white/82">Broadcast Systems</p>
                </div>
                <div className="bg-[#111111] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Base
                  </p>
                  <p className="mt-2 text-sm text-white/82">Bangkok, Thailand</p>
                </div>
                <div className="bg-[#111111] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Strength
                  </p>
                  <p className="mt-2 text-sm text-white/82">Problem Solving</p>
                </div>
                <div className="bg-[#111111] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Support
                  </p>
                  <p className="mt-2 text-sm text-white/82">Linux &amp; Monitoring</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-14 sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div id="experience">
              <div className="flex items-center gap-3">
                <span className="text-[#ffcb05]">✦</span>
                <h2 className="text-xl font-medium text-white">Experience</h2>
              </div>
              <div className="mt-6 space-y-4">
                {experiences.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-[#101010] p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/55">{item.company}</p>
                      </div>
                      <span className="w-fit rounded-full border border-[#ffcb05]/20 bg-[#ffcb05]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#ffcb05]">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-5 max-w-[520px] text-sm leading-7 text-white/68">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div id="education">
              <div className="flex items-center gap-3">
                <span className="text-[#ffcb05]">✦</span>
                <h2 className="text-xl font-medium text-white">Education</h2>
              </div>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[22px] border border-white/10 bg-[#101010] p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ffcb05]">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/10 bg-[#0f0f0f] px-6 py-14 sm:px-10 lg:px-14"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#ffcb05]">
                Contact
              </p>
              <h2 className="mt-4 max-w-[520px] text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Open to engineering opportunities.
              </h2>
            </div>

            <div className="w-full max-w-2xl rounded-[20px] border border-white/10 bg-[#121212]">
              <div className="grid gap-0 text-sm sm:grid-cols-[140px_1fr]">
                <div className="border-b border-white/10 px-5 py-4 uppercase tracking-[0.18em] text-white/45 sm:border-r">
                  Phone
                </div>
                <a
                  href="tel:+66987825248"
                  className="border-b border-white/10 px-5 py-4 text-white/82 transition hover:text-white"
                >
                  +66 987 825 248
                </a>

                <div className="border-b border-white/10 px-5 py-4 uppercase tracking-[0.18em] text-white/45 sm:border-r">
                  Email
                </div>
                <a
                  href="mailto:soewai273324@gmail.com"
                  className="border-b border-white/10 px-5 py-4 text-white/82 transition hover:text-white"
                >
                  soewai273324@gmail.com
                </a>

                <div className="border-b border-white/10 px-5 py-4 uppercase tracking-[0.18em] text-white/45 sm:border-r">
                  LinkedIn
                </div>
                <a
                  href="https://www.linkedin.com/in/soewai"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-white/10 px-5 py-4 text-white/82 transition hover:text-white"
                >
                  linkedin.com/in/soewai
                </a>

                <div className="px-5 py-4 uppercase tracking-[0.18em] text-white/45 sm:border-r sm:border-white/10">
                  Location
                </div>
                <div className="px-5 py-4 text-white/82">
                  Bangkapi, Bangkok, Thailand
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
