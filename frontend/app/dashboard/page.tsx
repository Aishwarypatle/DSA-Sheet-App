"use client";

import { useState } from "react";
import useAuth from "@/hooks/useAuth";

import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import TopicsSection from "@/components/TopicsSection";
import ProgressSection from "@/components/ProgressSection";

import { useGetProblemsQuery } from "@/redux/api/problemApi";
import { useGetProgressQuery } from "@/redux/api/progressApi";

export default function Dashboard() {
  useAuth();

  const [active, setActive] = useState("profile");

  const { data: problems = [] } = useGetProblemsQuery();
  const { data: progress = [] } = useGetProgressQuery();

  const completedSet = new Set(progress.map((p) => p.problemId));

  const renderSection = () => {
    switch (active) {
      case "topics":
        return (
          <TopicsSection
            problems={problems}
            completedSet={completedSet}
          />
        );

      case "progress":
        return (
          <ProgressSection
            completed={progress.length}
            total={problems.length}
          />
        );

      default:
        return (
          <ProfileSection
            completed={progress.length}
            total={problems.length}
          />
        );
    }
  };

  return (
    <div>
      <Navbar active={active} setActive={setActive} />

      <div className="bg-gray-100 min-h-screen">
        {renderSection()}
      </div>
    </div>
  );
}