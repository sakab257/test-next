import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (

    <div className="h-screen w-full flex flex-1 items-center justify-center flex-col bg-accent-foreground">
      <div className="z-10 w-full sm:w-1/2 h-1/2 flex flex-col items-center justify-center">
        <h1 className={`text-8xl sm:text-9xl text-white`}>Portail</h1>
        <form className="w-full h-1/3 flex justify-center items-start p-4">
          <div className="w-full lg:w-2/3 h-1/2 flex items-center justify-evenly">
            {/* Mettre ./signin */}
            <Link href={'./dashboard'}>
              <Button size={'lg'} className={`border-accent border`}>
                Se connecter
              </Button>
            </Link>
            {/* Mettre ./signup */}
            <Link href={'./dashboard'}>
              <Button size={'lg'} variant={'outline'}>
                S'inscrire
              </Button>
            </Link>

          </div>
        </form>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-screen z-[-1]">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div> */}

    </div>
  );
}
