export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#672280] to-[#A626D3]">
      <div className="flex justify-between p-4 text-white rounded max-w-[1024px] mx-auto">
        <img src="../assets/troll_face.webp" className="w-10 mr-2" alt="troll face" />
        <h1 className="mr-auto text-lg font-bold">Meme Generator</h1>
        <h2 className="text-lg font-semibold">React Course - Project 3</h2>
      </div>
    </header>
  );
}
