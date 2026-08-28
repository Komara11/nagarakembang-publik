"use client";

import { useTransition, useRef } from "react";
import { submitPengaduanAction } from "@/lib/actions";

export function PengaduanForm() {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await submitPengaduanAction(fd);
      if (res?.success) {
        alert("Pengaduan berhasil dikirim!");
        formRef.current?.reset();
      } else {
        alert("Gagal: " + res?.error);
      }
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-stack-md" aria-label="Form Pengaduan">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-stack-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="nama" className="font-label-md text-label-md text-on-surface">Nama Lengkap</label>
          <input
            type="text"
            id="nama"
            name="nama"
            className="bg-surface p-3 rounded-md border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface font-body-md"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nik" className="font-label-md text-label-md text-on-surface">NIK (Nomor Induk Kependudukan)</label>
          <input
            type="text"
            id="nik"
            name="nik"
            className="bg-surface p-3 rounded-md border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface font-body-md"
            placeholder="Masukkan 16 digit NIK"
            maxLength={16}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="kategori" className="font-label-md text-label-md text-on-surface">Kategori Laporan</label>
        <select
          id="kategori"
          name="kategori"
          className="bg-surface p-3 rounded-md border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface font-body-md"
          required
        >
          <option value="">-- Pilih Kategori --</option>
          <option value="infrastruktur">Infrastruktur & Jalan</option>
          <option value="administrasi">Layanan Administrasi</option>
          <option value="keamanan">Keamanan & Ketertiban</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pesan" className="font-label-md text-label-md text-on-surface">Isi Laporan / Pesan</label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          className="bg-surface p-3 rounded-md border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface font-body-md resize-y"
          placeholder="Deskripsikan laporan atau keluhan Anda secara detail..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-md hover:bg-primary-container hover:shadow-lg transition-all w-full md:w-auto self-end disabled:opacity-50"
      >
        {isPending ? "Mengirim..." : "Kirim Pengaduan"}
      </button>
    </form>
  );
}
