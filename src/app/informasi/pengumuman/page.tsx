import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import Link from "next/link";
import { getPengumuman } from "@/lib/data";

export const metadata = {
  title: "Pengumuman Resmi - Nagara Kembang",
};

export default function PengumumanPage() {
  const pengumumanList = getPengumuman();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header Section */}
      <section className="bg-surface-container-lowest pt-32 pb-16 px-6 md:px-margin-desktop border-b border-outline-variant">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-[32px]">campaign</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Pengumuman Resmi
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Pusat informasi surat edaran, imbauan, dan pengumuman penting dari Pemerintah Desa.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* List Section */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop bg-surface max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8 border-b border-surface-variant pb-4">
          <h2 className="text-2xl font-bold text-on-surface">Daftar Pengumuman</h2>
          <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant">
            <input className="bg-transparent border-none focus:ring-0 text-sm outline-none text-on-surface" placeholder="Cari..." type="text" />
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
          </div>
        </div>

        <StaggerContainer className="flex flex-col gap-6">
          {pengumumanList.length === 0 && (
            <p className="text-outline text-center py-8">Belum ada pengumuman saat ini.</p>
          )}
          {pengumumanList.map((item) => (
            <StaggerItem 
              key={item.id} 
              className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant shadow-ambient hover:shadow-md transition-shadow group flex flex-col md:flex-row gap-6 md:gap-8"
            >
              {/* Date Column */}
              <div className="flex flex-col md:items-end shrink-0 md:w-32 border-b md:border-b-0 md:border-r border-surface-variant pb-4 md:pb-0 md:pr-6">
                <span className="text-on-surface-variant font-medium">{item.publishedDate}</span>
                {item.expiredDate && (
                  <span className="text-xs text-outline mt-1">s/d {item.expiredDate}</span>
                )}
              </div>

              {/* Content Column */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
