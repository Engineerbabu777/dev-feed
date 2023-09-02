

import Layout from '@/components/Layout';
import Card from '@/components/Cart';
import Avatar from '@/components/Avatar'

export default function Page(){


    return(<Layout>

{/* BACKGROUND! */}
        <Card noPadding>
            <div className="relative">

                <div className="flex h-36 justify-center items-center overflow-hidden rounded-md ">
                  <img src="https://images.unsplash.com/photo-1617002424329-cdf48dadb1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" alt="test-alt" />
                </div>
          
                <div className="absolute left-8 top-24">
                  <Avatar big />
                </div>

                <div className="p-4 pb-24">
                    <div className="ml-32">
                        <h2 className="text-3xl font-bold">John Doe</h2>
                        <p className="text-gray-500 leading-4 font-semibold">Taskim, Turkey</p>
                    </div>
                </div>

            </div>
        </Card>    
    
    
    
    </Layout>)
}