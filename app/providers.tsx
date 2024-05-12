import { ThemeProvider } from "@/features/theme/ThemeProvider";
import React, { PropsWithChildren } from "react";
import { Toaster } from "sonner";

const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {props.children}
    </ThemeProvider>
  );
};

export default Providers;
