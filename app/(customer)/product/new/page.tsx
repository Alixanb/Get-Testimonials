import { Container } from "@/components/layout/section";
import type { PageParams } from "@/types/next";
import ProductForm from "../[productId]/edit/ProductForm";

const RoutePage = async (props: PageParams<{}>) => {
  return (
    <Container>
      <ProductForm />
    </Container>
  );
};

export default RoutePage;
