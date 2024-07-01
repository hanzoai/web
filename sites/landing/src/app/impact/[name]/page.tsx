import React from 'react';
//types
import type { Impact } from '@/types';
import { param } from 'jquery';

const data: Impact[] = [
  { name: 'Triller', founder: 'Jeniffer Patel', role: 'Founder & CEO', description: `Jenifer has spearheaded the green technology industry for over a decade, turning her stgartup into a leading provider of eco-friendly products. GG engergy is a pioneer in green solutions across global markets.."We were Greatefull for the opportunity to work with Hanzo and take the company public."` },
  { name: 'Impact%20Hub%20Bali', founder: 'Rebecca Rocco', role: 'Managing Director', description: `Her expertise in deploying new technologies has streamlined operations for numberous finanical institutions. "hanzo's multi-currency payment system is robust and reliable, making it easier for us to handle a global clientele. There commitment to innovation and security is unmatched` },
]

interface Props {
  params: { name: string }; // Existing prop
}

const ImpactItem: React.FC<Props> = ({ params } : Props) => {

    const _data: Impact|undefined = React.useMemo (() => data.find((_item: Impact) => _item.name === params.name ), [params.name]);

    if (_data) {
        return (
            <div className='p-3 fixed top-0 left-0 right-0 bottom-0 flex'>
                <div className='w-full border-b border-t border-[red]'>
                    <h2 className='text-xl my-6'>{_data.name}</h2>
                    <h2 className='text-xl mt-3'>{_data.founder}</h2>
                    <h2 className='text-xl mt-3'>{_data.role}</h2>
                    <p className='text-xl mt-5'>{_data.description}</p>
                </div>
            </div>
        )
    } else {
        return <div></div>;
    }
}

export default ImpactItem;