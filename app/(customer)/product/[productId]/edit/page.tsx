import { requiredCurrentUser } from "@/auth/current-user";
import { Container } from "@/components/layout/section";
import prisma from "@/db";
import type { PageParams } from "@/types/next";
import { notFound } from "next/navigation";
import ProductForm from "./ProductForm";

const RoutePage = async (props: PageParams<{ productId: string }>) => {
  const user = await requiredCurrentUser();

  const product = await prisma.product.findUnique({
    where: {
      id: props.params.productId,
      userId: user.id,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <ProductForm defaultValues={product} />
    </Container>
  );
};

export default RoutePage;
