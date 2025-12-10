import * as React from "react";

interface ProjCardProps {
  id: string;
  projName: string;
  projDesc: string;
  userContact: string;
  fieldOfInterest: string;
}

const ProjCard: React.FC<ProjCardProps> = ({
  projName,
  projDesc,
  userContact,
  fieldOfInterest,
}) => {
  return (
    <div className="w-full rounded-xl border p-6 shadow-md transition hover:shadow-lg md:p-8">
      <div className="mb-2 flex items-center">
        <div className="inline-block w-full whitespace-pre-wrap break-words text-left leading-[1.3] opacity-80">
          {projName}
        </div>
      </div>

      <div className="text-sm italic text-gray-500 text-pretty">{projDesc}</div>
      <p className="text-sm mt-2 text-wrap opacity-40">{userContact}</p>
      <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
        {fieldOfInterest}
      </span>
    </div>
  );
};

export default ProjCard;
