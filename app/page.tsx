
import Link from 'next/link'

const Home = () => {
  return (
    <div className="
    h-screen 
    grid
    place-content-center
    "
    >
      <Link className= "text-rose-500 text-6xl underline font-bold" href='/signup'> Register Now</Link>
    </div>
  )
}

export default Home