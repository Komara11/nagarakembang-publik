import { getGaleri } from "@/lib/data";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Galeri & Media | Desa Nagara Kembang",
  description: "Dokumentasi visual kegiatan, pembangunan, dan keindahan Desa Nagara Kembang",
};

export default function GaleriPage() {
  const galeriItems = getGaleri();

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuWqHCTg5VBIrZbxCgR0i1vNeUMAJkDKwf5Z1BSkVddUnWbNGonkebpz9hPX0Ev4JyGhMq1xgwlk2GPLFGtU_hRWDqwz-38LFOA3lpFkCGNSOAmLBw5sEaj7eidcLr_G6BW3aqLJ3OwDzq8yIxYJIQdBXGB3QY3iL0o7k_okc2j-lfwqlxKxVZp6ox8NykO1JMmKwe2zMDZLK7EWMrvTnqrGCQt2HtV_BVfQ6pV7l8sZhEDUCo-ze2')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80 pointer-events-none"></div>
        
        <SlideUp className="relative z-10 max-w-container-max mx-auto flex flex-col items-center text-center">
          <span className="font-label-md text-label-md tracking-widest uppercase mb-4 opacity-90">
            Dokumentasi & Visual
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-4">
            Galeri & Media
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl opacity-90">
            Jelajahi keindahan, kegiatan, serta dokumentasi pembangunan Desa Nagara Kembang melalui lensa kamera kami.
          </p>
        </SlideUp>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest flex-grow">
        <div className="max-w-container-max mx-auto">
          {galeriItems.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galeriItems.map((item) => (
                <Link href={`/informasi/galeri/${item.id}`} key={item.id} className="block group cursor-pointer">
                  <StaggerItem 
                    className="bg-surface rounded-2xl overflow-hidden shadow-ambient group-hover:shadow-lg transition-all duration-300 border border-surface-variant flex flex-col h-full"
                  >
                    <div className="relative aspect-video overflow-hidden bg-surface-variant">
                    {/* Default placeholder if no cover */}
                    <img
                      src={item.cover || "https://lh3.googleusercontent.com/aida-public/AB6AXuBXWKm6G9_2yilFdycyNUqSc4UFaQySw5sdY_4pzDGjUWEzGVeLog_LXB3oJ20g3bE5NgAtUqPsf_tFsKnHOMsGLbDLu9BNsa1-WxDNg4Ud3FCi7Vx14oz-8oe4czwd-bhHIciXgbxUw_nljsMMLTUhqfPPzeIYVd5Qg7E0oQPrkRYOEV40mN5b1fkfy4Io3i8KRBLgfIW8s9obtH0t4czGAdCvrQ9C5B3GwTkI4TNo3nFhPc8qOXRw"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3 text-on-surface-variant text-sm font-label-md">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px]">photo_library</span>
                        <span>{item.photos || 1} Foto</span>
                      </div>
                    </div>
                    
                    <h3 className="font-title-lg text-title-lg text-primary mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                      {item.description || "Tidak ada deskripsi tersedia untuk album ini."}
                    </p>
                  </div>
                  </StaggerItem>
                </Link>
              ))}
            </StaggerContainer>
          ) : (
            <SlideUp className="text-center py-20 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant">
              <span className="material-symbols-outlined text-[64px] text-outline mb-4 opacity-50">
                imagesmode
              </span>
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">Belum Ada Galeri</h3>
              <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
                Pemerintah desa belum mengunggah dokumentasi atau album foto apapun ke dalam sistem galeri ini.
              </p>
            </SlideUp>
          )}
        </div>
      </section>
    </div>
  );
}
