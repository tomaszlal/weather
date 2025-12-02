import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { Api } from "../../Api";
import { ApiUtils } from "../../utils/ApiUtils";
import SvgIcon from "../icons/SvgIcon";
// import { AdditionalData } from '../../types/ApiTypes';

// type Props = undefined;

export default function AdditionalInfo() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => Api.getWeather({ lat: 50, lon: 20 }),
  });

  const rows = ApiUtils.getAdditionalInfo(data);
  console.log(rows);
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {Array.from(rows.entries()).map(([key, value]) => (
        <div key={key} className="flex justify-between">
          <div>
            <span className="text-gray-500">{key}</span>
            <SvgIcon src={key}></SvgIcon>
          </div>
          <span>{ApiUtils.formatComponent({ label: key, value })}</span>
        </div>
      ))}
    </Card>
  );
}
