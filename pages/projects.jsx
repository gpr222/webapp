import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbarhome from '../components/Navbarhome'
import { useState } from 'react';
import matter from 'gray-matter'
import fs from 'fs';

const Projects = ({ projects }) => {
    return (
        <>
            <div className="container mx-auto px-14 ">
                <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 mx-auto">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 ">PROJECTS.</h1>
                    <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Dept. of Computer Science and Engineering</h4>
                </section>
                <section>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                        {projects.map(project => (
                            <div
                                key={project.slug}
                                className='border border-gray-200 hover:shadow-slate-800 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between'>                               
                                <Link href={`${project.link}`} className='max-h-64' >
                                    <a href={`${project.link}`}>
                                        <h1 className='p-4 pb-0 font-extrabold text-center'>{project.title}</h1>
                                        <h2 className='p-2 text-center justify-end'>- {project.author   }</h2>
                                        
                                            <img 
                                            // width={650}
                                            // height={340}
                                            alt={project.title}
                                            src={`/${project.poster}`}
                                        />
                                        
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
    const filesInBlogs = fs.readdirSync('./content/projects')

    // Get the front matter and slug (the filename without .md) of all files
    const projects = filesInBlogs.map(filename => {
        const file = fs.readFileSync(`./content/projects/${filename}`, 'utf8')
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
            projects
        }
    }

}


export default Projects