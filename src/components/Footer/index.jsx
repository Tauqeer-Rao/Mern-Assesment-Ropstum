import { Divider } from 'antd'
import React from 'react'
import ContactIcon from '../../assets/icons/Footer/contact.svg'
import XIcon from '../../assets/icons/Footer/x-icon.svg'
import FBIcon from '../../assets/icons/Footer/fb-icon.svg'
import YoutubeIcon from '../../assets/icons/Footer/youtube-icon.svg'

const Footer = () => {
    return (
        <footer className='flex justify-center mt-20'>
            <div className='w-[70%]'>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>
                    <section className='flex flex-col w-full lg:w-[30%] gap-4'>
                        <p className='text-7xl font-bold text-[#50A3B1]'>LOGO</p>
                        <p className='text-lg font-normal description_color'>Experience the convenience of Recovery Delivered, your trusted source for online medication delivery. We bring the pharmacy to your doorstep, ensuring fast, discreet, and reliable service. Whether you're managing a chronic condition or need a one-time prescription filled, we make the process simple and hassle-free</p>
                    </section>

                    <section className='flex justify-between w-full lg:w-[60%] flex-col sm:flex-row gap-8 lg:gap-12'>
                        <div className='flex flex-col gap-6'>
                            <p className='text-2xl font-frank_luhi font-normal base_color'>Quick Links</p>
                            <div className='flex flex-col gap-4 description_color'>
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Owners</p>
                                <p>Tenants</p>
                                <p>Properties</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='text-2xl font-frank_luhi font-normal base_color'>Other Links</p>
                            <div className='flex flex-col gap-4 description_color'>
                                <p>Online Medications</p>
                                <p>Download App</p>
                                <p>Start Treatment</p>
                                <p>Online Urgent Care</p>
                                <p>FAQ</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-6'>
                                <p className='text-2xl font-frank_luhi font-normal base_color'>Contact</p>
                                <div className='flex gap-2 description_color'>
                                    <img src={ContactIcon} alt='contact-icon' className='w-5 h-5 self-center' />
                                    <p>1-866-757-9868</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6 description_color'>
                                <p className='text-2xl font-frank_luhi font-normal base_color'>Social Media</p>
                                <div className='flex gap-3'>
                                    <img src={XIcon} alt='x-icon' />
                                    <img src={FBIcon} alt='facebook-icon' />
                                    <img src={YoutubeIcon} alt='youtube-icon' />
                                </div>
                                <p className='text-sm font-normal description_color'>Designed and Developed By Ropstam</p>
                            </div>
                        </div>
                    </section>
                </div>
                <Divider />
                <div className='pb-4 text-sm font-normal description_color'>
                    ©2024 – Recovery Delivered | All Right Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer