import { Link } from 'wouter';

import Container from '@/components/Container';

const Nav = () => {
  return (
    <nav>
      <Container className="py-16">
        <p className="text-center mb-2">
          <Link href="/">
            <a className="text-4xl font-bold text-slate-900 dark:text-white hover:text-slate-900 dark:hover:text-gray-100 drop-shadow-[0_2px_0px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
              Event Form
            </a>
          </Link>
        </p>
      </Container>
    </nav>
  )
}

export default Nav;