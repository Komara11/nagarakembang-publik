import { FadeIn, SlideUp } from "@/components/ui/animations";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGaleri } from "@/lib/data";

export default async function GaleriDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const galeriItems = getGaleri();
  const galeri = galeriItems.find(g => g.id === resolvedParams.id);
  
  if (!galeri) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface pb-24">
      {/* Top Nav */}
      <div className="pt-28 px-6 md:px-margin-desktop max-w-5xl mx-auto w-full mb-6">
        <Link href="/informasi/galeri" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-label-md transition-colors">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Kembali ke Galeri
        </Link>
      </div>

      {/* Title & Info */}
      <section className="px-6 md:px-margin-desktop max-w-5xl mx-auto w-full mb-8">
        <SlideUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-xs tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">photo_library</span>
              {galeri.photos || 1} Foto
            </span>
            <span className="text-outline-variant text-caption">•</span>
            <span className="font-body-md text-caption text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              {galeri.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            {galeri.name}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-3xl font-body-lg whitespace-pre-line">
            {galeri.description || "Tidak ada deskripsi."}
          </p>
        </SlideUp>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-margin-desktop max-w-6xl mx-auto w-full">
        <FadeIn delay={0.2}>
          <div className="w-full rounded-2xl overflow-hidden shadow-ambient bg-surface-variant border border-outline-variant">
            <img
              src={galeri.cover || "https://lh3.googleusercontent.com/aida-public/AB6AXuBXWKm6G9_2yilFdycyNUqSc4UFaQySw5sdY_4pzDGjUWEzGVeLog_LXB3oJ20g3bE5NgAtUqPsf_tFsKnHOMsGLbDLu9BNsa1-WxDNg4Ud3FCi7Vx14oz-8oe4czwd-bhHIciXgbxUw_nljsMMLTUhqfPPzeIYVd5Qg7E0oQPrkRYOEV40mN5b1fkfy4Io3i8KRBLgfIW8s9obtH0t4czGAdCvrQ9C5B3GwTkI4TNo3nFhPc8qOXRw"}
              alt={galeri.name}
              className="w-full max-h-[80vh] object-contain bg-black/5"
            />
          </div>
          <p className="text-center text-caption text-outline mt-4 italic">
            Dokumentasi oleh Pemerintah Desa Nagara Kembang
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
