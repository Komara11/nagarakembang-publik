import { SlideUp } from "@/components/ui/animations";
import { PengaduanForm } from "./PengaduanForm";

export const metadata = {
  title: "Layanan Pengaduan Masyarakat - Nagara Kembang",
};

export default function PelayananPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] min-h-[300px] flex items-center justify-center bg-surface-container-high border-b border-outline-variant">
        <div className="absolute inset-0 bg-primary/5"></div>
        <SlideUp className="relative z-10 text-center px-margin-mobile md:px-margin-desktop text-on-surface" delay={0.2}>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm text-primary">
            Layanan Pengaduan Masyarakat
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto text-on-surface-variant px-4 md:px-0">
            Pusat layanan pengaduan terpadu bagi warga. Laporkan kendala, berikan saran, atau sampaikan aspirasi Anda secara langsung.
          </p>
        </SlideUp>
      </section>

      {/* Form Pengaduan Masyarakat */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface w-full">
        <SlideUp className="max-w-3xl mx-auto flex flex-col gap-8 md:gap-stack-lg">
          <div className="text-center mb-4 md:mb-stack-md">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary mb-stack-sm">
              Form Layanan Pengaduan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ada keluhan terkait infrastruktur, layanan administrasi, atau hal lain? Sampaikan langsung kepada kami melalui form ini.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-6 md:p-stack-lg rounded-2xl shadow-ambient border border-surface-variant">
            <PengaduanForm />
          </div>
        </SlideUp>
      </section>
    </div>
  );
}
