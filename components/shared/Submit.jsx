"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Spinner from "./Spinner";

function Submit({
  title = "حفظ",
  w = "w-6/12",
  color = "bg-primary",
  icon = <Send size={18} />,
  textColor = "text-primary-foreground",
  isDisabled = false,

  ...props
}) {
  const status = useFormStatus();
  return (
    <Button
    disabled={status.pending || isDisabled}
      className={`${w} flex items-center justify-center gap-4  font-tajwal font-bold   ${textColor}  ${color}`}
    >
      {status.pending ? (
        <div className={`flex items-center justify-center gap-2 ${textColor}`}>
          <span>جاري الحفظ..</span>
          <Spinner />
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2 ">
          <span>{title}</span>
          {icon}
        </div>
      )}
    </Button>
  );
}

export default Submit;
