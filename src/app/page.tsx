"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import restartImg from "@/assets/svgs/restart.svg";
import logoImg from "@/assets/devmemory_logo2.png";
import { InfoItem } from "@/components/info-item";
import { Button } from "@/components/button";
import { GridItem } from "@/components/grid-item";
import { GridItemType } from "@/types/GridItemType";
import { items } from "@/data/items";
import { formatTimeElapsed } from "@/utils/formatTimerElapsed";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [movesCount, setMovesCount] = useState<number>(0);
  const [showCrount, setShowCrount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, timeElapsed]);


  useEffect(() => {
    if(showCrount === 2) {
      let tmpGrid = [...gridItems];
      
      let opened = gridItems.filter(gridItem => {
        return gridItem.shown === true;
      });

      //equals
      if(
        opened.length === 2 &&
        opened[0].item === opened[1].item
      ) {
        tmpGrid.forEach(item => {
          if(item.shown) {
            item.isSelected = true;
            item.shown = false;
          }
        });

        setMovesCount(movesCount + 1);
        setGridItems(tmpGrid);
        setShowCrount(0);
        return;
      }
      
      //not equal
      setTimeout(() => {
        tmpGrid.forEach(item => {
          if(item.shown) {
            item.shown = false;
          }
        });

        setMovesCount(movesCount + 1);
        setGridItems(tmpGrid);
        setShowCrount(0);
      }, 600);

    }
  }, [showCrount, gridItems, movesCount]);

  useEffect(() => {
    if(movesCount > 0 && gridItems.every(item => item.isSelected === true)) {
      setIsPlaying(false);
    }

  }, [gridItems, movesCount])

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

  const handleItemClicked = (index: number) => {
    if(isPlaying && index !== null && showCrount < 2) {
      let tmpGrid = [...gridItems]

      if(!tmpGrid[index].isSelected && !tmpGrid[index].shown) {
        tmpGrid[index].shown = true;
        setShowCrount(showCrount + 1)
      }
      setGridItems(tmpGrid);
    }
  }
  return (
    <main className="min-h-screen w-full max-w-3xl m-auto">
      <div className="flex flex-col md:flex-row p-10 gap-10">
        <div className="flex flex-col gap-6 flex-1 items-center md:items-baseline">
          <div>
            <Image src={logoImg} alt="logo" width={200} height={100} />
          </div>
          <div className="flex flex-col gap-4">
            <InfoItem label="Timer" info={formatTimeElapsed(timeElapsed)} />

            <InfoItem label="Moves" info={`${movesCount}`} />
          </div>

          <Button label="Start" icon={restartImg} onClick={resetAndCreateGrid} />
        </div>
        <div className="grid grid-cols-3 gap-3 w-full sm:grid-cols-4 md:w-96">
          {gridItems.map((item, index) => (
            <GridItem key={index} item={item} onClick={() => handleItemClicked(index)} />
          ))}
        </div>
      </div>
    </main>
  );
}
