import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GithubActivity = () => {
  return (
      <section className="bg-[#14121A] text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Days I <span className='text-fuchsia-500'>Code</span></h2>
      <div className="flex justify-center">
        <GitHubCalendar
          username="ADNath"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
             theme={{
            dark: [
              '#ffffff', // level 0 (no contributions) - white
              '#d946ef', // level 1 - fuchsia
              '#d946ef', // level 2 - fuchsia
              '#d946ef', // level 3 - fuchsia
              '#d946ef', // level 4 - fuchsia
            ],
          }}
          colorScheme="dark"
        />
      </div>
    </section>
  )
}

export default GithubActivity
