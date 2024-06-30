import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LuUser } from "react-icons/lu";
import { Button } from "../ui/button";

function LinksDropdown() {
  return (
    <Button size="icon">
      <LuUser className="h-6 w-6 rounded-full bg-primary text-white" />
    </Button>
  );
}
export default LinksDropdown;
