import {useSelector} from 'react-redux'
import { useRef } from 'react'

export default function Profile() {

  const fileRef = useRef(null)
  const {currentUser} = useSelector((state) => state.user)

  // firebase storage
      // allow read;
      // allow write: if
      // request.resource.size < 2 * 1024 * 1024 &&
      // request.resource.contentType.matches('image/.*')


  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className="text3xl font-semibold text-center my-7"> Profile </h1>
        <form className='flex flex-col gap-4'>

        <input 
          type='file' 
          ref={fileRef} 
          hidden 
          accept='image/*' 
        />

        <img
          onClick={() => fileRef.current.click()} 
          src={currentUser.avatar} 
          alt="profile" 
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' 
        />
        <input 
          type="text" 
          placeholder='username'
          id='username' 
          className='border p-3 rounded-lg'
        />
        <input 
          type="text" 
          placeholder='email'
          id='email' 
          className='border p-3 rounded-lg'
        />
        <input 
          type="text" 
          placeholder='password'
          id='password' 
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>update</button>

      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
