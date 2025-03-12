export default function FluidPage() {
	return (
		<main className="min-h-screen bg-gray-50">
			{/* En-tête */}
			<header className="grid-fl-container py-fl-8 bg-white border-b">
				<h1 className="text-fl-4xl font-bold">Système Fluide</h1>
				<p className="text-fl-lg text-gray-600 mt-fl-2">
					Démonstration des composants typographiques, espacements et grilles
					fluides
				</p>
			</header>

			{/* Section Typographie */}
			<section className="grid-fl-container py-fl-8">
				<h2 className="text-fl-2xl font-semibold mb-fl-6">
					Typographie Fluide
				</h2>

				<div className="grid-fl gap-fl-6">
					{/* Échelle typographique */}
					<div className="space-y-fl-4 p-fl-6 bg-white rounded-xl">
						<h3 className="text-fl-xl font-medium">Échelle Typographique</h3>
						<div className="space-y-fl-4">
							<p className="text-fl-4xl">Texte 4XL</p>
							<p className="text-fl-3xl">Texte 3XL</p>
							<p className="text-fl-2xl">Texte 2XL</p>
							<p className="text-fl-xl">Texte XL</p>
							<p className="text-fl-lg">Texte LG</p>
							<p className="text-fl-base">Texte Base</p>
							<p className="text-fl-sm">Texte SM</p>
							<p className="text-fl-xs">Texte XS</p>
						</div>
					</div>

					{/* Hauteurs de ligne */}
					<div className="space-y-fl-4 p-fl-6 bg-white rounded-xl">
						<h3 className="text-fl-xl font-medium">Hauteurs de Ligne</h3>
						<div className="space-y-fl-4">
							<p className="text-fl-base leading-fl-3">
								Hauteur de ligne 3 - Pour texte très dense
							</p>
							<p className="text-fl-base leading-fl-5">
								Hauteur de ligne 5 - Pour lecture confortable du texte courant
								avec un bon espacement entre les lignes.
							</p>
							<p className="text-fl-base leading-fl-7">
								Hauteur de ligne 7 - Pour un texte plus aéré, idéal pour les
								titres ou les contenus qui nécessitent plus d'espace.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section Espacements */}
			<section className="grid-fl-container py-fl-8 border-t">
				<h2 className="text-fl-2xl font-semibold mb-fl-6">
					Espacements Fluides
				</h2>

				<div className="grid-fl gap-fl-6">
					{/* Padding */}
					<div className="space-y-fl-4 bg-white rounded-xl">
						<h3 className="text-fl-xl font-medium p-fl-6">Padding Fluide</h3>
						<div className="grid grid-cols-2 gap-fl-4 p-fl-6">
							<div className="p-fl-2 bg-blue-100 rounded">p-fl-2</div>
							<div className="p-fl-4 bg-blue-100 rounded">p-fl-4</div>
							<div className="p-fl-6 bg-blue-100 rounded">p-fl-6</div>
							<div className="p-fl-8 bg-blue-100 rounded">p-fl-8</div>
						</div>
					</div>

					{/* Margin */}
					<div className="space-y-fl-4 bg-white rounded-xl p-fl-6">
						<h3 className="text-fl-xl font-medium">Margin Fluide</h3>
						<div className="space-y-fl-4">
							<div className="bg-green-100 p-4 rounded">Base</div>
							<div className="bg-green-100 p-4 rounded mt-fl-2">mt-fl-2</div>
							<div className="bg-green-100 p-4 rounded mt-fl-4">mt-fl-4</div>
							<div className="bg-green-100 p-4 rounded mt-fl-6">mt-fl-6</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section Grille */}
			<section className="grid-fl-container py-fl-8 border-t">
				<h2 className="text-fl-2xl font-semibold mb-fl-6">Grille Fluide</h2>

				<div className="grid-fl gap-fl-6">
					{/* Grille responsive */}
					<div className="bg-white rounded-xl p-fl-6">
						<h3 className="text-fl-xl font-medium mb-fl-4">
							Grille Responsive
						</h3>
						<div className="grid-fl md:grid-cols-2 lg:grid-cols-3 gap-fl-4">
							{[1, 2, 3, 4, 5, 6].map(item => (
								<div
									key={item}
									className="p-fl-4 bg-purple-100 rounded-lg text-center"
								>
									Item {item}
								</div>
							))}
						</div>
					</div>

					{/* Gaps */}
					<div className="bg-white rounded-xl p-fl-6">
						<h3 className="text-fl-xl font-medium mb-fl-4">Gaps Fluides</h3>
						<div className="space-y-fl-4">
							<div className="grid grid-cols-2 gap-fl-2">
								<div className="p-fl-4 bg-yellow-100 rounded">gap-fl-2</div>
								<div className="p-fl-4 bg-yellow-100 rounded">gap-fl-2</div>
							</div>
							<div className="grid grid-cols-2 gap-fl-4">
								<div className="p-fl-4 bg-yellow-100 rounded">gap-fl-4</div>
								<div className="p-fl-4 bg-yellow-100 rounded">gap-fl-4</div>
							</div>
							<div className="grid grid-cols-2 gap-fl-6">
								<div className="p-fl-4 bg-yellow-100 rounded">gap-fl-6</div>
								<div className="p-fl-4 bg-yellow-100 rounded">gap-fl-6</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
