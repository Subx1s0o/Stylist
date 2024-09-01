import LogoIcon from "@/assets/icons/logos/Logo32.svg";
import Burger from "@/components/ui/Burger/Burger";
import HomeLogo from "./../ui/HomeLogo";
export default function Header() {
  return (
    <header className="border-b border-lightGrey fixed z-50 bg-white w-full">
      <div className="my-container flex items-center justify-between py-2 ">
        <HomeLogo>
          <LogoIcon width={32} height={32} />
        </HomeLogo>
        <Burger />
      </div>
    </header>
  );
}
