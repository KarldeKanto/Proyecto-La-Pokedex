import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Karl De Kanto</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">
        Welcome to Page of{' '}
        <a className="text-blue-600" href="https://www.youtube.com/channel/UCFlMi1a7owadd78mrbE1xRA/videos">
          Karl De Kanto!
        </a>
      </h1>

      <div className="text-center mt-10">
        <a
          href="http://localhost:3000/pokedex"
          className=" text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Pokedex 🤙</h3>
          <p className="mt-4 text-xl">
            
          </p>
        </a>
      </div>
    </main>

    <footer className="flex items-center justify-center w-full h-24 border-t">

    </footer>
  </div>
  )
}
