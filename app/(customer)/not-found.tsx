"use client";

import { Container } from "@/components/layout/section";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SigninButton from "@/features/auth/SigninButton";

export default function RouteError() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Proudct not found</CardTitle>
          <CardDescription>
            The product may have been deleted or you don&apos;t have permission
            to access it.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <SigninButton />
        </CardFooter>
      </Card>
    </Container>
  );
}
