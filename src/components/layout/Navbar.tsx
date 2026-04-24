import { Menu, ChevronLeft } from 'lucide-react';

type Props = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

function Navbar({ collapsed, setCollapsed }: Props) {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <Menu className="w-5 h-5" />
      </button>
      <div className="text-sm text-gray-600">Admin</div>
    </div>
  );
}

export default Navbar;