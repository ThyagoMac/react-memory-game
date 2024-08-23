"use client"

import Image from "next/image";
import restartImg from "@/assets/svgs/restart.svg";
import logoImg from "@/assets/devmemory_logo2.png";

import { InfoItem } from "@/components/info-item";
import { Button } from "@/components/button";
import { items } from "@/data/items";
import { useEffect, useState } from "react";
import { GridItemType } from "@/types/GridItemType";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [movesCount, setMovesCount] = useState<number>(0);
  const [showCrount, setShowCrount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  const resetAndCreateGrid = () => {
    setTimeElapsed(0);
    setMovesCount(0);
    setShowCrount(0);

    //create empty grid
    let totalTiles = items.length * 2
    let finalGrid: GridItemType[] =[];
    for (let i = 0; i < totalTiles; i++) {
      finalGrid.push({
        item: null,
        shown: false,
        isSelected: false,
      });
    }
    //fill gridItems
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || finalGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * totalTiles);
        }

        finalGrid[pos].item = i;
      }
    }

    setGridItems(finalGrid);

    //start game
    setIsPlaying(true);
  }

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
        <div className="grid grid-cols-4 gap-3 w-full md:w-96">
          {gridItems.map((item, index) => (
            <div className="bg-red-950 rounded-lg" key={index}>{item.shown ? "t": 'f'}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
