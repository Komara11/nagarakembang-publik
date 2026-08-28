import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { getVisiMisi } from "@/lib/data";

export const metadata = {
  title: "Visi & Misi - Nagara Kembang",
};

export default function VisiMisiPage() {
  const data = getVisiMisi();

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap w-full overflow-hidden pt-32">
      <SlideUp className="text-center mb-8 md:mb-stack-lg">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-stack-sm">
          Visi & Misi
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Arah pembangunan dan cita-cita luhur untuk kesejahteraan bersama masyarakat desa.
        </p>
      </SlideUp>

      <div className="bg-surface-container-low rounded-[24px] p-6 md:p-margin-desktop border border-surface-variant/50 shadow-sm overflow-hidden mb-12 md:mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-gutter">
          {/* Visi Card */}
          <FadeIn className="lg:col-span-1 bg-surface rounded-xl p-8 shadow-ambient border border-surface-variant/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300" delay={0.2}>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-stack-md text-primary">
              <span className="material-symbols-outlined !text-4xl">visibility</span>
            </div>
            <h3 className="font-title-lg text-title-lg text-primary mb-stack-sm">Visi</h3>
            <p className="font-body-md text-body-md text-on-surface italic whitespace-pre-line">
              "{data.visi}"
            </p>
          </FadeIn>
          
          {/* Misi Cards */}
          <StaggerContainer className="lg:col-span-2 grid grid-cols-1 gap-4 md:gap-stack-md">
            {data.misi.map((misiItem, idx) => (
              <StaggerItem key={idx} className="bg-surface rounded-xl p-6 shadow-ambient border border-surface-variant/30 flex gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="text-secondary shrink-0 pt-1">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface font-bold mb-1">
                    Misi {idx + 1}
                  </h4>
                  <p className="font-caption text-caption text-on-surface-variant">
                    {misiItem}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
