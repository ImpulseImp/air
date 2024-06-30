import { RiTentLine } from "react-icons/ri";
import { Button } from "../ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <RiTentLine className="h-6 w-6" />
      </Link>
    </Button>
  );
}
export default Logo;
