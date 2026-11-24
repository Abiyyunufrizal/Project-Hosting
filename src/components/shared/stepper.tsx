import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-start justify-center gap-3">
      {steps.map((s, i) => {
        const done = i < current;
        return (
          <div key={s} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <CheckCircle2 className={cn("h-6 w-6", done ? "text-emerald-500" : "text-slate-300")} />
              <p className={cn("mt-1 text-sm font-semibold", done ? "text-slate-800" : "text-slate-400")}>{s}</p>
            </div>
            {i < steps.length - 1 && (
              <div className={cn("mt-3 h-0.5 w-14 sm:w-28", done ? "bg-emerald-500" : "bg-slate-200")} />
            )}
          </div>
        );
      })}
    </div>
  );
}
