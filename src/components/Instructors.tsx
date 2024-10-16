"use client"

import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { motion } from "framer-motion"

const Instructors = () => {

    const instructors = [
        {
            id: 1,
            name: 'Elena Briggs',
            designation: 'Vocal Coach',
            image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            name: 'Marcus Reid',
            designation: 'Guitar Instructor',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
        },
        {
            id: 3,
            name: 'Julia Zhang',
            designation: 'Piano Teacher',
            image:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 4,
            name: 'Andre Gomez',
            designation: 'Drumming Expert',
            image:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
    ];

    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: [20, -5, 0], }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    <Highlight className='text-black dark:text-white text-2xl md:text-4xl lg:text-7xl px-8'>
                        Meet Our Instructors
                    </Highlight>
                    <p className="text-base md:text-lg text-white text-center my-4 ">Discover the talented professionals who will guide your musical journey</p>
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={instructors} />
                    </div>
                </motion.h1>
            </HeroHighlight >
        </div >
    );
}

export default Instructors