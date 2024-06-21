import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Button variant='outline'>Button</Button>
      <Button asChild variant='link'>
        <Link href='/login'>Login</Link>
      </Button>
    </div>
  );
}
export default HomePage;
