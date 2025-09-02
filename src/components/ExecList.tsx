import ExecCard from "./ExecCard";

interface Team {
  name: string;
  role: string;
  link: string;
  headshot: string;
}

interface Props {
  listHeader: string;
  listType: Team[];
}
const ExecList = ({ listHeader, listType }: Props) => {
  return (
    <div className="mb-10">
      <h3 className="font-dosis font-light text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-3 bg-green-900">
        {listHeader.toUpperCase()}
      </h3>
      <div className="max-w-7xl mx-auto pt-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listType.map((exec) => (
          <ExecCard
            key={exec.name}
            name={exec.name}
            role={exec.role}
            link={exec.link}
            headshot={exec.headshot}
          />
        ))}
      </div>
    </div>
  );
};

export default ExecList;
