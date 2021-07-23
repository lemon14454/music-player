import { HiOutlineMusicNote } from "react-icons/hi";

interface NavProps {
  libraryStatus: boolean;
  setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ libraryStatus, setLibraryStatus }: NavProps) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        播放清單
        <HiOutlineMusicNote className="icon" />
      </button>
    </nav>
  );
};

export default Nav;
