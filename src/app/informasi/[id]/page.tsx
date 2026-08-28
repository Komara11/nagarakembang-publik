import { FadeIn, SlideUp } from "@/components/ui/animations";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBeritaBySlug } from "@/lib/data";

export default function InformasiDetailPage({ params }: { params: { id: string } }) {
  const berita = getBeritaBySlug(params.id);

  if (!berita) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface pb-24">
      {/* Article Header */}
      <section className="pt-32 pb-8 px-6 md:px-margin-desktop max-w-4xl mx-auto w-full">
        <SlideUp>
          <Link href="/informasi" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-label-md mb-8 transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Kembali ke Informasi
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-xs uppercase tracking-wider">
              {berita.category}
            </span>
            <span className="text-outline-variant text-caption">•</span>
            <span className="font-body-md text-caption text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              {berita.date}
            </span>
            <span className="text-outline-variant text-caption">•</span>
            <span className="font-body-md text-caption text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">person</span>
              {berita.author}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            {berita.title}
          </h1>
          
        </SlideUp>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-margin-desktop max-w-5xl mx-auto w-full mb-12">
        <FadeIn>
          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-ambient relative">
            <img
              src={berita.thumbnail || "https://lh3.googleusercontent.com/aida-public/AB6AXuDuWqHCTg5VBIrZbxCgR0i1vNeUMAJkDKwf5Z1BSkVddUnWbNGonkebpz9hPX0Ev4JyGhMq1xgwlk2GPLFGtU_hRWDqwz-38LFOA3lpFkCGNSOAmLBw5sEaj7eidcLr_G6BW3aqLJ3OwDzq8yIxYJIQdBXGB3QY3iL0o7k_okc2j-lfwqlxKxVZp6ox8NykO1JMmKwe2zMDZLK7EWMrvTnqrGCQt2HtV_BVfQ6pV7l8sZhEDUCo-ze2"}
              alt={berita.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur px-3 py-1 rounded text-caption text-on-surface-variant">
              Foto: Dokumentasi Desa
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Article Content */}
      <section className="px-6 md:px-margin-desktop max-w-3xl mx-auto w-full">
        <SlideUp delay={0.2} className="prose prose-lg dark:prose-invert max-w-none font-body-md text-on-surface whitespace-pre-line">
          {berita.content}
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-surface-variant not-prose">
            <h4 className="font-title-lg text-on-surface mb-6 text-center">Bagikan Artikel Ini</h4>
            <div className="flex items-center justify-center gap-4">
              <button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-transform hover:-translate-y-1 shadow-ambient" title="Bagikan ke Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center transition-transform hover:-translate-y-1 shadow-ambient" title="Bagikan ke WhatsApp">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-800 hover:bg-black text-white flex items-center justify-center transition-transform hover:-translate-y-1 shadow-ambient" title="Bagikan ke X (Twitter)">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-surface-variant hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors shadow-ambient group" title="Salin Tautan">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">link</span>
              </button>
            </div>
          </div>
        </SlideUp>
      </section>
    </div>
  );
}
