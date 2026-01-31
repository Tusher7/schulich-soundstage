import { execs, legacyExecs, teamLeads } from "../../constants";
import ExecList from "../ExecList";
import LeaderCard from "../LeaderCard";
import { Reveal } from "../Reveal";

const ExecutiveTeam = () => {
  const descriptionPresident =
    "From VP Events (2022–24) to Vice President (2023–24), Mateo now leads Soundstage as President (2025–26), bringing years of experience and passion to the role.";
  const descriptionVP =
    "Atharva joined Soundstage as VP Gigs in October 2024, helping coordinate performances and events. Now serving as Vice President (2025–26), he’s excited to bring fresh energy and support to the team.";
  return (
    <>
      <Reveal>
        <div className="flex justify-center items-center gap-4 mt-10">
          <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-23">
            SCHULICH SOUNDSTAGE{" "}
          </h1>
        </div>
        <h2 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-10 bg-red-800 mb-23 ">
          LEADERSHIP TEAM
        </h2>

        <div className="flex gap-4 mb-35 items-stretch">
          <div>
            <LeaderCard
              name="Mateo"
              heading="President - MATEO OVERDULVE"
              description={descriptionPresident}
              headshot="src/assets/exec-headshots/mateo headshot.webp"
              href="https://www.linkedin.com/search/results/all/?keywords=mateo&origin=GLOBAL_SEARCH_HEADER&sid=TLi"
            />
          </div>

          <div>
            <LeaderCard
              name="Atharva"
              heading="Vice President - ATHARVA MOHANDAS"
              description={descriptionVP}
              headshot="src/assets/exec-headshots/atharva headshot.webp"
              href="https://www.linkedin.com/in/atharva-mohandas-97aa0034a/"
            />
          </div>
        </div>
      </Reveal>
      <ExecList listHeader="TEAM LEADS" listType={teamLeads} />
      <ExecList listHeader="EXECUTIVE TEAM" listType={execs} />
      <ExecList listHeader="EXECUTIVE ALUMNI" listType={legacyExecs} />
    </>
  );
};

export default ExecutiveTeam;
