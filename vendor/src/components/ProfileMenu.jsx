"use client"
import React, { use } from 'react'
import { useRouter } from 'next/navigation';

const ProfileMenu = () => {
    const router = useRouter();

    const handleEditProfile = () => {
        router.push('/edit-profile');
    };

    return (
        <div className="profile-menu border-2 border-gray-300 p-4 rounded-md shadow-lg bg-white w-40 h-45">
            <ul className='space-y-2'>
                <li className='cursor-pointer hover:bg-slate-400 px-1 py-2 rounded-md' onClick={handleEditProfile}>Edit Profile</li>
                <li className='cursor-pointer hover:bg-slate-400 px-1 py-2 rounded-md'>Settings</li>
                <li className='cursor-pointer hover:bg-slate-400 px-1 py-2 rounded-md'>Change Password</li>
                <li className='cursor-pointer hover:bg-slate-400 px-1 py-2 rounded-md'>Logout</li>
            </ul>
        </div>
    )
}

export default ProfileMenu