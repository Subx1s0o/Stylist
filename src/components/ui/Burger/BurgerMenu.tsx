import { useBurgerContext } from "@/components/common/Providers/BurgerProvider";
import MobileLocaleSwitcher from "@/components/ui/localeSwitcher/MobileLocaleSwitcher";
import { animated, useTransition } from "@react-spring/web";

import BurgerMenuList from "./Links/BurgerMenuList";

export default function BurgerMenu() {
  const { open, closeMenu } = useBurgerContext();

  const transitions = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 100 },
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="absolute top-0 right-0 pt-[68px] pb-4 px-4 bg-white z-10"
            >
              <BurgerMenuList onLinkClick={closeMenu} />
              <MobileLocaleSwitcher closeMenu={closeMenu} />
            </animated.div>
          ),
      )}
    </>
  );
}
