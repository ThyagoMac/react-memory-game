import Image from "next/image";

type Props = {
  icon?: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ icon, label, onClick }: Props) => {
  return (
    <button
      className="w-full py-2 px-3 rounded-md flex items-center bg-lime-500 hover:bg-orange-500 transition-all"
      onClick={onClick}
    >
      {icon && 
        <Image className="border-r pr-3 h-full" src={icon} alt="logo" width={30} height={30} />
      }
      <span className="flex-1">
        { label }
      </span>
    </button>
  )
}