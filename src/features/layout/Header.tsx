import React from "react";
import SigninButton from "../auth/SigninButton";
import LoggedInButton from "../auth/LoggedInButton";
import Image from "next/image";
import { ModeToggle } from "../theme/ModeToggle";

const Header = async () => {
  return (
    <header className="w-full border-b border-border py-1 container">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Image
            src="/icon.png"
            alt="Get testimonials"
            width={48}
            height={48}
          />
        </div>
        <div className="flex gap-4">
          <LoggedInButton />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export { Header };
