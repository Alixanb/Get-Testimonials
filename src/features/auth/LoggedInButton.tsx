import { auth } from "@/auth/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LoggedInDropdown } from "./LoggedInDropdown";
import SigninButton from "./SigninButton";

const LoggedInButton = async () => {
  const session = await auth();

  if (!session?.user) return <SigninButton />;

  return (
    <LoggedInDropdown>
      <Button variant="outline" size="sm">
        <Avatar className="size-6">
          <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
          {session.user.image && (
            <AvatarImage
              src={session.user.image}
              alt={(session.user.name as string) + "'s rofile picture"}
            ></AvatarImage>
          )}
        </Avatar>
      </Button>
    </LoggedInDropdown>
  );
};

export default LoggedInButton;
