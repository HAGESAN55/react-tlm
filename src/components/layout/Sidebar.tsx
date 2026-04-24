import { 
  Users, 
  LayoutDashboard, 
  Settings,
  ClipboardList
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import cn from "../../lib/utils";
  type Props = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
  };

export default function Sidebar( { collapsed }: Props) {

   return (
   <aside
    className={`shrink-0 bg-white border-r border-gray-200 transition-all duration-100 ${
      collapsed ? "w-20" : "w-64"
    }`}
    >
      <div className="p-6 font-bold">
        {collapsed ? "TLM" : "TLM Harbas"}
      </div>

      <nav className="px-4 space-y-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink
          to="/Pasien"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Users className="w-5 h-5" />
          {!collapsed && <span>Pasien</span>}
        </NavLink>

        <NavLink
          to="/Pemeriksaan"
          className={({ isActive }) => 
            `flex item-center gap-2 p-2 rounded-lg transition ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
        >
          <ClipboardList className="w-5 h-5" />
          {!collapsed && <span>Pemeriksaan</span>}
        </NavLink>



        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Settings className="w-5 h-5" />
          {!collapsed && <span>Settings</span>}
        </NavLink>

      </nav>
    </aside>
  );
}