// components/Notice.tsx
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdCheckCircle, MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

type NoticeType = "info" | "success" | "danger";

interface NoticeProps {
  type?: NoticeType;
  message: string;
}

const styles = {
  info: {
    container: "bg-blue-900/60 border-blue-200 text-blue-200",
    icon: <FaInfoCircle className="text-blue-200" />,
  },
  success: {
    container: "bg-green-900/60 border-green-200 text-green-200",
    icon: <MdCheckCircle className="text-green-200" />,
  },
  danger: {
    container: "bg-red-900/60 border-red-200 text-red-200",
    icon: <IoIosWarning className="text-red-200 scale-110" />,
  },
};

const Notice: React.FC<NoticeProps> = ({ type = "info", message }) => {
  const style = styles[type];

  return (
    <div
      className={`mt-7 py-2 px-3 border rounded-full flex flex-row gap-2 justify-start items-center text-xs ${style.container}`}
    >
      {style.icon}
      <p className="text-left">{message}</p>
    </div>
  );
};

export default Notice;
