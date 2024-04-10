import React from 'react'
import UserDetails from '../../components/profile/userDetails/UserDetails'
import UserPosts from '../../components/profile/userPosts/UserPosts'

const Profile = () => {
  return (
    <div className='max-w-[935px] mx-auto h-full py-8 px-4'>
        <div>
            <UserDetails/>
        </div>
        <div>
            <UserPosts/>
        </div>
    </div>
  )
}

export default Profile