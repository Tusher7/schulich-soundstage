import { execs, legacyExecs } from "../../constants";
import ExecList from "../ExecList";
import logo from "../../assets/soundstage-logo-white-no-text.png";
const ExecutiveTeam = () => {
  return (
    <>
      <h1 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-23">
        SCHULICH SOUNDSTAGE{" "}
      </h1>
      <ExecList listHeader="EXECUTIVE TEAM" listType={execs} />
      <ExecList listHeader="Legacy EXECUTIVES" listType={legacyExecs} />
    </>
  );
};

export default ExecutiveTeam;
