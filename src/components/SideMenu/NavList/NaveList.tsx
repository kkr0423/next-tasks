import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NaveList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "AllTasks",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "ComletedTasks",
      link: "/completed",
      icon: <FaRegCheckSquare className="size-5" />,
    },
    {
      id: 3,
      label: "ExpiredTasks",
      link: "/expired",
      icon: <FaRegClock className="size-5" />,
    },
  ];

  return (
    <div className="mt-24">
      {navList.map(({ id, label, link, icon }) => (
        <NavItem key={id} label={label} link={link} icon={icon} />
      ))}
    </div>
  );
};

export default NaveList;
