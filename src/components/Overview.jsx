
const Overview = () => {
  return (
    <div className="mb-9">
      <h2 className="text-sm font-bold uppercase md:mb-3 mb-8 tracking-widest">About</h2>
      <div className="flex flex-col gap-4 text-grayCustom">
        <p className="text-base">During my graduation, I landed an internship at <b className="text-white">Persistent</b>, where I dove into React and JavaScript, building my first project: <b className="text-white">an expense tracker.</b></p> 
        <p className="text-base">That experience sparked my passion for creating interactive and efficient web applications. Later, I received an offer from <b className="text-white">Quantiphi</b>, where I had the chance to work on a range of projects, from <b className="text-white">front-end to back-end</b>, building my expertise across various technologies.</p> 
        <p className="text-base">In my free time, I love experimenting with new app ideas, bridging front-end aesthetics with robust back-end functionality.</p>
        <p className="text-base">When I’m not coding, you’ll likely find me exploring new destinations, and hopping between cafes.</p>
        <a 
          href="https://storage.googleapis.com/resume-hosting/672dbdf6474a0.pdf" 
          className="font-bold text-white text-md bg-teal-400 w-44 text-center p-2 rounded-3xl mt-5"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Full Resume
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
        </a>

      </div>
    </div>
  )
}

export default Overview