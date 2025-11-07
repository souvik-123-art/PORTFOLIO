import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
const jetBrains = JetBrains_Mono({ subsets: ["latin"] });
interface MenuLink {
  url: string;
  title: string;
}
const NavLink = ({ link }: { link: MenuLink }) => {
  const pathName = usePathname();
  return (
    <Link
      className={` transition ${
        pathName === link.url
          ? "bg-black/80 text-white px-2 rounded-full py-1"
          : "hover:text-[#E91E63]"
      } ${pathName === link.url && jetBrains.className}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
