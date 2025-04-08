import { Filter } from '@/components/Filters'
import { Particles } from '@/components/magicui/particles'
import { Button } from '@/components/ui/button'
import { Clock } from 'iconsax-react'
import React from 'react'
import RecommendedCards from './RecommendedCards'
import ActiveStaking from './ActiveStaking'
import useCoinData from '@/hooks/useCoinData'



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Dashboard = () => {

  const { isLoading, data } = useCoinData()

  console.log(data);

  return (

    <div>
      <div className=' flex m-8 h-[50vh]'>

        <div className='basis-8/12'>
          <h4 className='text-[#cdc5f8] space-x-3 text-xs font-semibold flex items-center gap-4'>
            Recommended coins for 24 hours
            <Clock color="#cdc5f8" variant="Bold" size={14} />
            <Button className='bg-[#2E2D40] rounded-lg'>
              3 Assets
            </Button>

          </h4>

          <div className='flex justify-between'>
            <h1 className='text-3xl'>Top Staking Assets</h1>
            <div className='flex gap-4'>


              <Filter
                options={["24h", "7days", "14days", "30days"]}
                width={90}
                label='Time'
              />
              <Filter
                options={["Proof of stake", "Proof of Concept", "Market Decription"]}
                width={100}
                label='Documents'
              />
              <Filter
                options={["Desc", "potato", "Orange"]}
                width={100}
                label='desc' />

            </div>

          </div>


          <div className='flex gap-4 mt-8  w-full'>
            {isLoading && <>Loading...</>}

            {/* {
              data && data.map((val, ind) => (
                <RecommendedCards
                  key={ind}
                  img={val.image}
                  coinName={val.name} />
              ))
            } */}


            <Carousel
              opts={{
                align: "center",
              }}
              className="max-w-3xl "
            >
              <CarouselContent>
                {data && data.map((val, ind) => (
                  <div key = {ind} >

                  <CarouselItem  className="md:basis-1/2 lg:basis-1/3"> 
                      <RecommendedCards
                        coin={val}/>
                  </CarouselItem>

                  </div>
                ))}
              </CarouselContent>
              {  !isLoading && <CarouselPrevious />}
              
              {!isLoading && <CarouselNext />}
            </Carousel>

          </div>

        </div>



        <div className='basis-4/12 flex justify-end'>

          <div className='
          relative
            h-[360px] 
            w-4/5 
            py-4 px-6
            bg-gradient-to-b from-[#0c0c1d] via-[#1a1333] to-[#826BBE]
            border-[0.5px] border-gray-600
            shadow-2xl 
            rounded-2xl'>



            {/* top div  */}
            <div className='flex items-center justify-between'>
              <h1>Logo</h1>
              <Button className='bg-[#B6A6F9] text-black rounded-lg'>
                New
              </Button>
            </div>


            <div>
              <h1 className="text-3xl font-light text-white">
                Liquid Stacking Portfolio
              </h1>

              <p className='text-[#525365] text-xs'>
                An all in one portfolio
                that helps you make smarter
                investments into Ethereum Liquid
                Staking
              </p>
            </div>


            <div className='my-8'>
              <Button className='w-full bg-[#C1B6FE] text-xs text-black'>
                Connect with  Wallet
              </Button>
            </div>

            <Particles
              className="absolute inset-0 z-0"
              quantity={100}
              ease={80}
              color={"#5e5b5b"}
              refresh
            />
          </div>
        </div>
      </div>

      <hr className='bg-gray-500 h-[0.3px]' />

      <ActiveStaking />
    </div>
  )
}

export default Dashboard