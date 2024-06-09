import Image from "next/image";

type NavbarProps = {
  imageUrl?: string | null;
};

const Navbar = ({ imageUrl }: NavbarProps) => {
  return (
    <nav className="w-full h-fit py-4 px-10 flex justify-between items-center border-b-2 border-gray-200 font-medium text-lg">
      <h2>Classify.ai</h2>
      <div className="w-10 h-10 bg-black rounded-full">
        <Image
          className="w-full h-full rounded-full boredr border-gray-100 cursor-pointer"
          width={200}
          height={200}
          alt="profile"
          src={imageUrl as string}
        />
      </div>
    </nav>
  );
};

export default Navbar;
