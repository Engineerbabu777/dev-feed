import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Cart';
import Link from 'next/link';
import NavigationCard from '@/components/NavigationCard';

const inter = Inter({ subsets: ['latin'] })


export default function Page({ }) {


  return (<>
    {/* MAIN-PAGE!! */}
    <main className="flex mt-4 max-w-4xl mx-auto gap-6">

      {/* LEFT!! */}
      <section className="w-1/3">
        <NavigationCard />
      </section>


      {/* RIGHT!! */}
      <section className="grow">
        <Card>form card</Card>
        <Card>First post</Card>
      </section>


    </main>

  </>);

} 