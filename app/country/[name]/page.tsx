import { IoArrowBack } from 'react-icons/io5';
import { Info } from '../../components/Info';
import Link from 'next/link';
import { Country, Params } from '../../types';

async function getCountryData(name: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!res.ok) throw new Error('Failed to fetch country data');
  const data: Country[] = await res.json();
  return data[0];
}

export const generateMetadata = ({ params }: Params) => {
  return {
    title: `Country ${params.name}`
  };
};

export default async function Details({ params }: Params) {
  const { name } = params;
  const country = await getCountryData(name);

  return (
    <div className='container'>
      <Link className='card-link' href='/'>
        <IoArrowBack /> Back
      </Link>
      {country && <Info {...country} />}
    </div>
  );
}
