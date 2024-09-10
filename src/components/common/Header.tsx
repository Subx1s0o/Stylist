import Burger from "@/components/ui/Burger/Burger";
import HomeLogo from "./../ui/HomeLogo";

export default function Header() {
  return (
    <header className="border-b border-lightGrey fixed z-50 bg-white w-full">
      <div className="my-container flex items-center justify-between py-2 ">
        <HomeLogo>
          <svg width={32} height={32}>
            <use href="/sprite.svg#icon-Logo" />
          </svg>
        </HomeLogo>
        <Burger />
      </div>
    </header>
  );
}
