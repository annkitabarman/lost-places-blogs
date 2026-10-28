"use client";

import dynamic from "next/dynamic";

const AtlasMapView = dynamic(() => import("./atlas-map-view"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[550px] items-center justify-center border border-white/10 bg-[#171813] text-sm text-[#aaa69b]">
      Preparing the atlas...
    </div>
  ),
});

export default function AtlasMap() {
  return <AtlasMapView />;
}
