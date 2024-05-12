import { Header } from "@/features/layout/Header";
import { LayoutParams } from "@/types/next";
import React from "react";

const RouteLayout = async (props: LayoutParams<{}>) => {
  return (
    <div className="h-full">
      <Header />
      {props.children}
    </div>
  );
};

export default RouteLayout;
