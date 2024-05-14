"use client";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

const Providers = (props: PropsWithChildren) => {
  const queryClient = new QueryClient();
  console.log("client", queryClient);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {props.children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
