import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData(){
    //Get file Name from under Posts

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData =  fileNames.map((fileName) => {
        //Remove '.md' from file name to get id
        const id = fileName.replace(/\.md$/, '')
        //read Mark down file as string

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        //Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
        const blogPost: Blogpost = {
            id,
            title: matterResult.data.title,
            date:  matterResult.data.date,
        }
        return blogPost
    })
    //sort post by date
    return allPostsData.sort((a,b) => a.date < b.date ? 1: -1)
}