import Link from "next/link";
import { getSettings, getProfil } from "@/lib/data";

export function Footer() {
  const settings = getSettings();
  const profil = getProfil();
  
  return (
    <footer className="w-full bg-[#0f172a] text-slate-300 pt-16 md:pt-24 pb-8 px-margin-mobile md:px-margin-desktop border-t-4 border-primary">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-16">
          {/* Brand & Deskripsi */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo Desa" className="w-10 h-10 object-contain" />
              <span className="font-display-lg text-headline-md font-bold text-white tracking-tight">
                {settings?.namaWebsite ? (
                  <>
                    {settings.namaWebsite.split(' ')[0]} <span className="text-primary">{settings.namaWebsite.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : (
                  <>Nagara <span className="text-primary">Kembang</span></>
                )}
              </span>
            </div>
            <p className="font-body-md text-body-lg leading-relaxed max-w-md text-slate-400">
              Membangun desa mandiri, sejahtera, dan berbudaya melalui tata kelola pemerintahan yang transparan, inovatif, dan berpusat pada masyarakat.
            </p>
            
            {/* Social Media SVG Icons */}
            <div className="flex items-center gap-4 mt-2">
              {settings?.facebook && (
                <a href={settings.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#0f172a] transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                  </svg>
                </a>
              )}
              {settings?.instagram && (
                <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#0f172a] transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"/>
                    <circle cx="16.806" cy="7.207" r="1.078"/>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.952-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigasi */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-title-lg text-title-lg text-white font-bold tracking-wide relative w-fit">
              Eksplorasi
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/profil" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Profil Desa
              </Link>
              <Link href="/pemerintahan" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Pemerintahan
              </Link>
              <Link href="/potensi" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Potensi Alam
              </Link>
              <Link href="/informasi" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Berita & Agenda
              </Link>
            </div>
          </div>

          {/* Layanan & Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-title-lg text-title-lg text-white font-bold tracking-wide relative w-fit">
              Layanan & Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/pelayanan" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Layanan Pengaduan
              </Link>
              <Link href="/informasi/transparansi" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Transparansi Anggaran
              </Link>
              <Link href="/profil/demografi" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Data Demografi
              </Link>
              <Link href="/informasi/pengumuman" className="font-body-md text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span> Pengumuman Resmi
              </Link>
            </div>
          </div>

          {/* Kontak */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-title-lg text-title-lg text-white font-bold tracking-wide relative w-fit">
              Kontak Kami
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <p className="font-body-md text-slate-400 pt-2 leading-snug">
                  {profil?.alamat || "Jl. Balai Desa No.1, RT 02/05, Nagara Kembang, Jawa Barat"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <a href={`mailto:${settings?.email || "info@nagarakembang.desa.id"}`} className="font-body-md text-slate-400 hover:text-primary transition-colors">
                  {settings?.email || "info@nagarakembang.desa.id"}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <a href={`tel:${settings?.telepon || "02112345678"}`} className="font-body-md text-slate-400 hover:text-primary transition-colors font-medium tracking-wider">
                  {settings?.telepon || "(021) 1234-5678"}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <div className="flex flex-col gap-1">
            <p className="font-body-md text-sm text-slate-500">
              © {new Date().getFullYear()} Pemerintah Desa {settings?.namaWebsite || "Nagara Kembang"}. Seluruh Hak Cipta Dilindungi.
            </p>
            <p className="font-body-md text-xs text-slate-600">
              Developed by <a href="https://rahesa-komara-r7o2.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-primary-container transition-colors">Komara</a> from <a href="https://www.clovercode.shop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-primary-container transition-colors">Clovercode</a>
            </p>
          </div>
          
          <div className="flex items-center gap-5 my-2 lg:my-0">
            <img src="/logo.png" alt="Logo Desa" className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="/tim-kkm/logo_kampus.png" alt="Logo Kampus" className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="/tim-kkm/logo-kkm.png" alt="Logo KKM" className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="font-body-md text-sm text-slate-500 hover:text-primary transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="font-body-md text-sm text-slate-500 hover:text-primary transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
