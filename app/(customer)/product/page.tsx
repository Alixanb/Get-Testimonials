import { requiredCurrentUser } from "@/auth/current-user";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/db";
import { PageParams } from "@/types/next";
import Link from "next/link";

const RoutePage = async (props: PageParams<{}>) => {
  const user = await requiredCurrentUser();

  const products = await prisma.product.findMany({
    where: { userId: user.id },
  });

  return (
    <div className="container">
      <h1 className="font-bold text-lg">Products</h1>
      <Card className="p-4">
        {products.length ? (
          <Table>
            <TableHeader>
              <TableHead>Name</TableHead>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Link
            href="/product/new"
            className="border-2 flex justify-center hover:bg-accent/40 transition-colors border-dashed font-semibold border-primary p-8 text-lg rounded-lg  w-full"
          >
            Create product
          </Link>
        )}
      </Card>
    </div>
  );
};

export default RoutePage;
