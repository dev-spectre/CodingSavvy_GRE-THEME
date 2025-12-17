import PlacementPortal from "@/components/PlacementPortal";

export default function Placement() {
  return (
    <section className="px-fluid-container relative bg-gradient-to-b from-[#e7ecf4] to-[#bec9df]">
      <h2 className="text-xl-0 mb-8 pt-12 text-center leading-tight font-[900] text-[#1B438F] capitalize md:mb-16 lg:mb-12">
        Placement Portal
      </h2>
      <div>
        <PlacementPortal />
      </div>
    </section>
  );
}
