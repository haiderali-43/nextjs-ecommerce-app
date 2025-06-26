import Link from 'next/link';


const ProfileLayout = ({ children }) => {
    return (
        <div>

            {/* sidebar and other content */}
            <div className='flex space-x-8'>
                {/* profile page sidebar */}
                <div className='border border-gray-300 p-5 leading-8 rounded-xl mt-6 h-[400px] w-[20%] bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg'>
                    <ul className='space-y-3'>
                        <li>
                            <Link href={'/profile'}>
                                <p className='block py-2 px-4 bg-gray-50 hover:bg-gray-200 text-gray-700 hover:text-black rounded-lg shadow transition duration-200'>
                                    Profile
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile/my-orders'}>
                                <p className='block py-2 px-4 bg-gray-50 hover:bg-gray-200 text-gray-700 hover:text-black rounded-lg shadow transition duration-200'>
                                    My Orders
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile/addresses'}>
                                <p className='block py-2 px-4 bg-gray-50 hover:bg-gray-200 text-gray-700 hover:text-black rounded-lg shadow transition duration-200'>
                                    Addresses
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile/payment-methods'}>
                                <p className='block py-2 px-4 bg-gray-50 hover:bg-gray-200 text-gray-700 hover:text-black rounded-lg shadow transition duration-200'>
                                    Payment Methods
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile/wishlist'}>
                                <p className='block py-2 px-4 bg-gray-50 hover:bg-gray-200 text-gray-700 hover:text-black rounded-lg shadow transition duration-200'>
                                    Wishlist
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile/support-tickets'}>
                                <p className='block py-2 px-4 bg-gray-50 hover:bg-gray-200 text-gray-700 hover:text-black rounded-lg shadow transition duration-200'>
                                    Support Tickets
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='border border-gray-300 p-5 leading-8 rounded-xl mt-6 bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg w-[75%]'>
                    {children}
                </div>

            </div>


        </div>
    );
}

export default ProfileLayout;
