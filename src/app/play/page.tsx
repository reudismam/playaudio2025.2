'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Play() {

  let [contador, setContador] = useState<number>(0);

  useEffect(()=>{
      alert(contador);
  }, [contador]);

  const increment = () => {
    setContador(contador + 1);
    console.log(contador);
  }
  
  function decrement() {
    setContador(contador - 1);
    console.log(contador);
  }

  return (
     <div className="flex h-[100vh] flex-col items-center justify-center">
      <button onClick={e => increment()} className="bg-blue-500 w-[300px]">Incrementar</button>
      <button onClick={e => decrement()} className="m-4 bg-blue-500 w-[300px]">Decrementar</button>
      <h1 className="text-center m-4">{contador}</h1>

     </div>
  );
}
