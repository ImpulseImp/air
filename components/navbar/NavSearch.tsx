import { Input } from "../ui/input";

function NavSearch() {
  return (
    <Input
      className="max-w-xs dark:bg-muted"
      type="text"
      placeholder="find a property..."
    />
  );
}
export default NavSearch;
