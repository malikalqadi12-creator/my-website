'use client'

import {
  Award,
  BookOpen,
  Brain,
  ClipboardList,
  Code2,
  ExternalLink,
  Gamepad2,
  Globe,
  GraduationCap,
  Headset,
  Mail,
  MapPin,
  Megaphone,
  Network,
  Shield,
  ShieldCheck,
  Smartphone,
  Terminal,
  User,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import {
  developer,
  education,
  skillGroups,
  experiences,
  type SkillGroup,
  type Experience,
} from '@/lib/developer-data'

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Megaphone,
  Globe,
  Smartphone,
  Headset,
  Network,
  Shield,
  Gamepad2,
  Code2,
  ClipboardList,
  Wrench,
  ShieldCheck,
  Terminal,
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const { tr } = useLanguage()
  const Icon = iconMap[group.icon] ?? Code2
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold text-foreground">{tr(group.title)}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {group.skills.map((skill, i: number) => (
          <span
            key={i}
            className="rounded border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {tr(skill)}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ exp }: { exp: Experience }) {
  const { tr } = useLanguage()
  const Icon = iconMap[exp.icon] ?? Terminal
  const levelColor =
    exp.level === 'BTEC Level 3'
      ? 'text-primary ring-primary/40 bg-primary/10'
      : exp.level === 'BTEC Level 2'
        ? 'text-[oklch(0.72_0.14_220)] ring-[oklch(0.72_0.14_220)]/40 bg-[oklch(0.72_0.14_220)]/10'
        : 'text-[oklch(0.8_0.15_85)] ring-[oklch(0.8_0.15_85)]/40 bg-[oklch(0.8_0.15_85)]/10'
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted/60 text-primary">
            <Icon className="h-4 w-4" />
          </span>
          <h3 className="text-base font-semibold text-foreground">{tr(exp.title)}</h3>
        </div>
        <span
          className={`shrink-0 rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ring-1 ${levelColor}`}
        >
          {exp.level}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {tr(exp.description)}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
        {exp.tags.map((tag, i: number) => (
          <span
            key={i}
            className="rounded border border-primary/25 bg-primary/5 px-2 py-0.5 font-mono text-[10px] text-primary"
          >
            {tr(tag)}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function DeveloperPage() {
  const { t, tr } = useLanguage()

  return (
    <div className="flex flex-col gap-10">
      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex flex-col gap-6 p-6 md:p-8">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-2 ring-primary/30">
              <User className="h-10 w-10" />
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance md:text-3xl">
                {tr(developer.name)}
              </h1>
              <p className="font-mono text-sm text-primary">{tr(developer.title)}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {tr(developer.location)}
                </span>
                <a
                  href={`mailto:${developer.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {developer.email}
                </a>
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {developer.githubHandle}
                </a>
              </div>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
            {tr(developer.bio)}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <GraduationCap className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {t('developer_education')}
          </h2>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-foreground">
                  {tr(education.degree)}
                </h3>
                <p className="text-sm text-muted-foreground">{tr(education.institution)}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                  <span>{tr(education.period)}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    {tr(education.location)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Brain className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {t('developer_skills')}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group: SkillGroup) => (
            <SkillGroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <BookOpen className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {t('developer_experience')}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {experiences.map((exp: Experience) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
            <Mail className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {t('developer_contact')}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${developer.email}`}
            className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/60 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">Email</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {developer.email}
                </span>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
          <a
            href={developer.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/60 text-primary">
                <ExternalLink className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">GitHub</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {developer.githubHandle}
                </span>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </div>
      </section>
    </div>
  )
}