"use client"
import React, { useEffect, useState } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import Link from 'next/link'
import { SmallHero, ContactForm } from '@/components'
import { motion } from 'framer-motion'

export default function Kontakt() {

	const STATUSES = {
		INITIAL: 'initial',
		SENDING: 'sending',
		SENT: 'sent',
		ERROR: 'error'
	}


	const [messageStatus, setMessageStatus] = useState(STATUSES.INITIAL)

	function changeMessageStatus(status) {
		setMessageStatus(status)
	}

	

	return (
		<main className="text-gray-900 max-w-[150rem] mx-auto bg-gray-50 overflow-hidden">
			<SmallHero img="/contact.jpg" text="KONTAKT"/>
			<div className="max-w-[80rem] mx-auto py-8 lg:py-16 px-6 2xl:px-0 ">
				<div className="grid gap-8 lg:grid-cols-2 ">
					<motion.div 
					initial={{opacity: 0, x: -50}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true}}
					transition={{delay: 0.25}}
					className="flex flex-col gap-4 ">
						<h5 className="text-lg font-medium text-red-500">Kontakt</h5>
						<h4 className="mb-2 text-2xl font-black text-gray-700 uppercase sm:text-3xl lg:text-4xl ">Napisz do nas wiadomość</h4>
						<p className="mb-2 text-gray-600">Jeśli masz jakieś pytania dotyczące naszych usług, bądź chciałbyś uzyskać bardziej
							szczegółowe informacje - zadzwoń do nas! </p>
						<Link
							href="https://www.google.com/maps/place/El-Big/@50.442532,18.8732227,15z/data=!4m6!3m5!1s0x47112984b496b8a3:0xa78092697a8adc33!8m2!3d50.442532!4d18.8732227!16s%2Fg%2F11h16j53d?entry=ttu" className="flex items-center gap-6 group">
							<HiOutlineLocationMarker className="w-16 h-16 p-4 text-red-600 transition-all duration-300 bg-gray-300 rounded-md group-hover:scale-110 group-hover:bg-gray-500 group-hover:text-white" />
							<div>
								<span className="text-lg font-bold text-gray-700 md:text-xl">
									Lokalizacja
								</span>
								<span className="flex group-hover:text-red-400">
									ul. Nakielska 42/44<br />
									42-600, Tarnowskie Góry
								</span>
							</div>
						</Link>
						<div href="/" className="flex items-center gap-6 group">
							<FiPhoneCall className="w-16 h-16 p-4 text-red-600 transition-all duration-300 bg-gray-300 rounded-md group-hover:scale-110 group-hover:bg-gray-500 group-hover:text-white" />
							<div>
								<span className="text-lg font-bold text-gray-700 ">
									Numer telefonu
								</span>
								<span className="flex flex-col">
									<Link href="tel:+48323847014" className="hover:text-red-400">+48 32 384 70 14</Link>
									<Link href="tel:+48324500640" className="hover:text-red-400">+48 32 450 06 40</Link>
								</span>
							</div>
						</div>
						<Link href="mailto:biuro@elbig.com.pl" className="flex items-center gap-6 group">
							<FiMail className="w-16 h-16 p-4 text-red-600 transition-all duration-300 bg-gray-300 rounded-md group-hover:scale-110 group-hover:bg-gray-500 group-hover:text-white" />
							<div>
								<span className="text-lg font-bold text-gray-700 ">
									Adres e-mail
								</span>
								<span className="flex group-hover:text-red-400">
									biuro@elbig.com.pl
								</span>
							</div>
						</Link>

					</motion.div>
					<motion.div 
					initial={{opacity: 0, x: 50}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true}}
					transition={{delay: 0.25}}
					className="relative">
						<div className="absolute z-0 -left-10 lg:left-0 -bottom-6 sm:left-14 w-36 h-36 pattern-dots pattern-blue-500 pattern-bg-gray-50 pattern-size-4 pattern-opacity-100 "></div>
						<div className="absolute z-0 lg:-right-2 -right-8 -top-8 sm:right-14 w-36 h-36 pattern-dots pattern-yellow-400 pattern-bg-gray-50 pattern-size-4 pattern-opacity-100 "></div>
						<ContactForm messageStatus={messageStatus} STATUSES={STATUSES} changeMessageStatus={changeMessageStatus}/>
					</motion.div>

				</div>
			</div>
		</main >
	)
}
