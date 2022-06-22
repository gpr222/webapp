import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'
import Image from 'next/image'

export default function Event({ frontmatter, markdown }) {
    return (
        <div>
            <Head>
                <title>Demo Event | {frontmatter.title}</title>
            </Head>
            <h1>{frontmatter.title}</h1>
            <span> <Image src= {frontmatter.poster}  /></span>
            <h3>{frontmatter.author}</h3>
            <hr />
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const fileContent = matter(fs.readFileSync(`./content/events/${slug}.md`, 'utf8'))
    let frontmatter = fileContent.data
    const markdown = fileContent.content

    return {
        props: { frontmatter, markdown }
    }
}

export async function getStaticPaths() {
    const filesInProjects = fs.readdirSync('./content/events')

    // Getting the filenames excluding .md extension
    // and returning an array containing slug (the filename) as params for every route
    // It looks like this
    // paths = [
    //   { params: { slug: 'my-first-blog' }},
    //   { params: { slug: 'how-to-train-a-dragon' }},
    //   { params: { slug: 'how-to-catch-a-pokemon' }},
    // ]
    const paths = filesInProjects.map(file => {
        const filename = file.slice(0, file.indexOf('.'))
        return { params: { slug: filename } }
    })

    return {
        paths,
        fallback: false // This shows a 404 page if the page is not found
    }
}