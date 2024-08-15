import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BookingSummary from "@/components/BookingSummary";
import { useEffect } from "react";
import { useRoomsContext } from "@/contexts/roomsContext";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z
    .string({ message: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
  email: z
    .string({ message: "Campo obrigatório" })
    .email({ message: "Email inválido" })
    .min(1, { message: "Campo obrigatório" }),
  card_name: z
    .string({ message: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
  card_number: z
    .string({ message: "Campo obrigatório" })
    .min(16, { message: "Minímo de 16 caracteres" })
    .max(16, { message: "Máximo de 16 caracteres" }),
  cvc: z
    .string({ message: "Campo obrigatório" })
    .min(3, { message: "Minímo de 3 caracteres" })
    .max(3, { message: "Máximo de caracteres" }),
  validity: z
    .string({ message: "Campo obrigatório" })
    .min(5, { message: "O campo deve ter o formato mês/ano" })
    .max(5, { message: "O campo deve ter o formato mês/ano" }),
  type: z.string().min(1),
});

export default function PaymentPage() {
  const { rooms, setRooms } = useRoomsContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const formSavedValues = window.localStorage.getItem("form");

  const disabled = rooms.length == 0;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formSavedValues
      ? JSON.parse(formSavedValues)
      : {
          type: "credit_card",
        },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setRooms([]);
    window.localStorage.removeItem("form");
    window.localStorage.removeItem("rooms");
    toast({
      title: "Reserva efetuada com Sucesso",
      description: "Você pode acompanhar os detalhes no e-mail de cadastro.",
      icon: "fa-solid fa-circle-check",
      iconClassname: "text-[#52C41A]",
    });
    navigate("/");
  }

  useEffect(() => {
    const toBeSavedValues: { [key: string]: string } = form.watch();
    Object.keys(form.watch()).map((key) => {
      if (!toBeSavedValues[key]) {
        toBeSavedValues[key] = "";
      }
    });
    window.localStorage.setItem("form", JSON.stringify(toBeSavedValues));
  }, [form.watch()]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[1920px] mx-auto flex flex-col xl:flex-row xl:p-12 xl:px-20 xl:gap-12"
      >
        <div className="flex flex-col gap-4 text-font text-lg p-6 lg:p-12 lg:px-20 xl:p-0 xl:w-1/2">
          <h1 className="text-2xl font-semibold text-graphite">
            Identificação
          </h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nome <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input disabled={disabled} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input disabled={disabled} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr className="w-full bg-font-light/20 h-[1px] my-4" />
          <h1 className="text-2xl font-semibold text-graphite">Pagamento</h1>
          <div className="flex gap-4 items-center">
            <Input
              disabled={disabled}
              className="w-4 h-4"
              id="credit_card"
              value="credit_card"
              type="radio"
              checked={form.watch("type") === "credit_card"}
              onChange={(e) => {
                const value = e.target.value;
                form.setValue("type", value);
              }}
            />
            <label htmlFor="credit_card">Cartão de Crédito</label>
            <Input
              disabled={disabled}
              className="w-4 h-4"
              id="pix"
              value="pix"
              type="radio"
              checked={form.watch("type") === "pix"}
              onChange={(e) => {
                const value = e.target.value;
                form.setValue("type", value);
              }}
            />
            <label htmlFor="pix">PIX</label>
          </div>
          <FormField
            control={form.control}
            name="card_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Cartão</FormLabel>
                <FormControl>
                  <Input disabled={disabled} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="card_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número Cartão</FormLabel>
                <FormControl>
                  <Input
                    disabled={disabled}
                    placeholder="0000 0000 0000 0000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between w-full">
            <FormField
              control={form.control}
              name="validity"
              render={({ field }) => (
                <FormItem className="w-[calc(50%-1rem)]">
                  <FormLabel>Validade</FormLabel>
                  <FormControl>
                    <Input disabled={disabled} placeholder="00/00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvc"
              render={({ field }) => (
                <FormItem className="w-[calc(50%-1rem)]">
                  <FormLabel>CVC</FormLabel>
                  <FormControl>
                    <Input disabled={disabled} placeholder="000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <BookingSummary />
      </form>
    </Form>
  );
}
