"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchInput } from "@/components/ui/search-input";
import { Badge } from "@/components/ui/badge";
import { MemberCard } from "./member-card";
import { MembersGridSkeleton } from "./members-skeleton";
import type { Member } from "@/types/database";

interface MembersGridProps {
  members: Member[];
}

const ROLES = ["all", "developer", "designer", "community", "educator", "operations", "core-team"] as const;

const SKILL_CATEGORIES = [
  "All Skills",
  "Rust",
  "TypeScript",
  "React",
  "Frontend",
  "Design",
  "Security",
  "Anchor",
  "Community",
  "Marketing",
  "Content",
  "Growth",
  "Product",
  "Education",
  "Operations",
] as const;

export function MembersGrid({ members }: MembersGridProps) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [skillFilter, setSkillFilter] = useState<string>("All Skills");
  const [sortBy, setSortBy] = useState<"name" | "newest">("name");

  const filtered = useMemo(() => {
    let result = members;

    // Search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.bio?.toLowerCase().includes(q) ||
          m.skills.some((s) => s.toLowerCase().includes(q)) ||
          m.title?.toLowerCase().includes(q) ||
          m.company?.toLowerCase().includes(q),
      );
    }

    // Role filter
    if (roleFilter !== "all") {
      result = result.filter((m) => m.role === roleFilter);
    }

    // Skill filter
    if (skillFilter !== "All Skills") {
      result = result.filter((m) =>
        m.skills.some((s) => s.toLowerCase() === skillFilter.toLowerCase()),
      );
    }

    // Sort
    if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result = [...result].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
    }

    return result;
  }, [members, search, roleFilter, skillFilter, sortBy]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search members, skills, company..."
            className="flex-1"
          />
          <div className="flex gap-2">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="h-10 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white appearance-none cursor-pointer hover:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {ROLES.map((role) => (
                <option key={role} value={role} className="bg-background">
                  {role === "all" ? "All Roles" : role === "core-team" ? "Core Team" : role.charAt(0).toUpperCase() + role.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              className="h-10 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white appearance-none cursor-pointer hover:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {SKILL_CATEGORIES.map((skill) => (
                <option key={skill} value={skill} className="bg-background">
                  {skill}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "newest")}
              className="h-10 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white appearance-none cursor-pointer hover:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="name" className="bg-background">Name A-Z</option>
              <option value="newest" className="bg-background">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-white/40 mb-6">
        {filtered.length} member{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((member) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40 text-lg">No members found matching your criteria.</p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setRoleFilter("all");
              setSkillFilter("All Skills");
            }}
            className="mt-4 text-sm text-sol-purple hover:text-sol-purple/80 transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

export { MembersGridSkeleton };
