export default function FluidTest() {
	return (
		<main className='min-h-screen bg-white dark:bg-slate-900 py-12'>
			<h1 className='text-fl-3xl font-bold text-center mb-fl-xl text-gray-900 dark:text-gray-100'>Tests Fluid</h1>

			{/* Section 1: Typographie */}
			<section className='mx-auto max-w-[1200px] px-4 mb-fl-2xl'>
				<h2 className='text-fl-2xl font-bold mb-fl-xl text-gray-900 dark:text-gray-100'>Typographie</h2>
				<div className='space-y-fl-lg'>
					<div>
						<p className='text-fl-xs mb-fl-xs text-gray-500 dark:text-gray-400'>text-fl-xs (12.5px → 15.36px)</p>
						<p className='text-fl-xs text-gray-700 dark:text-gray-300'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, voluptate, quae voluptatem quia quos nemo
							voluptatibus quidem accusantium quas.
						</p>
					</div>

					<div>
						<p className='text-fl-sm mb-fl-xs text-gray-500 dark:text-gray-400'>text-fl-sm (15px → 19.2px)</p>
						<p className='text-fl-sm text-gray-700 dark:text-gray-300'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, voluptate, quae voluptatem quia quos nemo
							voluptatibus quidem accusantium quas.
						</p>
					</div>

					<div>
						<p className='text-fl-base mb-fl-xs text-gray-500 dark:text-gray-400'>text-fl-base (18px → 24px)</p>
						<p className='text-fl-base text-gray-700 dark:text-gray-300'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, voluptate, quae voluptatem quia quos nemo
							voluptatibus quidem accusantium quas.
						</p>
					</div>

					<div>
						<p className='text-fl-lg mb-fl-xs text-gray-500 dark:text-gray-400'>text-fl-lg (21.6px → 30px)</p>
						<p className='text-fl-lg text-gray-700 dark:text-gray-300'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, voluptate.
						</p>
					</div>

					<div>
						<p className='text-fl-xl mb-fl-xs text-gray-500 dark:text-gray-400'>text-fl-xl (25.92px → 37.5px)</p>
						<p className='text-fl-xl text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>

					<div>
						<p className='text-fl-2xl mb-fl-xs text-gray-500 dark:text-gray-400'>text-fl-2xl (31.104px → 46.875px)</p>
						<p className='text-fl-2xl text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur.</p>
					</div>

					<div>
						<p className='text-fl-3xl mb-fl-xs text-gray-500 dark:text-gray-400'>text-fl-3xl (37.3248px → 58.5938px)</p>
						<p className='text-fl-3xl text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</section>

			{/* Section 2: Espacements */}
			<section className='mx-auto max-w-[1200px] px-4 mb-fl-2xl'>
				<h2 className='text-fl-2xl font-bold mb-fl-xl text-gray-900 dark:text-gray-100'>Espacements (Paddings et Margins)</h2>
				<div className='space-y-fl-lg'>
					{/* Paddings */}
					<div className='space-y-fl-md'>
						<h3 className='text-fl-xl mb-fl-md text-gray-900 dark:text-gray-100'>Paddings</h3>

						<div className='border rounded-lg'>
							<div className='p-fl-xs bg-slate-100 dark:bg-slate-800'>
								<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>p-fl-xs (9px → 12px)</p>
								<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>

						<div className='border rounded-lg'>
							<div className='p-fl-sm bg-slate-100 dark:bg-slate-800'>
								<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>p-fl-sm (14px → 18px)</p>
								<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>

						<div className='border rounded-lg'>
							<div className='p-fl-base bg-slate-100 dark:bg-slate-800'>
								<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>p-fl-base (18px → 24px)</p>
								<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>

						<div className='border rounded-lg'>
							<div className='p-fl-base-lg bg-slate-100 dark:bg-slate-800'>
								<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>p-fl-base-lg (18px → 48px) - Paire personnalisée</p>
								<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>

					{/* Margins */}
					<div className='space-y-fl-md'>
						<h3 className='text-fl-xl mb-fl-md text-gray-900 dark:text-gray-100'>Margins</h3>

						<div className='border rounded-lg p-4'>
							<div className='m-fl-sm bg-slate-100 dark:bg-slate-800 p-4'>
								<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>m-fl-sm (14px → 18px)</p>
								<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>

						<div className='border rounded-lg p-4'>
							<div className='m-fl-base-lg bg-slate-100 dark:bg-slate-800 p-4'>
								<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>m-fl-base-lg (18px → 48px) - Paire personnalisée</p>
								<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 3: Grilles */}
			<section className='mx-auto max-w-[1200px] px-4'>
				<h2 className='text-fl-2xl font-bold mb-fl-xl text-gray-900 dark:text-gray-100'>Grilles</h2>
				<div className='space-y-fl-xl'>
					{/* Grille avec gap de base */}
					<div>
						<h3 className='text-fl-xl mb-fl-lg text-gray-900 dark:text-gray-100'>Grille avec gap-fl-base (18px → 24px)</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fl-base'>
							{[...Array(6)].map((_, i) => (
								<div key={i} className='border rounded-lg'>
									<div className='p-fl-base bg-slate-100 dark:bg-slate-800'>
										<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>gap-fl-base (18px → 24px)</p>
										<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Grille avec gap personnalisé */}
					<div>
						<h3 className='text-fl-xl mb-fl-lg text-gray-900 dark:text-gray-100'>Grille avec gap-fl-base-lg (18px → 48px)</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fl-base-lg'>
							{[...Array(6)].map((_, i) => (
								<div key={i} className='border rounded-lg'>
									<div className='p-fl-base bg-slate-100 dark:bg-slate-800'>
										<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>gap-fl-base-lg (18px → 48px)</p>
										<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Grille avec gaps X/Y différents */}
					<div>
						<h3 className='text-fl-xl mb-fl-lg text-gray-900 dark:text-gray-100'>Grille avec gaps X/Y différents</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-fl-base-lg gap-y-fl-sm'>
							{[...Array(6)].map((_, i) => (
								<div key={i} className='border rounded-lg'>
									<div className='p-fl-base bg-slate-100 dark:bg-slate-800'>
										<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>gap-x-fl-base-lg (18px → 48px)</p>
										<p className='text-gray-500 dark:text-gray-400 mb-fl-2xs'>gap-y-fl-sm (14px → 18px)</p>
										<p className='text-gray-700 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
