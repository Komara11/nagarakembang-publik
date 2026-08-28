import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "..", "data");

function readData<T>(filename: string): T {
  const filePath = path.join(DATA_DIR, filename);
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    if (["profil.json", "visi-misi.json", "demografi.json", "settings.json"].includes(filename)) {
      return {} as T;
    }
    return [] as unknown as T;
  }
}

function writeData<T>(filename: string, data: T): void {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Type definitions
export interface Berita {
  id: string; title: string; slug: string; category: string; author: string;
  content: string; thumbnail: string; status: string; views: number; date: string;
}
export interface Pengumuman {
  id: string; title: string; content: string; status: string;
  publishedDate: string; expiredDate: string;
}
export interface Pemerintahan {
  id: string; name: string; position: string; photo: string;
  description: string; order: number; status: string;
}
export interface Lembaga {
  id: string; name: string; ketua: string; jumlahAnggota: number;
  description: string; status: string;
}
export interface Potensi {
  id: string; name: string; category: string; photo: string;
  description: string; location: string; status: string;
}
export interface Pelayanan {
  id: string; name: string; syarat: string; prosedur: string;
  estimasiWaktu: string; biaya: string; status: string;
}
export interface Pengaduan {
  id: string; name: string; nik: string; category: string;
  message: string; date: string; status: string;
}
export interface Galeri {
  id: string; name: string; description: string; cover: string;
  date: string; photos: number;
}
export interface Transparansi {
  id: string;
  tahun: string;
  kategori: string;
  nominal: number;
  tipe: string;
}

export interface Slideshow {
  id: string;
  url: string;
}

export interface Profil {
  namaDesa: string; kecamatan: string; kabupaten: string; provinsi: string;
  kodePos: string; alamat: string; sejarah: string; deskripsi: string;
}
export interface VisiMisi { visi: string; misi: string[]; }
export interface Demografi { totalPenduduk: number; lakiLaki: number; perempuan: number; totalKK: number; }
export interface Settings { namaWebsite: string; email: string; telepon: string; whatsapp: string; instagram: string; facebook: string; }

// Public read-only accessors
export function getBerita(): Berita[] {
  return readData<Berita[]>("berita.json").filter(b => b.status === "Published");
}
export function getAllBerita(): Berita[] {
  return readData<Berita[]>("berita.json");
}
export function getBeritaBySlug(slug: string): Berita | undefined {
  return readData<Berita[]>("berita.json").find(b => b.slug === slug || b.id === slug);
}
export function getPengumuman(): Pengumuman[] {
  return readData<Pengumuman[]>("pengumuman.json").filter(p => p.status === "Published");
}
export function getPemerintahan(): Pemerintahan[] {
  return readData<Pemerintahan[]>("pemerintahan.json").filter(p => p.status === "Aktif").sort((a, b) => a.order - b.order);
}
export function getLembaga(): Lembaga[] {
  return readData<Lembaga[]>("lembaga.json").filter(l => l.status === "Aktif");
}
export function getPotensi(): Potensi[] {
  return readData<Potensi[]>("potensi.json").filter(p => p.status === "Published");
}
export function getPotensiById(id: string): Potensi | undefined {
  return readData<Potensi[]>("potensi.json").find(p => p.id === id);
}
export function getPelayanan(): Pelayanan[] {
  return readData<Pelayanan[]>("pelayanan.json").filter(p => p.status === "Aktif");
}
export function getGaleri(): Galeri[] {
  return readData<Galeri[]>("galeri.json");
}
export function getTransparansi(): Transparansi[] {
  return readData<Transparansi[]>("transparansi.json");
}

export function getSlideshow(): Slideshow[] {
  return readData<Slideshow[]>("slideshow.json");
}

export function getDemografi(): Demografi {
  return readData<Demografi>("demografi.json");
}
export function getProfil(): Profil {
  return readData<Profil>("profil.json");
}
export function getVisiMisi(): VisiMisi {
  return readData<VisiMisi>("visi-misi.json");
}
export function getSettings(): Settings {
  return readData<Settings>("settings.json");
}

// Write function for pengaduan (public can submit)
export function submitPengaduan(data: Omit<Pengaduan, "id" | "date" | "status">) {
  const items = readData<Pengaduan[]>("pengaduan.json");
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  items.unshift({
    ...data,
    id: `CMP-${timestamp}-${random}`,
    date: new Date().toISOString().split("T")[0],
    status: "Baru",
  });
  writeData("pengaduan.json", items);
}
