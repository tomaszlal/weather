import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { Api } from "../../Api";
import { ApiUtils } from "../../utils/ApiUtils";
import SvgIcon from "../icons/SvgIcon";
import { Utils } from "../../utils/Utils";
import type { WeatherKey } from "../../types/Types";
import type { Coordinates } from "../../types/ApiTypes";

type Props = {
  coordinates: Coordinates;
};

export default function AdditionalInfo({ coordinates }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coordinates],
    queryFn: () => Api.getWeather({ lat: coordinates.lat, lon: coordinates.lon }),
  });

  const rows = ApiUtils.getAdditionalInfo(data);

  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {Array.from(rows.entries()).map(([key, value]) => (
        <div key={key} className="flex justify-between">
          <div className="flex gap-4">
            <span className="text-gray-500">
              {Utils.additionalNames.get(key as WeatherKey)}
            </span>
            <SvgIcon className="invert size-6" src={key}></SvgIcon>
            <span>{Utils.getWindDirection({ label: key, value })}</span>
          </div>
          <span>{ApiUtils.formatComponent({ label: key, value })}</span>
        </div>
      ))}
    </Card>
  );
}
