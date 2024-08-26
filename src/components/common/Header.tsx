import LogoIcon from "@/assets/icons/Logo32.svg";
import Burger from "@/components/ui/Burger/Burger";
import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-lightGrey">
      <div className="my-container flex items-center justify-between py-2 ">
        <Link href="/">
          <LogoIcon width={32} height={32} />
        </Link>
        <Burger />
      </div>
    </header>
  );
}
