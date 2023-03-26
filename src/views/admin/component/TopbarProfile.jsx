import { User } from '@nextui-org/react'
import React from 'react'
import { usersAtom } from '../../../logic/atoms/users';
import { useRecoilValue } from 'recoil';

const TopbarProfile = ({emoji, greet}) => {
  const user = useRecoilValue(usersAtom)
  return (
    <div className='mr-5'>
        <div className='flex flex-row'>
              <h5 className="text-[26px] font-semibold font-righteous my-3">
                  <span className='mr-2'>{emoji}</span>
                  <span className='mr-5'>{greet}</span>
              </h5>
              <User bordered zoomed color='secondary' name={user.fullname} description={`${user.placement.nama_outlet.toUpperCase()} ${user.role.toUpperCase()}`} className='font-righteous'/>
        </div>     
    </div>
  )
}

export default TopbarProfile