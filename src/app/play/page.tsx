import Image from "next/image";

export default function Play() {
  return (
 <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center">
        <div className="w-[25vw] h-[80vh] bg-[#bbbbbb] rounded-[10px]">
            <div class="w-[100%] h-[60%] outline-1 border-[tomato] border-solid">
                <div class="w-[100%] h-[70%] bg-pink border-[blue] border-solid">
                   <Image className="w-[100%]"
                             src="/music.jpg"
                             alt="Imagem de alguem tocando violao"
                             width={180}
                             height={38}
                             priority
                           />
                </div>
                <div className="flex flex-col items-center">
                     <h1 className="text-black text-[20px] font-[500] m-0">Meu violão</h1>
                     <h2 className="text-center text-black text-[20px] font-[500];
    margin: 0;">Artista desconhecido</h2>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    </div>
  );
}
