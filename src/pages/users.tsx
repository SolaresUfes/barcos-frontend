import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<any>([]);
  
  useEffect(() => {
    // getAllInfoCollectionRealTime('users', setUsers);
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center py-2">
      {/* <UsersCard 
        users={users}
        addNewUser={() => {}}
      /> */}
    </div>
  );
}