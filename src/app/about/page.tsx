"use client"
import React from 'react'
import { BackgroundLines } from "@/components/ui/background-lines";

const page = () => {
    return (
        <div className='min-h-screen py-12 pt-36'>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <div className="max-w-4xl mx-auto p-6 sm:p-10 text-gray-200 shadow-xl rounded-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-100">About Us</h2>
                    <p className="text-base sm:text-lg text-gray-300 mb-4">
                        At <strong >Master the art of music</strong>, we believe in the transformative power of music to inspire creativity, build confidence, and bring people together. Our mission is to nurture every student’s unique musical potential, whether they are picking up an instrument for the first time, preparing for advanced performance, or simply exploring the joy of music.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 mb-4">
                        Founded in <strong>2024</strong>, <strong>Master the art of music</strong> has grown into a thriving community of passionate educators and students of all ages. We offer a wide range of courses tailored to meet the diverse needs of our learners, including piano, guitar, violin, vocal training, drums, and many more. From classical techniques to contemporary styles, our curriculum is designed to offer a comprehensive music education in a supportive and inspiring environment.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 mb-4">
                        Our faculty consists of highly skilled, dedicated musicians who bring their professional experience and love for teaching into every lesson. We emphasize a personalized approach to learning, encouraging students to express themselves through music while mastering the technical skills required for excellence.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 mb-4">
                        In addition to private lessons, we offer group classes, workshops, and performance opportunities that allow students to collaborate and grow within a creative, dynamic community. Our state-of-the-art facilities provide the perfect space for learning, practice, and performance, ensuring every student has the tools they need to succeed.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 mb-4">
                        At <strong>Master the art of music</strong>, we are committed to making music education accessible and enjoyable for everyone. Whether you're an aspiring musician, a seasoned performer, or someone simply looking to enrich your life through music, we invite you to join us on this exciting journey.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 mb-4">
                        Discover the world of music with us — where passion meets possibility!
                    </p>
                </div>
            </BackgroundLines>
        </div>
    )
}

export default page