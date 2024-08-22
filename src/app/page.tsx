"use client"

import Image from "next/image";
import restartImg from "@/assets/svgs/restart.svg";
import logoImg from "@/assets/devmemory_logo2.png";

import { InfoItem } from "@/components/info-item";
import { Button } from "@/components/button";

export default function Home() {
  const handleRestartBtn = () => {
    console.log('pipi')
  }
  return (
    <main className="min-h-screen w-full max-w-3xl m-auto">
      <div className="flex flex-col md:flex-row p-10 gap-10">
        <div className="flex flex-col gap-6 flex-1 items-center md:items-baseline">
          <div>
            <Image src={logoImg} alt="logo" width={200} height={100} />
          </div>
          <div className="flex flex-col gap-4">
            <InfoItem label="Timer" info="00:00" />

            <InfoItem label="Moves" info="0" />
          </div>

          <Button label="Start" icon={restartImg} onClick={handleRestartBtn} />
        </div>
        <div className="grid grid-cols-4 flex-1">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </div>
    </main>
  );
}
