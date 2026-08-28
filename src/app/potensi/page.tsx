import Link from "next/link";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { getPotensi } from "@/lib/data";

export const metadata = {
  title: "Potensi Desa - Nagara Kembang",
};

export default function PotensiPage() {
  const potensiList = getPotensi();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGmE6Tq3LlcffIdYRnT5cmDBusDvyZhIpWUxtL_6WgUAi6lZyqEXZRpelWiSBw9ppia20uqR1iT1nDBkTLNH-suhawxpB5yaezy2pKfpPkuLLw8eNxs-McuuEWjpakQfuae_h6N9-LDYK1yM1VAGoEgWv3G1VM0NNZkvazH-LnspP8rC82WAd6CpSaQJhgyl791eHfi_F_IL4oUTcsHXMFszemVriDPcb82AuVRVUVn-_1HI-G85i9')",
          }}
        ></div>
        <div className="absolute inset-0 bg-overlay"></div>
        <SlideUp className="relative z-10 text-center px-margin-mobile md:px-margin-desktop text-on-primary" delay={0.2}>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm text-on-primary">
            Potensi Desa
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90 text-on-primary">
            Menjelajahi keunggulan sumber daya alam, hasil pertanian, dan kreasi UMKM kebanggaan masyarakat.
          </p>
        </SlideUp>
      </section>

      {/* Grid Potensi Section */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-background w-full">
        <div className="max-w-container-max mx-auto flex flex-col gap-8 md:gap-stack-lg">
          <SlideUp className="text-center mb-4 md:mb-stack-lg">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary mb-stack-sm">
              Sektor Unggulan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Beragam sektor yang menjadi penggerak ekonomi dan kesejahteraan masyarakat.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-gutter">
            {potensiList.map((item) => (
              <StaggerItem key={item.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient hover-lift flex flex-col group border border-surface-variant h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={item.name}
                    src={item.photo || "https://lh3.googleusercontent.com/aida-public/AB6AXuDuWqHCTg5VBIrZbxCgR0i1vNeUMAJkDKwf5Z1BSkVddUnWbNGonkebpz9hPX0Ev4JyGhMq1xgwlk2GPLFGtU_hRWDqwz-38LFOA3lpFkCGNSOAmLBw5sEaj7eidcLr_G6BW3aqLJ3OwDzq8yIxYJIQdBXGB3QY3iL0o7k_okc2j-lfwqlxKxVZp6ox8NykO1JMmKwe2zMDZLK7EWMrvTnqrGCQt2HtV_BVfQ6pV7l8sZhEDUCo-ze2"}
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center text-on-primary shadow-md">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.category === 'Pertanian' ? 'agriculture' : item.category === 'Pariwisata' ? 'landscape' : 'storefront'}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-stack-md flex flex-col flex-grow">
                  <h3 className="font-title-lg text-title-lg text-primary mb-2">{item.name}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-stack-md flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <Link
                    href={`/potensi/${item.id}`}
                    className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary transition-colors mt-auto"
                  >
                    Selengkapnya <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
