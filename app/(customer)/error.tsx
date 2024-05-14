"use client";

import SigninButton from "@/features/auth/SigninButton";
import { Card, CardFooter, CardHeader, CardTitle } from "@components/ui/card";

export default function RouteError() {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>
            Sorry, you need to be logged in to view this page.
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <SigninButton />
        </CardFooter>
      </Card>
    </div>
  );
}
