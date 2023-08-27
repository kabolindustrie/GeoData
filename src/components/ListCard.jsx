

export default function ListCard({contry}) {
  return (
    <li className="relative cursor-pointer rounded transition-transform duration-300 hover:translate-y-1 will-change-transform">
      <h2 className="absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded">{contry.name.common} </h2>
      <img
      className="h-full w-full object-cover rounded"
      src={contry.flags.svg} alt="contry flag"  />
    </li>
  )
}
