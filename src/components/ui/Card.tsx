import * as React from "react";

type Props = {
  title: string;
  value: string; 
  icon?: React.ReactNode;
};

export default function Card({ title, value, icon }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <div>
        <p className="text-gray-500 text-sm">{title}{icon}</p>
        <h2 className="text-2xl font-bold mt-2">{value}</h2>
      </div>
    </div>
  );
}