import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <p>Some of my own projects  that I've worked on.</p>
      <iframe src="https://quick-estate2.onrender.com" frameborder="0"></iframe>
      <p>A Listing Website for Quickly finding a home of our dreams and adding our own listing</p>
      <CallToAction />
    </div>
  )
}