import { useSuspenseQuery } from '@tanstack/react-query';
import Card from './Card';
import { Api } from '../../Api';
import { ApiUtils } from '../../utils/ApiUtils';
// import Sunrise from '/src/assets/sunrise.svg';

// type Props = undefined;

export default function AdditionalInfo() {

    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => Api.getWeather({ lat: 50, lon: 20 })
    })

    const rows = ApiUtils.getAdditionalInfo(data);

    return (
        <Card title="Additional Weather Info" childrenClassName="flex flex-col gap-8">
            {
                Array.from(rows.entries()).map (([key, value]) => (
                    <div key={key} className='flex justify-between'>
                        <span className='text-gray-500'>{key}</span>
                        <span>{ApiUtils.formatComponent({label:key, value})}</span>
                    </div>
                ))
            }
        </Card>
    );
}