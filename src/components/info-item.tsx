type Props = {
  label: string;
  info: string
}

export const InfoItem = ({label, info}: Props) => {
  return (
    <div>
      <div className="text-sm text-gray-400">
        { label }
      </div>
      <div className="text-4xl font-bold">
        { info }
      </div>
    </div>
  )
}