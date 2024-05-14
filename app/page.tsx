import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Test
      <Button>Test</Button>
      <Link href="/product/">See products</Link>
    </div>
  );
}
