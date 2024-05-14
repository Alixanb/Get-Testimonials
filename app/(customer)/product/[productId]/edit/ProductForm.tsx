"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createProductAction } from "./product.action";
import {
  GRADIENTS_CLASSES,
  ProductSchema,
  ProductType,
} from "./product.schema";

export interface ProductFormProps {
  defaultValues?: ProductType;
}

const ProductForm = (props: ProductFormProps) => {
  const form = useZodForm({
    schema: ProductSchema,
    defaultValues: props.defaultValues,
  });

  const isCreate = !props.defaultValues;
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: ProductType) => {
      const { data, serverError } = await createProductAction(values);

      if (serverError || !data || !("id" in data)) {
        toast.error(serverError);
        return;
      }

      toast.success("Product created");
      router.push(`/product/${data.id}`);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Create product"
            : `Edit product ${props.defaultValues?.name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          form={form}
          onSubmit={async (values) => {
            await mutation.mutateAsync(values);
          }}
          className="flex flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Iphone 15" {...field} />
                </FormControl>
                <FormDescription>
                  The name of the product to review
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backgroundColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Color</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a gradient background"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {/* <SelectGroup> */}
                      {GRADIENTS_CLASSES.map((gradient) => (
                        <SelectItem key={gradient} value={gradient}>
                          <span
                            className={cn(
                              gradient,
                              "w-80 h-8 block rounded-md"
                            )}
                          ></span>
                        </SelectItem>
                      ))}
                      {/* </SelectGroup> */}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>The background of you product</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="self-start px-8">
            {isCreate ? "Create product" : "Edit product"}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
