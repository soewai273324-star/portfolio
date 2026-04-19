import Image from "next/image";

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
    image: "/workimage/viber_image_1.jpg",
    description:
      "Hands-on maintenance and organization of rack systems, server hardware, and operational cabling.",
  },
  {
    title: "Broadcast Equipment Setup",
    image: "/workimage/viber_image_2025-03-21_14-04-21-053.jpg",
    description:
      "Installation and maintenance work across Dell EMC systems, monitoring devices, and technical equipment.",
  },
  {
    title: "Satellite and Signal Environment",
    image: "/workimage/viber_image_2025-03-21_14-06-33-089.jpg",
    description:
      "Field-side infrastructure involving satellite systems and technical support for reliable signal workflows.",
  },
  {
    title: "Monitoring Architecture",
    image: "/workimage/Capture.PNG",
    description:
      "A visual breakdown of receiver, switch, splitter, and grabber connections used in monitoring operations.",
  },
  {
    title: "Channel Connection Layout",
    image: "/workimage/Capture1.PNG",
    description:
      "Signal and cable routing diagram that supports structured channel management and technical troubleshooting.",
  },
];

const stats = [
  { value: "100+", label: "TV channels monitored" },
  { value: "10+", label: "Years in team leadership" },
  { value: "99.9%", label: "Operational uptime" },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0b0b09] text-white">
      <div className="min-h-screen w-full overflow-hidden bg-[#0b0b09]">
        <section className="relative overflow-hidden px-6 pb-0 pt-6 sm:px-10 lg:px-14 lg:pt-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,208,0,0.14),transparent_26%),radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)]" />

          <header className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffcb05] text-xs font-bold text-black">
                S
              </span>
              <span className="text-xl font-medium text-white">PortFolio</span>
            </div>

            <nav className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-white/75">
              <a className="font-semibold text-[#ffcb05]" href="#home">
                Home
              </a>
              <a className="transition hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
              <a className="transition hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div id="home" className="relative pt-10 sm:pt-14 lg:pt-16">
            <h1 className="text-center text-[52px] font-semibold uppercase leading-none tracking-[-0.06em] text-white sm:text-[86px] lg:text-[118px] xl:text-[136px]">
              SOE WAI
            </h1>

            <div className="mt-8 grid grid-cols-2 gap-4 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-white/85 sm:grid-cols-4 sm:gap-6 lg:mt-10">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="mt-10 grid gap-10 pb-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-end">
              <div className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-[2px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),#111]">
                <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:6px_6px]" />
                <div className="relative aspect-[4/4.6]">
                  <Image
                    src="/profile/profile.jpg"
                    alt="Soe Wai profile"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 260px, 320px"
                  />
                </div>
              </div>

              <div className="max-w-[520px] pb-2 lg:ml-2">
                <p className="text-lg leading-8 text-white/88 sm:text-xl">
                  Welcome to my portfolio. I&apos;m Soe Wai, a MATV engineer and
                  technical specialist with more than 14 years of experience. I
                  manage broadcast systems, maintain Linux servers, and solve
                  infrastructure issues that keep services stable and efficient.
                </p>

                <a
                  href="#projects"
                  className="mt-8 inline-flex items-center gap-3 rounded-[8px] bg-[#ffcb05] px-7 py-4 text-base font-semibold text-black transition hover:bg-[#ffd83d]"
                >
                  Start a Project Now
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid border-t border-white/10 bg-[#1a1a19] sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((quote) => (
            <div
              key={quote}
              className="border-b border-white/10 px-5 py-4 sm:border-r xl:border-b-0"
            >
              <p className="text-sm tracking-[0.22em] text-[#ffcb05]">★★★★★</p>
              <p className="mt-2 text-sm italic leading-6 text-white/72">
                &quot;{quote}&quot;
              </p>
            </div>
          ))}
        </section>

        <section id="projects" className="px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
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

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="overflow-hidden rounded-[14px] border border-white/10 bg-[#131313]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#ffcb05]">
                  Featured Project
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {projects[0].title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/68">
                  {projects[0].description}
                </p>
              </div>
            </article>

            <div className="grid gap-6">
              {projects.slice(1, 3).map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[14px] border border-white/10 bg-[#131313]"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-6 border-t border-white/10 bg-[#0f0f0f] px-6 py-10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#ffcb05]">
              About Me
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Keeping broadcast and server systems running without interruption.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/72">
            <p>
              I have worked across monitoring systems, Linux servers, server
              rooms, electrical support, cooling systems, and technical issue
              resolution. My background combines hands-on maintenance with team
              leadership and operational responsibility.
            </p>
            <p>
              I have supported more than 100 TV channels, delivered server room
              relocation work, and maintained stable system uptime in demanding
              production environments.
            </p>

            <a
              href="/MATV Engineer_SoeWai.pdf"
              download
              className="inline-flex items-center gap-3 rounded-[8px] bg-[#ffcb05] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd83d]"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          id="services"
          className="grid gap-6 border-t border-white/10 px-6 py-10 sm:px-10 lg:grid-cols-3 lg:px-14"
        >
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[14px] border border-white/10 bg-[#121212] p-6"
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/62">
                {stat.label}
              </p>
            </article>
          ))}
        </section>

        <section
          id="contact"
          className="border-t border-white/10 bg-[#0f0f0f] px-6 py-12 sm:px-10 lg:px-14 lg:py-14"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#ffcb05]">
                Contact
              </p>
              <h2 className="mt-4 max-w-[520px] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                Open to engineering opportunities.
              </h2>
            </div>

            <div className="w-full max-w-2xl rounded-[16px] border border-white/10 bg-[#121212]">
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
