import { 
  Users, 
  LayoutDashboard, 
  Settings
} from 'lucide-react';
import cn from "../../lib/utils";

export default function Sidebar() {
  const SidebarItem = ({
    icon: Icon,
    label,
    active,
    onClick}: {
      icon:any,
      label:string,
      active?:boolean,
      onClick?:() => void
  }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group text-sm font-medium",
      active 
        ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600" 
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    )}
  >
    <Icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", active ? "text-white" : "text-slate-400 group-hover:text-blue-600")} />
    <span>{label}</span>
  </button>
);

    return (
    <div className="w-64 bg-white border-r">
      <div className="p-6 font-bold text-lg">TLM Harbas</div>
        <a className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 text-blue-600">
          <LayoutDashboard className="w-5 h-5" />Dashboard
        </a>
        <a className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
          <Users className="w-5 h-5" />Users
        </a>
        <a className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
          <Settings className="w-5 h-5" />Setting
        </a>
    </div>
  );
}
