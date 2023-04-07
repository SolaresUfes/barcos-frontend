import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FiLogOut, FiSquare, FiCircle } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
// import { handleLogout } from '../firebase/functions/auth';
import { useWindowSize } from '../utils/screen';

interface SidebarProps {
  menus?: {
    name: string;
    href: string;
    icon: React.ComponentType<{ size: string }>;
  }[];
  display?: boolean;
  isRecord?: boolean;
  setIsRecord?: () => void;
}

export function Sidebar({ menus, display, isRecord=false, setIsRecord }: SidebarProps) {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    width > 768 ? setOpen(true) : setOpen(false);
  }, [width]);
  

  if (!display) return null;
  

  return (
    <div className={`fixed z-10 bg-blue-950 min-h-screen ${open ? 'w-52' : 'w-16'} duration-500 text-gray-100 px-4  shadow-2xl overflow-y-auto`} >
      <div className='py-3 flex justify-end'>
        <HiMenuAlt3
          className='cursor-pointer text-white text-2xl'
          onClick={() => setOpen(!open)}
        />
      </div>

      <div
        title="Gravar corrida"
        className={`w-5/6 group flex items-center text-sm gap-3 font-medium p-1 rounded-md transition duration-200 hover:bg-gray-700 cursor-pointer ${isRecord ? 'text-red-500' : 'text-green-500'}`}
        onClick={setIsRecord}
      >
        <div>
          { isRecord ? <FiSquare size='20' /> : <FiCircle size='20' /> }
        </div>
        <h2
          style={{ transitionDelay: `100ms` }}
          className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
        >
          {isRecord ? 'Parar gravação' : 'Gravar corrida'}
        </h2>
      </div>

      <div className='mt-4 flex flex-col gap-4 relative'>
        {
          menus?.map((menu, index) => (
            <Link
              href={menu?.href}
              key={index}
              title={!open ? menu?.name : undefined}
              className={`group flex items-center text-sm gap-3 font-medium p-1 transition duration-200 hover:bg-gray-700 rounded-md ${router.pathname === menu?.href && 'bg-gray-900'}`}
            >
              <div>
                {React.createElement(menu?.icon, { size: '20' })}
              </div>
              <h2
                style={{ transitionDelay: `${index + 3}00ms` }}
                className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))
        }
      </div>
      <div
        title="Deslogar"
        className={`absolute bottom-4 w-5/6 group flex items-center text-sm gap-3 font-medium p-1 rounded-md transition duration-200 hover:bg-gray-700 cursor-pointer`}
        onClick={
          () => {
            // handleLogout();
            router.push('/');
          }
        }
      >
        <div>
          {React.createElement(FiLogOut, { size: '20' })}
        </div>
        <h2
          style={{ transitionDelay: `100ms` }}
          className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
        >
          Deslogar
        </h2>
      </div>
    </div>
  )
}
