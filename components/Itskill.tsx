import { Progress } from "./ui/progress";
const skills = [
  {
    title: "Skills 1",
    progress: "97",
  },
  {
    title: "Skills 2",
    progress: "87",
  },
  {
    title: "Skills 3",
    progress: "68",
  },
  {
    title: "Skills 4",
    progress: "88",
  },
  {
    title: "Skills 5",
    progress: "55",
  },
  {
    title: "Skills 6",
    progress: "77",
  },
  {
    title: "Skills 8",
    progress: "66",
  },
];

const Itskill = () => {
  return (
    <div className="mt-8">
      <div className="items-center justify-between inline-block w-full">
        {skills.map((item, index) => (
          <div
            className="text-[22px] font-bold md:flex items-center justify-between inline-block mt-16"
            key={index}
          >
            <span className="">{item.title}</span>
            <div className="w-[440px]">
              <Progress value={item.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itskill;
