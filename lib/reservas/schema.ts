import { z } from "zod";

export const datosClienteSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre").max(50),
  apellido: z.string().trim().min(2, "Ingresá tu apellido").max(50),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Ingresá un número válido")
    .max(20)
    .regex(/^[\d+\s()-]+$/, "Ingresá solo números y símbolos válidos"),
  email: z.union([z.string().trim().email("Email inválido"), z.literal("")]).optional(),
  comentarios: z.string().trim().max(300).optional(),
});

export type DatosClienteInput = z.infer<typeof datosClienteSchema>;
