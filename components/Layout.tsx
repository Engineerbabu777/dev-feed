
import NavigationCard from '@/components/NavigationCard';


type Props ={
    children:React.ReactNode;
}

export default function Layout({children}:Props) {



    return(<>
    
    {/* MAIN-PAGE!! */}
    <main className="flex mt-4 max-w-4xl mx-auto gap-6">

      {/* LEFT!! */}
      <section className="w-3/12">
        <NavigationCard />
      </section>


      {/* RIGHT!! */}
      <section className="w-9/12">
        {children}
      </section>


    </main>


    </>)
}