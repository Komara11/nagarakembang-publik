import { FadeIn, SlideUp } from "@/components/ui/animations";
import { getProfil } from "@/lib/data";

export const metadata = {
  title: "Profil Desa - Nagara Kembang",
};

export default function ProfilPage() {
  const profil = getProfil();

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap w-full overflow-hidden">
      {/* Hero Title Section */}
      <SlideUp className="py-12 md:py-section-gap text-center max-w-3xl mx-auto" delay={0.1}>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-stack-md">
          Profil Desa {profil.namaDesa}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant px-4 md:px-0 whitespace-pre-line">
          {profil.deskripsi || "Mengenal lebih dekat sejarah dan profil desa kami yang asri dan berbudaya."}
        </p>
      </SlideUp>

      {/* Sejarah Desa Section */}
      <section className="mb-12 md:mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-center">
          <FadeIn className="md:col-span-5 relative group order-2 md:order-1" delay={0.2}>
            <div className="absolute inset-0 bg-primary/10 rounded-xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <img
              alt="Sejarah Desa"
              className="relative z-10 w-full h-auto aspect-[4/3] object-cover rounded-xl shadow-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmCkBlxLnqdQDnT-7rHjh0UQu4bLnsq9XAOuqCoecnA0_DlRgrwWlggY1F0mmp7_NM46svweOS91gxHzKbL0NSHFMEWB_Jh-DRvrB9HDBUDPLxI3mEgHu69G1umRvwzjrDEtPN5vo8CsvruNQS0qWgj8lRIG3bpvasvqy4cwQzC-Yz3q6I6z0R-1XnJnafTaj_-SeP0vrEUqBuWuk0-if_blNcJjMLUZqsMBUB6WQkYeGntWrQUN0a"
            />
          </FadeIn>
          <SlideUp className="md:col-span-7 md:pl-stack-lg flex flex-col justify-center order-1 md:order-2" delay={0.3}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-label-md w-max mb-stack-sm">
              <span className="material-symbols-outlined text-[16px]">history</span>
              <span>Sejarah Desa</span>
            </div>
            <h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-primary mb-stack-md">
              Jejak Langkah {profil.namaDesa}
            </h2>
            <div className="font-body-md text-body-md text-on-surface space-y-4 md:space-y-stack-sm text-justify md:text-left whitespace-pre-line">
              {profil.sejarah}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Identitas Wilayah */}
      <section className="mb-12 md:mb-section-gap">
        <div className="grid grid-cols-1 gap-8 md:gap-gutter">
          <SlideUp delay={0.2} className="bg-surface-container-lowest p-8 rounded-2xl shadow-ambient border border-surface-variant">
            <h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-primary mb-stack-md text-center">
              Identitas Wilayah
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="block text-outline font-label-md mb-1">Kecamatan</span>
                <span className="font-bold text-on-surface text-lg">{profil.kecamatan}</span>
              </div>
              <div>
                <span className="block text-outline font-label-md mb-1">Kabupaten</span>
                <span className="font-bold text-on-surface text-lg">{profil.kabupaten}</span>
              </div>
              <div>
                <span className="block text-outline font-label-md mb-1">Provinsi</span>
                <span className="font-bold text-on-surface text-lg">{profil.provinsi}</span>
              </div>
              <div>
                <span className="block text-outline font-label-md mb-1">Kode Pos</span>
                <span className="font-bold text-on-surface text-lg">{profil.kodePos}</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="block text-outline font-label-md mb-1">Alamat Kantor Desa</span>
              <span className="font-medium text-on-surface">{profil.alamat}</span>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
