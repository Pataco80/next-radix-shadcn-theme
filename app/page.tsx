import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Button variant="default" asChild>
					<Link href="/fluid">Fluid Page</Link>
				</Button>
				<Button variant="secondary" asChild>
					<Link href="/shadcn-ui">Shadcn UI Page</Link>
				</Button>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos.
				</p>
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<section>
					{/* Test des typographies avec comparaison d'espacements fixes et fluides */}
					<div className="flex gap-4 bg-red-400 p-4 mt-4">
						<h1
							className="bg-blue-400 text-white border border-white/20"
							style={{ fontSize: '2.3328rem' }}
						>
							h1
						</h1>
						<h1
							className="bg-green-400 text-white border border-white/20"
							style={{
								fontSize: 'clamp(2.3328rem, 1.8286rem + 2.4447vw, 3.6621rem)',
							}}
						>
							h1
						</h1>
						<h1
							className="bg-purple-400 text-white border border-white/20"
							style={{ fontSize: '3.6621rem' }}
						>
							h1
						</h1>
					</div>

					<div className="flex gap-4 bg-red-400 p-4 mt-4">
						<h2
							className="bg-blue-400 text-white border border-white/20"
							style={{ fontSize: '1.944rem' }}
						>
							h2
						</h2>
						<h2
							className="bg-green-400 text-white border border-white/20"
							style={{
								fontSize: 'clamp(1.944rem, 1.5701rem + 1.8128vw, 2.9297rem)',
							}}
						>
							h2
						</h2>
						<h2
							className="bg-purple-400 text-white border border-white/20"
							style={{ fontSize: '2.9297rem' }}
						>
							h2
						</h2>
					</div>

					<div className="flex gap-4 bg-red-400 p-4 mt-4">
						<h3
							className="bg-blue-400 text-white border border-white/20"
							style={{ fontSize: '1.62rem' }}
						>
							h3
						</h3>
						<h3
							className="bg-green-400 text-white border border-white/20"
							style={{
								fontSize: 'clamp(1.62rem, 1.3455rem + 1.331vw, 2.3438rem)',
							}}
						>
							h3
						</h3>
						<h3
							className="bg-purple-400 text-white border border-white/20"
							style={{ fontSize: '2.3438rem' }}
						>
							h3
						</h3>
					</div>

					<div className="flex gap-4 bg-red-400 p-4 mt-4">
						<h4
							className="bg-blue-400 text-white border border-white/20"
							style={{ fontSize: '1.35rem' }}
						>
							h4
						</h4>
						<h4
							className="bg-green-400 text-white border border-white/20"
							style={{
								fontSize: 'clamp(1.35rem, 1.1509rem + 0.9655vw, 1.875rem)',
							}}
						>
							h4
						</h4>
						<h4
							className="bg-purple-400 text-white border border-white/20"
							style={{ fontSize: '1.875rem' }}
						>
							h4
						</h4>
					</div>

					<div className="flex gap-4 bg-red-400 p-4 mt-4">
						<h5
							className="bg-blue-400 text-white border border-white/20"
							style={{ fontSize: '1.125rem' }}
						>
							h5
						</h5>
						<h5
							className="bg-green-400 text-white border border-white/20"
							style={{
								fontSize: 'clamp(1.125rem, 0.9828rem + 0.6897vw, 1.5rem)',
							}}
						>
							h5
						</h5>
						<h5
							className="bg-purple-400 text-white border border-white/20"
							style={{ fontSize: '1.5rem' }}
						>
							h5
						</h5>
					</div>

					<div className="flex gap-4 bg-red-400 p-4 mt-4">
						<h6
							className="bg-blue-400 text-white border border-white/20"
							style={{ fontSize: '1.125rem' }}
						>
							h6
						</h6>
						<h6
							className="bg-green-400 text-white border border-white/20"
							style={{
								fontSize: 'clamp(1.125rem, 0.9828rem + 0.6897vw, 1.5rem)',
							}}
						>
							h6
						</h6>
						<h6
							className="bg-purple-400 text-white border border-white/20"
							style={{ fontSize: '1.5rem' }}
						>
							h6
						</h6>
					</div>
					<div className="flex gap-4 bg-red-400 p-4">
						<p className="bg-blue-400 text-white" style={{ fontSize: '18px' }}>
							Paragraphe 18px fixe
						</p>
						<p
							className="bg-green-400 text-white"
							style={{
								fontSize: 'clamp(1.125rem, 0.9828rem + 0.6897vw, 1.5rem)',
							}}
						>
							Paragraphe clamp
						</p>
						<p
							className="bg-purple-400 text-white"
							style={{ fontSize: '24px' }}
						>
							Paragraphe 24px fixe
						</p>
					</div>

					<div className="flex gap-4 bg-red-400 p-4 mt-4">
						<small
							className="bg-blue-400 text-white border border-white/20"
							style={{ fontSize: '0.9375rem' }}
						>
							small
						</small>
						<small
							className="bg-green-400 text-white border border-white/20"
							style={{
								fontSize: 'clamp(0.9375rem, 0.8379rem + 0.4828vw, 1.2rem)',
							}}
						>
							small
						</small>
						<small
							className="bg-purple-400 text-white border border-white/20"
							style={{ fontSize: '1.2rem' }}
						>
							small
						</small>
					</div>
				</section>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] h-10 sm:h-12 px-4 sm:px-5"
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className="dark:invert"
							src="/vercel.svg"
							alt="Vercel logomark"
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read our docs
					</a>
				</div>

				{/* Section de test pour les espacements fluides */}
				<section className="w-full max-w-[1200px] mt-fl-xl">
					<h2 className="text-fl-2xl mb-fl-m text-gray-900 dark:text-gray-100">
						Test des espacements fluides
					</h2>
					{/* Test des paddings */}
					<div className="space-y-fl-m">
						<div className="border rounded">
							<div className="p-fl-3xs bg-slate-100 dark:bg-slate-800">
								Padding p-fl-3xs (0.25rem → 0.375rem)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-2xs bg-slate-100 dark:bg-slate-800">
								Padding p-fl-2xs (0.5rem → 0.75rem)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-xs bg-slate-100 dark:bg-slate-800">
								Padding p-fl-xs (0.75rem → 1rem)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-s bg-slate-100 dark:bg-slate-800">
								Padding p-fl-s (1rem → 1.5rem)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-m bg-slate-100 dark:bg-slate-800">
								Padding p-fl-m (1.5rem → 2rem)
							</div>
						</div>
					</div>

					{/* Test des margins */}
					<h3 className="text-fl-xl mt-fl-xl mb-fl-m text-gray-900 dark:text-gray-100">
						Margins
					</h3>
					<div className="border rounded p-fl-s">
						<div className="bg-slate-100 dark:bg-slate-800 p-fl-2xs m-fl-s">
							Margin m-fl-s (1rem → 1.5rem)
						</div>
						<div className="bg-slate-100 dark:bg-slate-800 p-fl-2xs m-fl-m">
							Margin m-fl-m (1.5rem → 2rem)
						</div>
					</div>

					{/* Test des paddings directionnels */}
					<h3 className="text-fl-xl mt-fl-xl mb-fl-m text-gray-900 dark:text-gray-100">
						Paddings directionnels
					</h3>
					<div className="space-y-fl-m">
						<div className="border rounded">
							<div className="px-fl-m py-fl-s bg-slate-100 dark:bg-slate-800">
								Padding px-fl-m py-fl-s
							</div>
						</div>
						<div className="border rounded">
							<div className="pt-fl-m pb-fl-s pl-fl-l pr-fl-s bg-slate-100 dark:bg-slate-800">
								Padding individuel (pt-fl-m pb-fl-s pl-fl-l pr-fl-s)
							</div>
						</div>
					</div>

					{/* Test des grands espacements */}
					<h3 className="text-fl-xl mt-fl-xl mb-fl-m text-gray-900 dark:text-gray-100">
						Grands espacements
					</h3>
					<div className="space-y-fl-m">
						<div className="border rounded">
							<div className="p-fl-xl bg-slate-100 dark:bg-slate-800">
								Padding p-fl-xl (3rem → 4rem)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-2xl bg-slate-100 dark:bg-slate-800">
								Padding p-fl-2xl (4rem → 6rem)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-3xl bg-slate-100 dark:bg-slate-800">
								Padding p-fl-3xl (6rem → 8rem)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-4xl bg-slate-100 dark:bg-slate-800">
								Padding p-fl-4xl (8rem → 12rem)
							</div>
						</div>
					</div>

					{/* Exemple d&apos;utilisation pratique */}
					<h3 className="text-fl-xl mt-fl-xl mb-fl-m text-gray-900 dark:text-gray-100">
						Exemple d&apos;utilisation pratique
					</h3>
					<div className="border rounded">
						<div className="bg-slate-100 dark:bg-slate-800">
							<h4 className="text-fl-lg mb-fl-s p-fl-m text-gray-900 dark:text-gray-100">
								Exemple d&apos;utilisation pratique
							</h4>
							<div className="p-fl-m bg-white dark:bg-slate-900 border-t">
								<p className="text-fl-base text-gray-700 dark:text-gray-300">
									Cette section utilise un espacement personnalisé qui passe de
									1.5rem à 2rem de manière fluide selon la taille de
									l&apos;écran. C&apos;est particulièrement utile pour les
									sections de contenu qui nécessitent plus d&apos;espace sur les
									grands écrans.
								</p>
							</div>
						</div>
					</div>

					{/* Comparaison avec espacements fixes */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-fl-m mt-fl-m">
						<div className="border rounded">
							<div className="p-4 bg-slate-100 dark:bg-slate-800">
								Espacement fixe (16px)
							</div>
						</div>
						<div className="border rounded">
							<div className="p-fl-s bg-slate-100 dark:bg-slate-800">
								Espacement fluide (1rem → 1.5rem)
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Next.js
				</a>
			</footer>
		</div>
	)
}
