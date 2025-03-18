import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

export function MainNav() {
	return (
		<nav className="border-b">
			<div className="flex h-16 items-center px-4 container mx-auto">
				<div className="flex items-center space-x-4">
					<Link href="/" className="font-medium">
						Accueil
					</Link>
					<Link href="/fluid" className="font-medium">
						Fluid Page
					</Link>
					<Link href="/shadcn-ui" className="font-medium">
						Shadcn UI Page
					</Link>
				</div>
				<div className="ml-auto flex items-center space-x-4">
					<ModeToggle />
				</div>
			</div>
		</nav>
	)
}
