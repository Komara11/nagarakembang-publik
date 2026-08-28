import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { getLembaga } from "@/lib/data";

export const metadata = {
  title: "Lembaga Desa - Nagara Kembang",
};

export default function LembagaDesaPage() {
  const lembagaList = getLembaga();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header Section */}
      <section className="bg-surface-container-lowest pt-32 pb-16 px-6 md:px-margin-desktop border-b border-outline-variant">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Lembaga Kemasyarakatan Desa
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Lembaga-lembaga yang menjadi mitra strategis Pemerintah Desa dalam memberdayakan masyarakat dan memajukan kesejahteraan umum.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop bg-surface max-w-container-max mx-auto w-full">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lembagaList.map((lembaga) => (
            <StaggerItem 
              key={lembaga.id} 
              className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-ambient hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-16 h-16 rounded-xl text-primary bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">account_balance</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">{lembaga.name}</h3>
              {lembaga.ketua && <p className="text-sm font-semibold text-primary mb-4">Ketua: {lembaga.ketua}</p>}
              <p className="text-on-surface-variant leading-relaxed flex-grow">
                {lembaga.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
