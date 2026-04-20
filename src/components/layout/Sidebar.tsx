import { 
  Users, 
  LayoutDashboard, 
  Settings
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import cn from "../../lib/utils";

export default function Sidebar() {

   return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 font-bold">TLM Harbas</div>

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
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Users className="w-5 h-5" />
          Users
        </NavLink>

      </nav>
    </aside>
  );
}