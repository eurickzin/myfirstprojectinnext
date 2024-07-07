import { Button } from "@/components/btn";
import { Header } from "@/components/header/header";
import { Title } from "@/components/header/title";
import { Inputs } from "@/components/inputs/inputs";
import Image from "next/image";

export default function Home() {
  return (

    <div className="flex justify-center">

      <div>
      <Header/>
      <Title/>
      <Inputs placeholder ="Enter your name" type="email"/>
      <Inputs placeholder ="Enter your email"/>
      <Inputs placeholder ="Enter your country"/>
      <Button/>


    </div>

    <div className="w-[50%]">
      <img className="w-[100%]" src="https://img.freepik.com/fotos-gratis/renderizacao-3d-do-planeta-terra_23-2150498436.jpg?w=740&t=st=1720331103~exp=1720331703~hmac=80024272115a65639f79bcb0e582722e733f4ccfcc08c20e3c74b07a1869b411" />
    </div>

    </div>
    

  );
}
