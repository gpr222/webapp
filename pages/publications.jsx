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

const Publications = ({ publications }) => {
  return (
    <>

      <div className="container mx-auto px-14 ">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 ">PUBLICATIONS.</h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Dept. of Computer Science and Engineering</h4>
        </section>
        <section>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
            {publications.map(publication => (
              <div
                key={publication.slug}
                className='border border-gray-200 hover:shadow-slate-800 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between'>
                  <div className=''>
                <h1 className='p-4 pb-0 font-extrabold text-center font-serif'>{publication.title}</h1>
                <h2 className='p-2 text-center justify-end'>- {publication.author}</h2>
                </div>
                <Link href={`${publication.file.indexOf(':') === -1 ? '/' : ''}${publication.file}`} >

                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span >Download</span>
                  </button>
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
  const filesInBlogs = fs.readdirSync('./content/publications')

  // Get the front matter and slug (the filename without .md) of all files
  const publications = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/publications/${filename}`, 'utf8')
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
      publications
    }
  }

}

export default Publications