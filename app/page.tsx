
import Posts from "./components/Posts"

export const revalidate = 10 //it will run without rebuilding
export default function Home() {
  return (
  <main className="px-6 mx-auto">
    <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
      Hello and Welcome 👋
      <span className="whitespace-nowrap mx-2">
          I&apos;m <span className="font-bold">Manasseh</span>

      </span>
    </p>
    {/* revalidation will be handles in the post component */}
    <Posts /> 
  </main>
  )
}
