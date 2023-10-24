import Image from "next/image";

export default function Card(props: {
  icon: any;
  title: any;
  score: any;
  bg?: string;
  color?: string;
}) {
  let icon = props.icon;
  let title = props.title;
  let score = props.score;
  let bg = props.bg ? props.bg : "bg-red-100";
  let color = props.color ? props.color : "text-red-800";

  return (
    <div
      className={`relative flex flex-row place-content-between ${bg} px-4 py-4 rounded-xl border-separate shadow-sm`}
    >
      {/* <div
          className={`rounded-xl bg-black h-full w-full absolute top-0 left-0 -z-10  `}
        ></div> */}

      <div className="flex flex-row items-center gap-1">
        <Image src={icon} width={20} height={20} alt={`${title} icon`} />
        <p className={`font-medium  ${color}`}>{title}</p>
      </div>
      <div className="flex flex-row gap-1 text-black">
        <p className="font-bold">{score}</p>
        <p> / 100</p>
      </div>
    </div>
  );
}
