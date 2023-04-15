import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { removeInfoCollection } from "../firebase/functions/firestore";

interface UserProps {
  email: string;
  ID: string;
}

interface UsersCardProps {
  users: UserProps[];
  addNewUser: () => void;
}

export function UsersCard({ users, addNewUser }: UsersCardProps) {
  return (
    <div className="bg-white flex flex-col max-w-full h-1/2 rounded-md shadow-xl p-4">
      <div className="w-full flex items-center justify-center border-b-2">
        <h1 className="text-xl font-semibold">Usuários autorizados</h1>
        <AiOutlineUserAdd 
          className=" ml-2 cursor-pointer" 
          color="blue" 
          size={20}
          onClick={addNewUser}
        />
      </div>

      <div className="flex flex-col justify-between mb-2 mt-4 gap-4 overflow-y-scroll">
        {users?.map((user: UserProps) => (
          <div className="flex flex-row w-full justify-between border-blue-200 border-b-2" key={user.ID}>
          <p className="text-sm font-semibold">{user.email}</p>
          <RiDeleteBin6Line
            className="self-center ml-2 cursor-pointer"
            onClick={
              async () => {
                await removeInfoCollection('users', user.ID)
              }
            }
          />
        </div>
        ))}
      </div>
    </div>
  );
}