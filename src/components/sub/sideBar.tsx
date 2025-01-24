"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useSelectedTypes } from "@/context/selectedTypesContext";


interface CarType {
  type: string;
  id: string;
}

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function CheckboxReactHookFormMultiple() {
  const [carType, setCarType] = useState<CarType[]>([]);
  const { setSelectedTypes } = useSelectedTypes(); // Use the context

  useEffect(() => {
    async function fetchCarType() {
      const res: CarType[] = await client.fetch(`*[_type == "carType"]{type,_id}`);
      setCarType(res);
    }
    fetchCarType();
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  // Watch for changes in the selected items
  const selectedItems = form.watch("items");

  // Call the setSelectedTypes function whenever selectedItems changes
  useEffect(() => {
    setSelectedTypes(selectedItems);
  }, [selectedItems, setSelectedTypes]);

  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Select Car Type</FormLabel>
                <FormDescription>
                  Choose the car type you are interested in.
                </FormDescription>
              </div>
              {carType.map((car) => (
                <FormItem
                  key={car.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(car.type)} // Use `car.type` instead of `car.type`
                      onCheckedChange={(checked) => {
                        const updatedValues = checked
                          ? [...(field.value || []), car.type] // Add the car type type if checked
                          : (field.value || []).filter((type: string) => type !== car.type); // Remove the car type ID if unchecked

                        field.onChange(updatedValues); // Update the form state
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {car.type}
                  </FormLabel>
                </FormItem>
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}