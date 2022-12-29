import Link from 'next/link';

export default function Header() {
	return <header className="bg-gray-400">
		<nav>
			<ul className='flex'>
				<li>
					<Link legacyBehavior href="/">
						<a className='flex h-14 items-center px-8 text-red-800 hover:text-red-400'>
							Anasayfa
						</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/about">
					<a className='flex h-14 items-center px-8 text-red-800 hover:text-red-400'>
							Hakkında
						</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/blog">
					<a className='flex h-14 items-center px-8 text-red-800 hover:text-red-400'>
							Blog
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	</header>
}