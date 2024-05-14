import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {}

const Container = (props: ContainerProps) => {
  return (
    <div className={cn("container mt-8", props.className)}>
      {props.children}
    </div>
  );
};

export { Container };
