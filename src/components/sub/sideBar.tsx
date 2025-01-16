"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// const items = [
//   {
//     id: "recents",
//     label: "Recents",
//   },
//   {
//     id: "home",
//     label: "Home",
//   },
//   {
//     id: "applications",
//     label: "Applications",
//   },
//   {
//     id: "desktop",
//     label: "Desktop",
//   },
//   {
//     id: "downloads",
//     label: "Downloads",
//   },
//   {
//     id: "documents",
//     label: "Documents",
//   },
// ] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

interface IBarContent {
  id?: string;
  category: string;
  qty: number;
}

export const CheckboxReactHookFormMultiple: FC<IBarContent> = ({
  category,
  qty,
  id,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["sport", "suv"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              {/* <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div> */}

              <FormField
                control={form.control}
                name="items"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          // checked={field.value?.includes(id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        <div className="flex gap-x-2 jakarta-addButton">
                          <div className="text-secondary400 ">{category}</div>
                          <div className="text-secondary300">{`(${qty})`}</div>
                        </div>
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button text={"Submit"} url={""}></Button> */}
      </form>
    </Form>
  );
};
function toast(arg0: { title: string; description: JSX.Element }) {
  throw new Error(arg0 + "Function not implemented.");
}
