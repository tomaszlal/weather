import { useSuspenseQuery } from '@tanstack/react-query';
import Card from './Card';
import { Api } from '../../Api';
import { AdditionalRows } from '../../types/ApiTypes';
import { ApiUtils } from '../../utils/ApiUtils';

// type Props = undefined;

export default function AdditionalInfo() {

    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
    })

    const rows = AdditionalRows;
    const rows2 = ApiUtils.getAdditionalInfo(data);

    return (
        <Card title="Additional Weather Info" childrenClassName="flex flex-col gap-8">
            {rows.map(({label, value}) => (
                <div className="flex justify-between" key={value}>
                    <span className="text-gray-500">{label}</span>
                    <span>{data.current.pressure_msl}</span>
                </div>
            ))}
        </Card>
    );
};
