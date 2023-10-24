import { promises as fs } from "fs";
import Card from "./components/card";

export interface Data {
  category: string;
  score: number;
  icon: string;
}

export default async function GetData() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data: Array<Data> = JSON.parse(file);
  return data;
}
//   return (
//     <div className="flex flex-col gap-4">
//       {data.map((item) => {
//         const bg = (() => {
//           switch (item.category) {
//             case "Reaction":
//               return "bg-[#ff5757]/10";
//             case "Memory":
//               return "bg-[#ffb01f]/10";
//             case "Verbal":
//               return "bg-[#00bd91]/10";
//             case "Visual":
//               return "bg-[#1125d4]/10";
//             default:
//               return "bg-[#ff5757]/10";
//           }
//         })();

//         const color = (() => {
//           switch (item.category) {
//             case "Reaction":
//               return "text-[#ff5757]";
//             case "Memory":
//               return "text-[#ffb01f]";
//             case "Verbal":
//               return "text-[#00bd91]";
//             case "Visual":
//               return "text-[#1125d4]";
//             default:
//               return "text-[#ff5757]";
//           }
//         })();

//         return (
//           <Card
//             key={item.category}
//             icon={item.icon}
//             score={item.score}
//             title={item.category}
//             bg={bg}
//             color={color}
//           />
//         );
//       })}
//     </div>
//   );
// }
