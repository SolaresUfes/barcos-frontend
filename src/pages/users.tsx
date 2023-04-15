import React, { useEffect, useState } from "react";
import { UsersCard } from "@/components/UsersCard";
import { getAllInfoCollectionRealTime, saveInfoCollection } from "@/firebase/functions/firestore";
import { AlertAddEmail } from "@/utils/popups";

export default function Users() {
  const [users, setUsers] = useState<any>([]);
  
  useEffect(() => {
    getAllInfoCollectionRealTime('users', setUsers);
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center py-2">
      <UsersCard 
        users={users}
        addNewUser={() => AlertAddEmail(saveInfoCollection)}
      />
    </div>
  );
}