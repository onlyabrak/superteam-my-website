import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Member } from "@/types/database";

interface MemberCardProps {
  member: Member;
}

const skillVariants: Record<string, "purple" | "green" | "yellow" | "blue" | "red" | "default"> = {
  Rust: "purple",
  TypeScript: "blue",
  React: "blue",
  Security: "red",
  Anchor: "purple",
  Design: "green",
  Figma: "green",
  Frontend: "blue",
  Community: "yellow",
  Marketing: "yellow",
  Events: "green",
  Education: "green",
  Operations: "yellow",
  Writing: "blue",
  Strategy: "purple",
  Growth: "green",
  Product: "blue",
  Content: "yellow",
};

const roleLabels: Record<string, { label: string; variant: "purple" | "green" | "yellow" | "blue" }> = {
  developer: { label: "Developer", variant: "purple" },
  designer: { label: "Designer", variant: "green" },
  community: { label: "Community", variant: "yellow" },
  educator: { label: "Educator", variant: "blue" },
  operations: { label: "Operations", variant: "yellow" },
  "core-team": { label: "Core Team", variant: "purple" },
  member: { label: "Member", variant: "default" as "blue" },
};

export function MemberCard({ member }: MemberCardProps) {
  const roleInfo = roleLabels[member.role] ?? { label: member.role, variant: "default" as "blue" };

  return (
    <Card variant="glass" hover padding="lg" className="h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <Avatar src={member.avatar_url} alt={member.name} size="lg" />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-base truncate">{member.name}</h3>
          {member.title && (
            <p className="text-sm text-white/40 truncate">{member.title}</p>
          )}
          {member.company && (
            <p className="text-xs text-white/30 truncate">{member.company}</p>
          )}
          <Badge variant={roleInfo.variant} className="mt-1.5">
            {roleInfo.label}
          </Badge>
        </div>
        {member.twitter_handle && (
          <a
            href={`https://twitter.com/${member.twitter_handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-1.5 text-white/30 hover:text-sol-purple transition-colors"
            aria-label={`${member.name} on X`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        )}
      </div>

      {member.bio && (
        <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2 flex-1">
          {member.bio}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {member.skills.map((skill) => (
          <Badge key={skill} variant={skillVariants[skill] ?? "default"}>
            {skill}
          </Badge>
        ))}
      </div>

      {member.achievements.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
          {member.achievements.map((achievement) => (
            <span
              key={achievement}
              className="inline-flex items-center gap-1 text-xs text-my-yellow/80"
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {achievement}
            </span>
          ))}
        </div>
      )}

      {member.badges.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
          {member.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1 text-xs text-sol-green/80"
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}
