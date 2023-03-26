import { User } from '@nextui-org/react'
import React from 'react'

const TopbarProfile = ({emoji, greet}) => {
  return (
    <div className='mr-5'>
        <div className='flex flex-row'>
              <h5 className="text-[26px] font-semibold font-righteous my-3">
                  <span className='mr-2'>{emoji}</span>
                  <span className='mr-5'>{greet}</span>
              </h5>
              <User size='xl' bordered zoomed color='secondary' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' name="Chris Marnocha" description="NEXTLAUNDRY Admin" className='font-righteous'/>
        </div>     
    </div>
  )
}

export default TopbarProfile