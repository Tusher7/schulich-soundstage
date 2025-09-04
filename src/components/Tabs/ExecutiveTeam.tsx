import { execs, legacyExecs, teamLeads } from "../../constants";
import ExecList from "../ExecList";
import LeaderCard from "../LeaderCard";
const ExecutiveTeam = () => {
  const descriptionPresident =
    "From VP Events (2022–24) to Vice President (2023–24), Mateo now leads Soundstage as President (2025–26), bringing years of experience and passion to the role.";
  const descriptionVP =
    "Atharva joined Soundstage as VP Gigs in October 2024, helping coordinate performances and events. Now serving as Vice President (2025–26), he’s excited to bring fresh energy and support to the team.";
  return (
    <>
      <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-23">
        SCHULICH SOUNDSTAGE{" "}
      </h1>
      <h2 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-10 bg-red-800 mb-23 ">
        LEADERSHIP TEAM
      </h2>
      <div className="flex gap-4 mb-35 items-stretch">
        <div>
          <LeaderCard
            name="Mateo"
            heading="President - MATEO OVERDULVE"
            description={descriptionPresident}
            headshot="src/assets/exec-headshots/mateo headshot.jpg"
          />
        </div>
        <div>
          <LeaderCard
            name="Mateo"
            heading="Vice President - ATHARVA MOHANDAS"
            description={descriptionVP}
            headshot="src/assets/exec-headshots/atharva headshot.png"
          />
        </div>
      </div>
      <ExecList listHeader="TEAM LEADS" listType={teamLeads} />
      <ExecList listHeader="EXECUTIVE TEAM" listType={execs} />
      <ExecList listHeader="Legacy EXECUTIVES" listType={legacyExecs} />
    </>
  );
};

export default ExecutiveTeam;
