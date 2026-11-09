import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { labels } from "@/content/labels";
import { resume } from "@/content/resume";

/** Role title without the unit suffix ("Head of Data – Applications, …" → "Head of Data"). */
function shortRole(role: string): string {
  return role.split(/ – |, /)[0] ?? role;
}

/** Roles from oldest to newest as connected steps (scrolls sideways on small screens). */
export function CareerPath() {
  const steps = [...resume.experience].reverse();
  return (
    <div className="mt-16">
      <h3 className="font-display text-xl font-bold">{labels.careerPath}</h3>
      <ol className="mt-8 flex snap-x [scrollbar-width:thin] gap-0 overflow-x-auto pb-4">
        {steps.map((job, i) => {
          const current = !job.end;
          return (
            <li
              key={`${job.company}-${job.start}`}
              className="relative w-44 shrink-0 snap-start pr-4 lg:w-auto lg:min-w-0 lg:flex-1"
            >
              {/* connector, through the middle of the logo tiles */}
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="absolute top-5 left-5 h-0.5 w-full bg-line" />
              )}
              <CompanyLogo
                company={job.company}
                logo={job.companyLogo}
                size="sm"
                className={`relative ${current ? "ring-2 ring-warm" : ""}`}
              />
              <p className="mt-4 font-display text-2xl font-bold text-title lg:text-xl xl:text-2xl">
                {job.start.slice(0, 4)}
              </p>
              <p className="mt-1 text-sm leading-snug font-semibold text-pretty lg:text-[0.8rem] xl:text-sm">
                {shortRole(job.role)}
              </p>
              <p className="mt-0.5 text-sm text-muted lg:text-[0.8rem] xl:text-sm">{job.company}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
