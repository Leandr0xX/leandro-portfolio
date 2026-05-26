"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Globe,
  Users,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
const skills = [
  "Next.js", "React", "TypeScript", "Node.js",
  "MongoDB", "MySQL", "Python", "Java",
  "Tailwind CSS", "HTML / CSS", "C++", "Git / GitHub",
];

const sobre = [
  {
    icon: Users,
    title: "Formação",
    desc: "Estudante na Universidade da Madeira, a aprofundar conhecimentos em engenharia de software e tecnologias modernas.",
  },
  {
    icon: CalendarCheck,
    title: "Experiência",
    desc: "Trainee Software Developer na Alberto Oculista, onde aplico os meus conhecimentos em ambiente profissional real.",
  },
  {
    icon: Sparkles,
    title: "Objetivos",
    desc: "Focado em crescer como developer, contribuir para projetos com impacto real e explorar as possibilidades da IA e automação.",
  },
];

const projects = [
  {
    title: "Madeira Digital",
    desc: "Agência digital para negócios turísticos da Madeira. Website com automação de reservas, notificações em tempo real via Telegram e verificação de disponibilidade em MongoDB.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "NextAuth"],
    url: "https://madeira-digital.vercel.app",
    github: "https://github.com/Leandr0xX/madeira-digital",
    live: true,
  },
];

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Portfolio() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] font-[var(--font-geist)] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-yellow-400">L</span>eandro
          </a>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300 md:block"
            >
              Contacto
            </a>
            <button
              onClick={() => setMenuAberto((v) => !v)}
              className="rounded-lg p-2 text-white md:hidden"
              aria-label="Menu"
            >
              {menuAberto ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuAberto && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-white/10 bg-[#080808]/95 md:hidden"
            >
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuAberto(false)}
                  className="block border-b border-white/10 px-6 py-4 text-sm text-zinc-300 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-24 pb-12 md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_top_right,_rgba(234,179,8,0.07),_transparent)]" />

        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-sm text-yellow-300"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
                Disponível para oportunidades
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Olá, sou o
                <br />
                <span className="text-yellow-400">Leandro Gama</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 text-lg text-zinc-400 sm:text-xl"
              >
                Trainee Software Developer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-2 flex items-center justify-center gap-1.5 text-sm text-zinc-600 md:justify-start"
              >
                <MapPin size={13} />
                Santa Cruz, Madeira Island, Portugal
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 max-w-lg text-zinc-400 leading-relaxed md:mx-0 mx-auto"
              >
                Apaixonado por desenvolvimento de software e por criar soluções
                inovadoras. Focado em aprendizagem contínua e em contribuir para
                projetos com impacto real.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
              >
                <a
                  href="#projetos"
                  className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
                >
                  Ver Projetos
                </a>
                <a
                  href="#contacto"
                  className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contacto
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex justify-center gap-3 md:justify-start"
              >
                {[
                  { href: "https://github.com/Leandr0xX", label: "GitHub" },
                  { href: "https://www.linkedin.com/in/leandrogama23/", label: "LinkedIn" },
                  { href: "mailto:leandrogama1508@gmail.com", label: "Email" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-zinc-400 transition hover:border-yellow-400/50 hover:text-yellow-400"
                    aria-label={label}
                  >
                    <ExternalLink size={16} />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative flex-shrink-0"
            >
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 blur-xl" />
              <div className="absolute -inset-5 rounded-full border border-yellow-400/10" />
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-2 border-yellow-400/30 sm:h-64 sm:w-64 md:h-72 md:w-72">
                <img
                  src="/foto.jpg"
                  alt="Leandro Gama"
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const p = t.parentElement;
                    if (p && !p.querySelector(".initials")) {
                      const d = document.createElement("div");
                      d.className = "initials flex h-full w-full items-center justify-center bg-yellow-400/10 text-5xl font-bold text-yellow-400";
                      d.textContent = "LG";
                      p.appendChild(d);
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">SOBRE MIM</p>
            <h2 className="text-3xl font-bold md:text-5xl">Quem sou eu</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {sobre.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">TECNOLOGIAS</p>
            <h2 className="text-3xl font-bold md:text-5xl">Skills</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="cursor-default rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-yellow-400/30 hover:text-yellow-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">PORTFÓLIO</p>
            <h2 className="text-3xl font-bold md:text-5xl">Projetos</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-yellow-400/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400">
                    <Globe size={22} />
                  </div>
                  {project.live && (
                    <span className="flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      Live
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-zinc-400 transition hover:border-white/30 hover:text-white"
                  >
                    <ExternalLink size={13} />
                    GitHub
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-yellow-400/10 px-4 py-2 text-xs font-medium text-yellow-400 transition hover:bg-yellow-400/20"
                  >
                    <ExternalLink size={13} />
                    Ver Projeto
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Placeholder para próximo projeto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-8 text-center"
            >
              <div className="text-4xl">🔧</div>
              <p className="mt-3 text-sm font-medium text-zinc-500">Mais projetos em breve</p>
              <p className="mt-1 text-xs text-zinc-700">Em construção...</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">CONTACTO</p>
            <h2 className="text-3xl font-bold md:text-5xl">Vamos falar?</h2>
            <p className="mt-6 text-zinc-400">
              Estou disponível para oportunidades, colaborações ou simplesmente
              uma boa conversa sobre tecnologia.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:leandrogama1508@gmail.com"
                className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
              >
                <Mail size={17} />
                leandrogama1508@gmail.com
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <a
                href="https://github.com/Leandr0xX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm text-zinc-400 transition hover:border-white/40 hover:text-white"
              >
                <ExternalLink size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leandrogama23/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm text-zinc-400 transition hover:border-white/40 hover:text-white"
              >
                <ExternalLink size={15} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="text-sm text-zinc-700">
          © {new Date().getFullYear()} Leandro Gama · Feito com Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
