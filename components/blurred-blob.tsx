import { cn } from "@/lib/utils";

export function BlurredBlob({
  className,
  colorFrom,
  colorTo,
}: {
  className?: string;
  colorFrom: string;
  colorTo: string;
}) {
  const background = `linear-gradient(${colorFrom}, ${colorTo})`;
  const borderRadius = "30% 70% 70% 30%/30% 30% 70% 70%";

  return (
    <div
      className={cn(
        "absolute inset-0 z-[-1] w-full h-full blur-[70px] animate-[rotate_8s_linear_infinite]",
        className,
      )}
      style={{
        backgroundImage: background,
        borderRadius,
      }}
    />
  );
}
