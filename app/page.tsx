import Image from 'next/image'

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<Image className='dark:invert' src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
				<h1 className='text-gray-900 dark:text-gray-100'>Hello World</h1>
				<h2 className='text-gray-900 dark:text-gray-100'>Hello World</h2>
				<h3 className='text-gray-900 dark:text-gray-100'>Hello World</h3>
				<h4 className='text-gray-900 dark:text-gray-100'>Hello World</h4>
				<h5 className='text-gray-900 dark:text-gray-100'>Hello World</h5>
				<h6 className='text-gray-900 dark:text-gray-100'>Hello World</h6>
				<p className='text-fl-base text-gray-700 dark:text-gray-300'>
					text-fl-base Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
				</p>
				<p className='text-fl-base/7 text-gray-700 dark:text-gray-300'>text-fl-base/7 Texte plus grand</p>
				<p className='text-fl-lg text-gray-700 dark:text-gray-300'>text-fl-lg Texte avec le plus espacé</p>
				<p className='text-fl-lg/8 text-gray-700 dark:text-gray-300'>text-fl-lg/8 Texte plus grand avec hauteur de ligne adaptée</p>
				<small className='text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</small>
				<ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
					<li className='mb-2'>
						Get started by editing{' '}
						<code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>app/page.tsx</code>.
					</li>
					<li>Save and see your changes instantly.</li>
				</ol>

				<div className='flex gap-4 items-center flex-col sm:flex-row'>
					<a
						className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						<Image className='dark:invert' src='/vercel.svg' alt='Vercel logomark' width={20} height={20} />
						Deploy now
					</a>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						Read our docs
					</a>
				</div>
				{/* Section de test pour les espacements fluides */}
				<section className='w-full max-w-[1200px] mt-fl-xl'>
					<h2 className='text-fl-2xl mb-fl-lg text-gray-900 dark:text-gray-100'>Test des espacements fluides</h2>
					{/* Test des paddings */}

					<div className='space-y-fl-md'>
						<div className='border rounded'>
							<div className='p-fl-xs bg-slate-100 dark:bg-slate-800'>Padding p-fl-xs</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-sm bg-slate-100 dark:bg-slate-800'>Padding p-fl-sm</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-md bg-slate-100 dark:bg-slate-800'>Padding p-fl-md</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-lg bg-slate-100 dark:bg-slate-800'>Padding p-fl-lg</div>
						</div>
					</div>

					{/* Test des margins */}
					<h3 className='text-fl-xl mt-fl-xl mb-fl-md text-gray-900 dark:text-gray-100'>Margins</h3>
					<div className='border rounded p-4'>
						<div className='bg-slate-100 dark:bg-slate-800 p-2 m-fl-sm'>Margin m-fl-sm</div>
						<div className='bg-slate-100 dark:bg-slate-800 p-2 m-fl-md'>Margin m-fl-md</div>
					</div>

					{/* Test des paddings directionnels */}
					<h3 className='text-fl-xl mt-fl-xl mb-fl-md text-gray-900 dark:text-gray-100'>Paddings directionnels</h3>
					<div className='space-y-fl-md'>
						<div className='border rounded'>
							<div className='px-fl-md py-fl-sm bg-slate-100 dark:bg-slate-800'>Padding px-fl-md py-fl-sm</div>
						</div>
						<div className='border rounded'>
							<div className='pt-fl-md pb-fl-sm pl-fl-lg pr-fl-base bg-slate-100 dark:bg-slate-800'>
								Padding individuel (pt-fl-md pb-fl-sm pl-fl-lg pr-fl-base)
							</div>
						</div>
					</div>

					{/* Test des paires fluides */}
					<h3 className='text-fl-xl mt-fl-xl mb-fl-md text-gray-900 dark:text-gray-100'>Paires fluides</h3>
					<div className='space-y-fl-md'>
						<div className='border rounded'>
							<div className='p-fl-xs-sm bg-slate-100 dark:bg-slate-800'>xs-sm: 9px → 15px</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-sm-base bg-slate-100 dark:bg-slate-800'>sm-base: 14px → 20px</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-base-md bg-slate-100 dark:bg-slate-800'>base-md: 18px → 30px</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-md-lg bg-slate-100 dark:bg-slate-800'>md-lg: 27px → 40px</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-lg-xl bg-slate-100 dark:bg-slate-800'>lg-xl: 36px → 60px</div>
						</div>
					</div>

					{/* Test des grands espacements */}
					<h3 className='text-fl-xl mt-fl-xl mb-fl-md text-gray-900 dark:text-gray-100'>Grands espacements</h3>
					<div className='space-y-fl-md'>
						<div className='border rounded'>
							<div className='p-fl-xl bg-slate-100 dark:bg-slate-800'>Padding p-fl-xl</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-2xl bg-slate-100 dark:bg-slate-800'>Padding p-fl-2xl</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-3xl bg-slate-100 dark:bg-slate-800'>Padding p-fl-3xl</div>
						</div>
					</div>

					{/* Exemple d&apos;utilisation pratique */}
					<h3 className='text-fl-xl mt-fl-xl mb-fl-md text-gray-900 dark:text-gray-100'>Exemple d&apos;utilisation pratique</h3>
					<div className='border rounded'>
						<div className='bg-slate-100 dark:bg-slate-800'>
							<h4 className='text-fl-lg mb-fl-sm p-fl-md text-gray-900 dark:text-gray-100'>Exemple d&apos;utilisation pratique</h4>
							<div className='p-fl-base-md bg-white dark:bg-slate-900 border-t'>
								<p className='text-fl-base text-gray-700 dark:text-gray-300'>
									Cette section utilise un espacement personnalisé qui passe de 18px à 30px de manière fluide selon la taille de
									l&apos;écran. C&apos;est particulièrement utile pour les sections de contenu qui nécessitent plus d&apos;espace sur les
									grands écrans.
								</p>
							</div>
						</div>
					</div>

					{/* Comparaison avec espacements fixes */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-fl-md mt-fl-md'>
						<div className='border rounded'>
							<div className='p-4 bg-slate-100 dark:bg-slate-800'>Espacement fixe (16px)</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-base-md bg-slate-100 dark:bg-slate-800'>Espacement fluide (18px → 30px)</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-base-lg bg-slate-100 dark:bg-slate-800'>Espacement fluide (18px → 48px)</div>
						</div>
					</div>
				</section>

				{/* Section de test pour la grille fluide */}
				<section className='w-full max-w-[1200px] mt-fl-xl'>
					<h2 className='text-fl-2xl mb-fl-lg text-gray-900 dark:text-gray-100'>Test des gaps fluides</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fl-base-lg'>
						<div className='border rounded'>
							<div className='p-fl-base-md bg-slate-100 dark:bg-slate-800'>
								<p className='p-fl-base text-gray-700 dark:text-gray-300'>
									Gaps fluides (18px → 30px) lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
								</p>
							</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-base-md bg-slate-100 dark:bg-slate-800'>
								<p className='p-fl-base text-gray-700 dark:text-gray-300'>
									Gaps fluides (18px → 30px) lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
								</p>
							</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-base-md bg-slate-100 dark:bg-slate-800'>
								<p className='p-fl-base text-gray-700 dark:text-gray-300'>
									Gaps fluides (18px → 30px) lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
								</p>
							</div>
						</div>
						<div className='border rounded'>
							<div className='p-fl-base-md bg-slate-100 dark:bg-slate-800'>
								<p className='p-fl-base text-gray-700 dark:text-gray-300'>
									Gaps fluides (18px → 30px) lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image aria-hidden src='/file.svg' alt='File icon' width={16} height={16} />
					Learn
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
					Examples
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	)
}
