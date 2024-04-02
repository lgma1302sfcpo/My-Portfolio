import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between p-24 overflow-y-auto">
      <div className="z-10   w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-3xl font-bold">
            Experiences
          </h1>
          <p style={{ marginTop: '2rem' }} className="text-lg">Trainee</p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <p className="main-activities">Main activities:</p>

            Using the React Native language to create applications
            mobile.

            Web development tasks on websites and systems using
            the tools: HTML, CSS, Jquery, PHP and CakePHP in my daily life.

            CakePHP framework for development of the
            back-end and front-end for applications
            MySQL to manage and manipulate data with the tool
            PHPMyAdmin.
          </p>
        </div>
        <div style={{ marginTop: '4rem' }}>
          <p className="text-lg">React Native front end junior DEVELOPER</p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <p className="main-activities">Main activities:</p>

            Construction of Mobile applications with React Native, developed for Android and IOS, following how
            good practices and official recommendations in every project I work on. Through
            code versioning with GIT and BitBucket, I developed in a team in an agile way,
            prioritizing the delivery of results.
          </p>
        </div>


        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div style={{ marginTop: '7rem' }}>
            <Image
              src="/myphoto.jpeg"
              width={200}
              height={25}
              style={{ marginBottom: '2rem', marginLeft: '1rem' }}
            />
            <a style={{ marginTop: '3rem' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Luiz Guilherme Monteiro Arlindo {' '}
              <div style={{ marginTop: '1rem' }}>
                <p>Dev FullStack Mobile e Web</p>
                <p>E-mail: lgma86932@gmail.com</p>
                <p>+55 13 99768-8584</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">


      </div>


      <div style={{ marginTop: '3rem' }} className="flex flex-col lg:text-left">
        <h1 className="text-3xl font-bold">
          About Me
        </h1>
        <p style={{ marginTop: '2rem' }} className="text-lg">I have in-depth knowledge in several areas of programming, standing out especially in front-end development with React Native. Furthermore, I have practical experience in JavaScript, React, PHP and intermediate level knowledge in Banking of Data, providing a solid foundation to face complex challenges in the software development.</p>
      </div>

      <div style={{ marginTop: '3rem' }} className="flex flex-col lg:text-left">
        <h1 className="text-3xl font-bold">
          Awards
        </h1>
        <p style={{ marginTop: '2rem' }} className="text-lg">Fundação Bradesco - 2019</p>
        <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
          Fundamentals of programming logic - Bradesco Foundation.
        </p>
        <p style={{ marginTop: '2rem' }} className="text-lg">React Native: Develop Native APPs for Android and iOS - 2020</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">ISO 27001: Building Information Security Policies -2020</p>
      </div>

      <div style={{ marginTop: '3rem' }} className="flex flex-col lg:text-left">
        <h1 className="text-3xl font-bold">
          Experiences
        </h1>
        <p style={{ marginTop: '2rem' }} className="text-lg">Git - 2023 Until Today</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>I used in my widely used distributed version control systems to track changes to source code during software development, managing and combining their changes efficiently.</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">Android Development</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>Android app development with React Native, helping with team collaboration, change tracking, version management and integration with other development tools.</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">ios development</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>Ios app development with React Native, helping with team collaboration, change tracking, version management and integration with other development tools.</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">Npm/Yarn</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>High-level proficiency.</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">Debug</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>Experience with debugging, and performance optimization of React Native and React applications.</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">Npm/Yarn</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>High-level proficiency.</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">REST / HTTP / JWT</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>Understanding of REST / HTTP / JWT technologies.</p>
        <p style={{ marginTop: '2rem' }} className="text-lg">Asynchronous requests</p>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>Experience with promises, asynchronous requests.</p>
      </div>

      <div style={{ marginTop: '3rem' }} className="flex flex-col lg:text-left">
        <h1 className="text-3xl font-bold">
          Skills
        </h1>
        <p style={{ marginTop: '1rem' }} className="text-lg">-Quick Adaptation</p>
        <p style={{ marginTop: '1rem' }} className="text-lg">-Great interpersonal relationship</p>
        <p style={{ marginTop: '1rem' }} className="text-lg">-Proactive</p>
        <p style={{ marginTop: '1rem' }} className="text-lg">-Solid verbal communication</p>
        <p style={{ marginTop: '1rem' }} className="text-lg">-Dynamic</p>
        <p style={{ marginTop: '1rem' }} className="text-lg">-Advanced English</p>
      </div>

      <div style={{ marginTop: '3rem' }} className="flex flex-col lg:text-left">
        <h1 className="text-3xl font-bold">
          Education
        </h1>
        <h1 style={{ marginTop: '2rem' }}>Esamc College, Santos 2021 - 2026</h1>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>Studying: Computer Engineering.</p>
        <h1 style={{ marginTop: '2rem' }}>CNA languages 2019 - 2023</h1>
        <p className={`m-0 max-w-[70ch] text-sm opacity-50`}>Graduated - Advanced Level.</p>
      </div>
    </main >
  );
}
