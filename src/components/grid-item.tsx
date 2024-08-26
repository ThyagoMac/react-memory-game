import { GridItemType } from "@/types/GridItemType"
import logoImg from "@/assets/devmemory_logo2.png";
import Image from "next/image"
import { items } from "@/data/items"

type Props = {
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
  return(
    <div
      className={`
        ${item.isSelected || item.shown ? 'bg-gray-600' : 'bg-red-950 hover:bg-orange-500 transition-all'}
        rounded-lg cursor-pointer flex items-center justify-center h-24
      `}

      onClick={onClick} 
    >
      {!item.isSelected && !item.shown &&
        <Image
          src={logoImg}
          className="w-full h-full object-contain p-2"
          width={87}
          height={100}
          alt="item title"
        />
      }
      {
        (item.isSelected || item.shown) &&
        item.item !== null &&

          <Image src={items[item.item].icon} className="w-full h-full object-contain" width={87} height={100} alt="item title" />
      }
    </div>
  )
}