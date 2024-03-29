import { AiOutlineBarChart, AiOutlineUser } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { GiShipWheel } from "react-icons/gi";
import { FaFolderPlus } from "react-icons/fa";

export const menus = [
  { name: "Home", href: "/", icon: AiOutlineHome },
  { name: "Usuários", href: "/users", icon: AiOutlineUser },
  { name: "Pilotos", href: "/pilots", icon: GiShipWheel },
  { name: "Upload", href: "/uploader_files", icon: FaFolderPlus },
  { name: "Histórico", href: "/files", icon: FiFolder },
  { name: "Relatórios", href: "/relatorios", icon: AiOutlineBarChart },
];
