import React from "react";
import Series from "@/libs/class/Series.class";
import SeriesListItemBody from "@/components/Series/List/SeriesListItemBody";
import SeriesListItemFooter from "@/components/Series/List/SeriesListItemFooter";

export default function SeriesListItem({
  series,
  isAdmin,
}: { series: Series; isAdmin?: boolean }) {
  return (
    <div className="border-b-gray-300 border-b">
      <SeriesListItemBody series={series} isAdmin={isAdmin} />
      {isAdmin && <SeriesListItemFooter title={series.title} id={series.id} />}
    </div>
  );
}
