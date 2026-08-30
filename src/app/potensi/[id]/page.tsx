import { FadeIn, SlideUp } from "@/components/ui/animations";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPotensi } from "@/lib/data";

export default async function PotensiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const potensi = getPotensi().find(p => p.id === resolvedParams.id);
  
  if (!potensi) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface pb-24">
      {/* Top Nav */}
      <div className="pt-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full mb-8">
        <Link href="/potensi" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-md transition-colors">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Kembali ke Daftar Potensi
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto w-full mb-12">
        <FadeIn className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-ambient">
          <img
            src={potensi.photo || "https://lh3.googleusercontent.com/aida-public/AB6AXuCGmE6Tq3LlcffIdYRnT5cmDBusDvyZhIpWUxtL_6WgUAi6lZyqEXZRpelWiSBw9ppia20uqR1iT1nDBkTLNH-suhawxpB5yaezy2pKfpPkuLLw8eNxs-McuuEWjpakQfuae_h6N9-LDYK1yM1VAGoEgWv3G1VM0NNZkvazH-LnspP8rC82WAd6CpSaQJhgyl791eHfi_F_IL4oUTcsHXMFszemVriDPcb82AuVRVUVn-_1HI-G85i9"}
            alt={potensi.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span className="inline-block px-4 py-1 bg-primary text-on-primary rounded-full font-label-sm text-sm uppercase tracking-wider mb-4 shadow-sm">
              {potensi.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              {potensi.name}
            </h1>
          </div>
        </FadeIn>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Description */}
          <SlideUp className="lg:col-span-8 flex flex-col gap-6" delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-headline-md text-on-surface">
              Mengenal Lebih Dekat
            </h2>
            <div className="prose prose-lg dark:prose-invert text-on-surface-variant max-w-none whitespace-pre-line">
              {potensi.description}
            </div>
          </SlideUp>
          
          {/* Info Sidebar */}
          <SlideUp className="lg:col-span-4" delay={0.2}>
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-variant shadow-ambient">
              <h3 className="font-title-lg text-primary mb-6 border-b border-surface-variant pb-4">
                Informasi Singkat
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface mb-1">Lokasi</h4>
                    <p className="font-body-md text-on-surface-variant">{potensi.location || "Wilayah Desa"}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                    <span className="material-symbols-outlined text-[20px]">category</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface mb-1">Kategori</h4>
                    <p className="font-body-md text-on-surface-variant">{potensi.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>
          
        </div>
      </section>
    </div>
  );
}
