export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#672280] to-[#A626D3] p-4 mt-auto">
      <p className="flex justify-center font-semibold text-white gap-x-2">
        Coded by
        <a
          href="https://github.com/selimbiber/RandomGenerators/tree/main/RandomMemeGenerator"
          className="flex gap-x-2 group"
        >
          Selim Biber
          <img
            src="../assets/github-icon.svg"
            alt="github icon"
            className="w-4 duration-300 ease-in-out group-hover:rotate-[360deg] hover:rotate-[360deg]"
          />
        </a>
      </p>
    </footer>
  );
}
