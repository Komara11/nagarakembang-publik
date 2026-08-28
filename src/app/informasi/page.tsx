import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { getBerita } from "@/lib/data";

export const metadata = {
  title: "Informasi & Berita - Desa Nagara Kembang",
};

export default function InformasiPage() {
  const berita = getBerita();
  const featured = berita[0];
  const gridBerita = berita.slice(1);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap w-full flex flex-col gap-12 md:gap-section-gap overflow-hidden">
      {/* Header & Filters */}
      <SlideUp className="flex flex-col gap-8 md:gap-stack-lg pt-8 md:pt-stack-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-stack-md">
          <div className="max-w-2xl">
            <h1 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary mb-stack-sm">
              Pusat Informasi & Berita
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Ikuti perkembangan terbaru, pengumuman penting, dan kegiatan masyarakat desa.
            </p>
          </div>
          <div className="w-full md:w-auto flex items-center bg-surface-container-lowest border border-outline-variant rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all shadow-ambient">
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-body-md w-full md:w-64 outline-none px-3 text-on-surface"
              placeholder="Cari berita..."
              type="text"
            />
            <button className="text-primary hover:text-primary-container font-body-md text-label-md pl-2 border-l border-outline-variant">
              Cari
            </button>
          </div>
        </div>
      </SlideUp>

      {/* Featured Article */}
      {featured && (
        <section>
          <FadeIn className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-ambient transition-all duration-300 hover:-translate-y-1 hover:shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 items-stretch border border-surface-variant">
            <div className="lg:col-span-7 relative h-64 md:h-auto min-h-[250px] md:min-h-[300px]">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={featured.title}
                src={featured.thumbnail || "https://lh3.googleusercontent.com/aida-public/AB6AXuDuWqHCTg5VBIrZbxCgR0i1vNeUMAJkDKwf5Z1BSkVddUnWbNGonkebpz9hPX0Ev4JyGhMq1xgwlk2GPLFGtU_hRWDqwz-38LFOA3lpFkCGNSOAmLBw5sEaj7eidcLr_G6BW3aqLJ3OwDzq8yIxYJIQdBXGB3QY3iL0o7k_okc2j-lfwqlxKxVZp6ox8NykO1JMmKwe2zMDZLK7EWMrvTnqrGCQt2HtV_BVfQ6pV7l8sZhEDUCo-ze2"}
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-on-background/80 md:from-surface-container-lowest/90 to-transparent"></div>
            </div>
            <div className="lg:col-span-5 p-6 md:p-stack-lg flex flex-col justify-center relative z-10 bg-surface-container-lowest/80 md:bg-surface-container-lowest backdrop-blur-sm md:backdrop-blur-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-body-md text-label-md text-secondary uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="text-outline-variant text-caption">•</span>
                <span className="font-body-md text-caption text-on-surface-variant">{featured.date}</span>
              </div>
              <h2 className="font-headline-md-mobile text-headline-md-mobile text-primary mb-4 group-hover:text-primary-container transition-colors">
                {featured.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                {featured.content}
              </p>
              <Link
                href={`/informasi/${featured.slug}`}
                className="inline-flex items-center gap-2 font-body-md text-label-md text-primary hover:text-secondary transition-colors w-max group/btn"
              >
                Baca Selengkapnya
                <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1 text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </FadeIn>
        </section>
      )}

      {/* Recent News Grid */}
      <section>
        <SlideUp className="mb-6 md:mb-stack-lg border-b border-surface-variant pb-2">
          <h3 className="font-title-lg text-title-lg text-on-surface">
            Berita Lainnya
          </h3>
        </SlideUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-gutter">
          {gridBerita.map((item) => (
            <StaggerItem key={item.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient transition-all hover:-translate-y-1 flex flex-col h-full group border border-surface-variant">
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={item.title}
                  src={item.thumbnail || "https://lh3.googleusercontent.com/aida-public/AB6AXuBXWKm6G9_2yilFdycyNUqSc4UFaQySw5sdY_4pzDGjUWEzGVeLog_LXB3oJ20g3bE5NgAtUqPsf_tFsKnHOMsGLbDLu9BNsa1-WxDNg4Ud3FCi7Vx14oz-8oe4czwd-bhHIciXgbxUw_nljsMMLTUhqfPPzeIYVd5Qg7E0oQPrkRYOEV40mN5b1fkfy4Io3i8KRBLgfIW8s9obtH0t4czGAdCvrQ9C5B3GwTkI4TNo3nFhPc8qOXRw"}
                />
                <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-2 py-1 rounded font-body-md text-caption">
                  {item.category}
                </div>
              </div>
              <div className="p-6 md:p-stack-md flex flex-col flex-grow">
                <span className="font-body-md text-caption text-on-surface-variant mb-2">
                  {item.date}
                </span>
                <h4 className="font-title-lg text-title-lg text-primary mb-2 line-clamp-2">
                  {item.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2 flex-grow">
                  {item.content}
                </p>
                <Link
                  href={`/informasi/${item.slug}`}
                  className="inline-flex items-center font-body-md text-label-md text-primary hover:text-secondary transition-colors mt-auto"
                >
                  Baca <span className="material-symbols-outlined text-[18px] ml-1">arrow_right_alt</span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
