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

const Blogs = ({ blogs }) => {
  return (
    <>

      <div className="container mx-auto px-14 ">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">BLOGS.</h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Dept. of Computer Science and Engineering</h4>
        </section>
        <section>
          <ul className={styles['blog-list']}>
            {blogs.map(blog => (
              <li key={blog.slug} type="">

                <div className="mb-8 md:mb-16  lg:px-8">
                  <div className="-mx-5 my-14 sm:mx-2 lg:px-0">
                    <a aria-label={blog.title} href={`/blogs/${blog.slug}`}>
                      <div className="relative w-5/5 h-80 ">
                        <Image
                          // src={"/blogs1.jpg"}
                          src={`${blog.poster}`}
                          alt="Picture of the author"
                          layout="fill" // required
                          objectFit="cover" // change to suit your needs
                          className="max-w-full rounded-xl " // just an example
                        />
                        


                      </div>


                    </a>
                  </div>

                  <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
                    <div>
                      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <a className="hover:underline" href={`/blogs/${blog.slug}`}>{blog.title}</a>
                      </h3>
                      {/* <div className="mb-4 md:mb-0 text-lg"><time dateTime="2020-03-08">March	8, 2020</time>
                    </div> */}
                    </div>
                    <div>
                      <div className="text-lg leading-relaxed mb-4">
                        <ReactMarkdown>
                          {blog.data}
                        </ReactMarkdown>

                      </div>
                      <div className="flex items-center">

                        <div className="text-xl font-bold">{blog.author}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>


      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
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
      blogs
    }
  }

}

export default Blogs