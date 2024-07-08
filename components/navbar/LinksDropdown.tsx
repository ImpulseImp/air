import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LuAlignLeft, LuUser } from "react-icons/lu";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";
import UserIcon from "./UserIcon";
function LinksDropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex max-w-[100px] gap-4">
            <LuAlignLeft className="h-6 w-6" />

            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="w-full text-left">Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>
          <SignedIn>
            {links.map((link) => {
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className="w-full capitalize">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
export default LinksDropdown;
