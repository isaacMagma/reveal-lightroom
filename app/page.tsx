import Image from 'next/image'
import Reveal from '@/components/reveal'
import LightRoom from '@/components/lightRoom'
import {Exo_2} from 'next/font/google'

const Exo2 = Exo_2({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main
      className={Exo2.className}
      >

        <LightRoom
          secretColor={process.env.SECRET_COLOR?.toString() || "#ff6842"}
          secret={process.env.SECRET_EVENT?.toString() || "SECRET EVENT"}
          >
          <Reveal secretWord={process.env.SECRET_WORD?.toString() || "SECRET"} />
        </LightRoom>
      </main>
  )
}
