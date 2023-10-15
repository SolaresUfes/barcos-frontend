import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { removeInfoCollection } from "../firebase/functions/firestore";


interface PilotProps {
    name: string;
    ID: string;
  }


interface PilotsCardProps {
    pilots: PilotProps[];
    addNewPilot: () => void;
  }
  

export function PilotsCard({ pilots, addNewPilot }: PilotsCardProps) {
    return (
        <div className="bg-slate flex flex-col max-w-full h-1/2 rounded-md shadow-xl p-4">
          <div className="w-full flex items-center justify-center border-b-2">
            <h1 className="text-xl font-semibold">Pilotos autorizados</h1>
            <AiOutlineUserAdd 
              className=" ml-2 cursor-pointer" 
              color="blue" 
              size={20}
              onClick={addNewPilot}
            />
          </div>
    
          <div className="flex flex-col justify-between mb-2 mt-4 gap-4 overflow-y-scroll">
            {pilots?.map((pilot: PilotProps) => (
              <div className="flex flex-row w-full justify-between border-blue-200 border-b-2" key={pilot.ID}>
              <p className="text-sm font-semibold">{pilot.name}</p>
              <RiDeleteBin6Line
                className="self-center ml-2 cursor-pointer"
                onClick={
                  async () => {
                    await removeInfoCollection('pilots', pilot.ID)
                  }
                }
              />
            </div>
            ))}
          </div>
        </div>
      );

    }
    
export function arrayPilots(pilots: PilotProps[]) {
  const arrayPilots: string[] = [];
  pilots.forEach((pilot) => {
    arrayPilots.push(pilot.name);
  })
  return arrayPilots;
}