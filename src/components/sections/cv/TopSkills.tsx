import { SidebarSection } from "./SidebarSection";
import { SkillPills } from "./SkillPills";

/** Sidebar "Top skills" block of the A4 sheets: white pills, one per line, full width. */
export function TopSkills({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <SidebarSection title={title} className="break-inside-avoid">
      <SkillPills items={items} layout="stack" />
    </SidebarSection>
  );
}
