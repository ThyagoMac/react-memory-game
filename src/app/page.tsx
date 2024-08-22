import Image from "next/image";
import logoImg from "@/assets/devmemory_logo2.png";
import restartImg from "@/assets/svgs/restart.svg";
import { InfoItem } from "@/components/info-item";

export default function Home() {
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
          <button
            className="w-full py-2 px-3 bg-lime-500 hover:bg-orange-500 transition-all rounded-md flex items-center"
          >
            <Image className="" src={restartImg} alt="logo" width={20} height={20} />
            <span className="flex-1 border-l ml-3 pl-3">
              Start
            </span>
          </button>
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
