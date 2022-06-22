import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbarhome from '../components/Navbarhome'
import fs from 'fs'
import { useState } from 'react';
import matter from 'gray-matter'

const Events = ({ events }) => {
    return (
        <>

            <div className="container mx-auto px-14 ">
                <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">EVENTS.</h1>
                    <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Dept. of Computer Science and Engineering</h4>
                </section>
                <section>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                        {events.map(event=> (
                            <div
                                key={event.slug}
                                className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
                            >
                                <Link href={`/events/${event.slug}`}>
                                    <a>
                                        <img
                                            width={650}
                                            height={340}
                                            alt={event.title}
                                            src={`${event.poster}`}
                                        />
                                        <h1 className='p-4'>{event.title}</h1>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    // List of files in blgos folder
    const filesInBlogs = fs.readdirSync('./content/events')

    // Get the front matter and slug (the filename without .md) of all files
    const events = filesInBlogs.map(filename => {
        const file = fs.readFileSync(`./content/events/${filename}`, 'utf8')
        const matterData = matter(file)
        const markdown = matterData.content
        return {
            ...matterData.data, // matterData.data contains front matter
            slug: filename.slice(0, filename.indexOf('.')),
            data: markdown
        }

    })

    return {
        props: {
            events
        }
    }

}

export default Events