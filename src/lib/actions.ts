"use server";

import { submitPengaduan } from "@/lib/data";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const pengaduanSchema = z.object({
  nama: z.string().min(3, "Nama lengkap harus diisi minimal 3 karakter"),
  nik: z.string().length(16, "NIK harus tepat 16 digit angka").regex(/^\d+$/, "NIK hanya boleh berisi angka"),
  kategori: z.enum(["infrastruktur", "administrasi", "keamanan", "lainnya"], {
    message: "Silakan pilih kategori yang valid"
  }),
  pesan: z.string().min(10, "Pesan pengaduan minimal 10 karakter"),
});

export async function submitPengaduanAction(formData: FormData) {
  const result = pengaduanSchema.safeParse({
    nama: formData.get("nama"),
    nik: formData.get("nik"),
    kategori: formData.get("kategori"),
    pesan: formData.get("pesan"),
  });

  if (!result.success) {
    const errorMessages = result.error.issues.map((err: any) => err.message).join(", ");
    return { error: errorMessages };
  }

  submitPengaduan({
    name: result.data.nama,
    nik: result.data.nik,
    category: result.data.kategori,
    message: result.data.pesan
  });
  
  revalidatePath("/pelayanan");
  return { success: true };
}
