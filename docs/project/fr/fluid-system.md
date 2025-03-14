# Système Fluide

## Vue d'ensemble

Le système fluide est une collection de variables et d'utilitaires CSS qui permettent de créer des mises en page responsives harmonieuses. Basé sur [Utopia.fyi](https://utopia.fyi), il utilise des calculs mathématiques pour adapter automatiquement les tailles, espacements et grilles en fonction de la taille de l'écran.

## Intégration avec Tailwind CSS

### Organisation des couches (@layer)

Notre système fluide est organisé en trois couches distinctes pour assurer une bonne intégration avec Tailwind CSS :

```css
@layer theme {
	/* Variables et configurations de base */
}

@layer base {
	/* Styles de base pour les éléments HTML */
}

@layer utilities {
	/* Classes utilitaires fluides */
}
```

### Principe de non-surcharge

Le système fluide est conçu pour coexister avec Tailwind CSS sans conflit :

1. **Préfixe distinct** : Toutes nos classes utilitaires utilisent le préfixe `-fl-` pour éviter les collisions
2. **Complémentarité** : Les classes fluides complètent les classes Tailwind plutôt que de les remplacer
3. **Priorité claire** : Les classes fluides ont une spécificité équivalente aux classes Tailwind

Exemple de coexistence :

```html
<!-- Classe Tailwind standard -->
<div class="p-4">...</div>

<!-- Classe fluide équivalente -->
<div class="p-fl-4">...</div>

<!-- Combinaison des deux systèmes -->
<div class="p-4 md:p-fl-4">...</div>
```

### Classes utilitaires fluides

#### Convention de nommage

Nos classes utilitaires suivent une convention similaire à Tailwind :

```css
/* Typographie */
.text-fl-{size} /* xs, sm, base, lg, xl, 2xl, 3xl, 4xl */
.leading-fl-{size} /* 3, 4, 5, 6, 7, 8, 9, 10 */

/* Espacement */
.p-fl-{size} /* 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 8, 10, 12 */
.m-fl-{size}
.gap-fl-{size}

/* Variantes directionnelles */
.p{t|r|b|l}-fl-{size}
.m{t|r|b|l}-fl-{size}
.gap-{x|y}-fl-{size}
```

#### Responsive Design

Les classes fluides fonctionnent naturellement avec les préfixes responsives de Tailwind :

```html
<div class="text-fl-base md:text-fl-lg lg:text-fl-xl">Texte adaptatif</div>

<div class="p-fl-4 md:p-fl-6 lg:p-fl-8">Espacement adaptatif</div>
```

### Exemple d'utilisation combinée

```html
<!-- Carte combinant les deux systèmes -->
<div
	class="
    /* Classes Tailwind */
    bg-white rounded-lg shadow-md
    /* Classes fluides */
    p-fl-4 gap-fl-2
    /* Responsive mixing */
    md:p-fl-6 lg:gap-fl-4
"
>
	<h2 class="text-fl-xl mb-fl-2">Titre</h2>
	<p class="text-fl-base">Contenu</p>
</div>
```

## Variables Fluides

### Configuration de base

Les variables fondamentales du système sont définies dans `fluid-variables.css` :

```css
:root {
	--fl-min-width: 330px;
	--fl-max-width: 1240px;
	--fl-min-scale: 1.2;
	--fl-max-scale: 1.25;
}
```

### Points de rupture et échelles

- **Largeur minimale** : 330px
- **Largeur maximale** : 1240px
- **Échelle minimale** : 1.2
- **Échelle maximale** : 1.25

> **Information importante :**
> Le système de [Utopia](https://utopia.fyi/) utilise par défaut les variables `--step-*` pour la [Typographie Fluide](#typographie-fluide). `--space-*` pour tout ce qui est des [Espacement Fluide](#espacement-fluide) `margin`, `pading` et le `gap` du système de [Grille Fluide](#grille-fluide).
> Cet usage dans les variables du projet restent inchangées pour les raisons :
>
> - Evite une surcouche de variables
> - Permet de mettre les valeurs par défaut de n'importe quelle échelle personalisée
> - Simplifie la logique si vous avez des valeurs personalisées

## Typographie Fluide

### Organisation des variables

Notre système de typographie fluide utilise une hiérarchie claire de variables CSS :

1. **Variables de base Utopia** (`--step-*`)

   - Définissent l'échelle typographique fluide
   - Calculées via [utopia.fyi](https://utopia.fyi/type/calculator)
   - Exemple : `--step-0: clamp(1.125rem, 1.0797rem + 0.2198vw, 1.25rem)`

2. **Variables de calcul** (`--fl-lh-*`)

   - Calculent les hauteurs de ligne en utilisant les ratios
   - Usage interne uniquement
   - Exemple : `--fl-lh-0: calc(var(--step-0) * var(--ratio-normal))`

3. **Variables d'extension Tailwind**
   - Pour les tailles (`--fl-text-*`)
     ```css
     --fl-text-xs: var(--step--2);
     --fl-text-sm: var(--step--1);
     --fl-text-base: var(--step-0);
     /* etc. */
     ```
   - Pour les hauteurs de ligne (`--fl-leading-*`)
     ```css
     --fl-leading-3: var(--fl-lh--2); /* Ratio 1.3 */
     --fl-leading-5: var(--fl-lh-0); /* Ratio 1.4 */
     --fl-leading-7: var(--fl-lh-2); /* Ratio 1.6 */
     /* etc. */
     ```

### Classes utilitaires

#### Classes de base

```html
<!-- Taille de texte fluide -->
<p class="text-fl-base">Texte de base</p>
<h2 class="text-fl-2xl">Grand titre</h2>

<!-- Hauteur de ligne fluide -->
<p class="leading-fl-5">Hauteur de ligne normale</p>
<h2 class="leading-fl-8">Hauteur de ligne pour titre</h2>
```

#### Classes combinées

Les classes `text-fl-*` incluent automatiquement une hauteur de ligne appropriée :

| Classe         | Font Size        | Line Height       | Ratio |
| -------------- | ---------------- | ----------------- | ----- |
| `text-fl-xs`   | `--fl-text-xs`   | `--fl-leading-3`  | 1.3   |
| `text-fl-sm`   | `--fl-text-sm`   | `--fl-leading-4`  | 1.3   |
| `text-fl-base` | `--fl-text-base` | `--fl-leading-5`  | 1.4   |
| `text-fl-lg`   | `--fl-text-lg`   | `--fl-leading-6`  | 1.4   |
| `text-fl-xl`   | `--fl-text-xl`   | `--fl-leading-7`  | 1.6   |
| `text-fl-2xl`  | `--fl-text-2xl`  | `--fl-leading-8`  | 1.6   |
| `text-fl-3xl`  | `--fl-text-3xl`  | `--fl-leading-9`  | 1.6   |
| `text-fl-4xl`  | `--fl-text-4xl`  | `--fl-leading-10` | 1.6   |

#### Personnalisation de la hauteur de ligne

Pour plus de flexibilité, vous pouvez utiliser la syntaxe avec slash :

```html
<!-- Texte xs avec différentes hauteurs de ligne -->
<p class="text-fl-xs/3">Hauteur dense (1.3)</p>
<p class="text-fl-xs/4">Hauteur normale (1.3)</p>
<p class="text-fl-xs/5">Hauteur large (1.4)</p>

<!-- Texte base avec différentes hauteurs de ligne -->
<p class="text-fl-base/5">Hauteur normale (1.4)</p>
<p class="text-fl-base/6">Hauteur large (1.4)</p>
<p class="text-fl-base/7">Hauteur très large (1.6)</p>
```

### Styles de base

Les éléments HTML de base sont automatiquement stylisés avec les bonnes tailles et hauteurs de ligne :

```css
body {
	font-size: var(--fl-text-base);
	line-height: var(--fl-leading-5);
}

h1 {
	font-size: var(--fl-text-4xl);
	line-height: var(--fl-leading-10);
}

/* etc. */
```

### Bonnes pratiques

1. **Utilisation des classes de base**

   - Préférez les classes `text-fl-*` qui incluent déjà une hauteur de ligne appropriée
   - Utilisez `leading-fl-*` uniquement pour des ajustements spécifiques

2. **Personnalisation**

   - Utilisez la syntaxe avec slash (`text-fl-base/7`) pour des cas particuliers
   - Respectez les ratios recommandés pour maintenir la cohérence visuelle

3. **Responsive**
   - Toutes les classes sont compatibles avec les modificateurs responsive de Tailwind
   ```html
   <p class="text-fl-base md:text-fl-lg lg:text-fl-xl">Texte responsive</p>
   ```

## Espacement Fluide

### Échelle d'espacement

_Echelle utilisée sur le projet_

| Nom | Petit écran (330px) | Grand écran (1240px) | Variable CSS  |
| --- | ------------------- | -------------------- | ------------- |
| 3xs | 5px                 | 5px                  | `--space-3xs` |
| 2xs | 9px                 | 10px                 | `--space-2xs` |
| xs  | 14px                | 15px                 | `--space-xs`  |
| s   | 18px                | 20px                 | `--space-s`   |
| m   | 27px                | 30px                 | `--space-m`   |
| l   | 36px                | 40px                 | `--space-l`   |
| xl  | 54px                | 60px                 | `--space-xl`  |
| 2xl | 72px                | 80px                 | `--space-2xl` |
| 3xl | 108px               | 120px                | `--space-3xl` |

### Classes utilitaires

```css
/* Padding */
.p-fl-1 {
	padding: var(--fl-space-1);
}
.p-fl-2 {
	padding: var(--fl-space-2);
}
/* etc. */

/* Margin */
.m-fl-1 {
	margin: var(--fl-space-1);
}
.m-fl-2 {
	margin: var(--fl-space-2);
}
/* etc. */
```

## Grille Fluide

### Configuration de base

```css
:root {
	--grid-max-width: 77.5rem; /* 1240px */
	--grid-gutter: var(--space-s-l);
	--grid-columns: 12;
}
```

### Classes utilitaires

```css
.grid-fl-container {
	max-width: var(--fl-grid-max-width);
	padding-inline: var(--fl-grid-gutter);
	margin-inline: auto;
}

.grid-fl {
	display: grid;
	gap: var(--fl-grid-gutter);
}
```

### Gaps fluides

```css
.gap-fl-1 {
	gap: var(--fl-space-1);
}
.gap-fl-2 {
	gap: var(--fl-space-2);
}
/* etc. */
```

## Avantages du système

1. **Cohérence** : Tous les éléments suivent la même échelle proportionnelle
2. **Adaptabilité** : Le design s'adapte automatiquement à toutes les tailles d'écran
3. **Maintenabilité** : Les modifications peuvent être effectuées à un seul endroit
4. **Performance** : Moins de code CSS à charger et à traiter
5. **Harmonie visuelle** : Les espacements et les tailles de texte sont proportionnels

## Exemples d'utilisation avancée

### 1. Carte de produit responsive

```jsx
<div
	className="
  // Structure de base
  grid-fl gap-fl-4
  // Adaptation des espacements
  p-fl-4 md:p-fl-6 lg:p-fl-8
  // Arrière-plan et ombres
  bg-white rounded-xl shadow-md
"
>
	{/* En-tête de carte */}
	<div className="flex items-center gap-fl-2">
		<img className="w-16 h-16 rounded-full" src="product.jpg" alt="" />
		<div>
			<h3 className="text-fl-xl">Nom du produit</h3>
			<p className="text-fl-sm text-gray-600">Catégorie</p>
		</div>
	</div>

	{/* Corps de la carte */}
	<div className="space-y-fl-2">
		<p className="text-fl-base">
			Description du produit avec une taille de texte fluide qui s'adapte à tous
			les écrans.
		</p>

		{/* Liste de caractéristiques */}
		<ul className="grid gap-fl-2 md:grid-cols-2">
			<li className="flex gap-fl-2 items-center">
				<span className="text-fl-sm">Caractéristique 1</span>
			</li>
			{/* ... autres caractéristiques ... */}
		</ul>
	</div>

	{/* Pied de carte */}
	<div className="flex items-center justify-between mt-fl-4">
		<span className="text-fl-xl font-bold">29,99 €</span>
		<button className="p-fl-2 md:p-fl-4 text-fl-base">Ajouter au panier</button>
	</div>
</div>
```

### 2. Section héros avec grille fluide

```jsx
<section className="grid-fl-container py-fl-8 md:py-fl-12">
	<div className="grid-fl gap-fl-6 md:grid-cols-2 items-center">
		{/* Contenu principal */}
		<div className="space-y-fl-4">
			<h1 className="text-fl-4xl md:text-fl-5xl font-bold">Titre principal</h1>
			<p className="text-fl-lg md:text-fl-xl text-gray-600">
				Sous-titre avec espacement fluide
			</p>
			<div className="flex gap-fl-2">
				<button className="p-fl-4 text-fl-base">Action principale</button>
				<button className="p-fl-4 text-fl-base">Action secondaire</button>
			</div>
		</div>

		{/* Image héro */}
		<div className="relative aspect-video md:aspect-square">
			<img src="hero.jpg" alt="" className="object-cover rounded-2xl" />
		</div>
	</div>
</section>
```

### 3. Navigation responsive

```jsx
<nav className="grid-fl-container">
	<div
		className="
    flex items-center justify-between
    h-16 md:h-20
    py-fl-2 md:py-fl-4
  "
	>
		{/* Logo */}
		<a href="/" className="text-fl-xl font-bold">
			Logo
		</a>

		{/* Navigation desktop */}
		<div className="hidden md:flex gap-fl-6">
			<a href="#" className="text-fl-base hover:text-primary">
				Accueil
			</a>
			<a href="#" className="text-fl-base hover:text-primary">
				Produits
			</a>
			<a href="#" className="text-fl-base hover:text-primary">
				Services
			</a>
			<a href="#" className="text-fl-base hover:text-primary">
				Contact
			</a>
		</div>

		{/* Menu mobile */}
		<button className="md:hidden p-fl-2">
			<span className="text-fl-xl">☰</span>
		</button>
	</div>

	{/* Menu mobile déroulant */}
	<div className="md:hidden">
		<div
			className="
      grid gap-fl-2
      py-fl-4
      border-t border-gray-200
    "
		>
			<a href="#" className="text-fl-lg p-fl-2 hover:bg-gray-50">
				Accueil
			</a>
			<a href="#" className="text-fl-lg p-fl-2 hover:bg-gray-50">
				Produits
			</a>
			<a href="#" className="text-fl-lg p-fl-2 hover:bg-gray-50">
				Services
			</a>
			<a href="#" className="text-fl-lg p-fl-2 hover:bg-gray-50">
				Contact
			</a>
		</div>
	</div>
</nav>
```

### 4. Grille de blog responsive

```jsx
<div className="grid-fl-container py-fl-8">
	<div className="grid-fl gap-fl-6 md:grid-cols-2 lg:grid-cols-3">
		{/* Article de blog */}
		<article className="flex flex-col gap-fl-4">
			<img
				src="blog-1.jpg"
				alt=""
				className="aspect-video object-cover rounded-xl"
			/>
			<div className="space-y-fl-2">
				<h2 className="text-fl-2xl">Titre de l'article</h2>
				<p className="text-fl-base text-gray-600">
					Extrait de l'article avec une typographie fluide...
				</p>
			</div>
			<div className="flex items-center gap-fl-2 mt-auto">
				<img src="author.jpg" alt="" className="w-10 h-10 rounded-full" />
				<div>
					<p className="text-fl-sm font-medium">Nom de l'auteur</p>
					<p className="text-fl-xs text-gray-600">Date de publication</p>
				</div>
			</div>
		</article>
		{/* ... autres articles ... */}
	</div>
</div>
```

## Ratios

Les ratios sont un élément fondamental de notre système typographique. Ils permettent de calculer automatiquement les hauteurs de ligne en fonction de la taille du texte.

### Définition des ratios

Nous utilisons trois ratios différents, chacun optimisé pour un usage spécifique :

| Ratio            | Valeur | Usage                    | Exemple                                  |
| ---------------- | ------ | ------------------------ | ---------------------------------------- |
| `--ratio-sm`     | 1.3    | Texte dense (xs, sm)     | Paragraphes denses, notes de bas de page |
| `--ratio-normal` | 1.4    | Texte courant (base, lg) | Corps de texte principal                 |
| `--ratio-lg`     | 1.6    | Grands titres (xl à 4xl) | Titres de sections                       |

### Utilisation dans le système

1. **Calcul des hauteurs de ligne**

   ```css
   /* Variables de calcul internes */
   --fl-lh-0: calc(var(--step-0) * var(--ratio-normal));
   --fl-lh-1: calc(var(--step-1) * var(--ratio-normal));
   ```

2. **Variables finales**

   ```css
   /* Variables d'extension Tailwind */
   --fl-leading-5: var(--fl-lh-0); /* Ratio normal (1.4) */
   --fl-leading-7: var(--fl-lh-2); /* Ratio large (1.6) */
   ```

3. **Classes utilitaires**
   ```css
   .leading-fl-5 {
   	line-height: var(--fl-leading-5); /* Ratio normal */
   }
   ```

### Guide d'utilisation des ratios

1. **Texte dense (1.3)**

   - Pour le texte de petite taille
   - Quand l'espace est limité
   - Pour les interfaces denses

   ```html
   <p class="text-fl-sm">Texte dense avec ratio 1.3</p>
   ```

2. **Texte normal (1.4)**

   - Pour le corps de texte principal
   - Pour une lecture confortable
   - Pour la majorité du contenu

   ```html
   <p class="text-fl-base">Texte normal avec ratio 1.4</p>
   ```

3. **Grands titres (1.6)**
   - Pour les titres importants
   - Pour créer une hiérarchie visuelle
   - Pour les éléments qui doivent respirer
   ```html
   <h2 class="text-fl-2xl">Titre avec ratio 1.6</h2>
   ```

### Personnalisation des ratios

Si vous avez besoin d'ajuster les ratios par défaut :

1. Modifiez les variables de ratio dans votre thème :

   ```css
   :root {
   	--ratio-sm: 1.25; /* Plus compact */
   	--ratio-normal: 1.35; /* Plus dense */
   	--ratio-lg: 1.5; /* Moins espacé */
   }
   ```

2. Les changements seront automatiquement appliqués à toutes les classes utilisant ces ratios.

## Ressources

- [Calculateur de typographie Utopia](https://utopia.fyi/type/calculator)
- [Calculateur d'espacement Utopia](https://utopia.fyi/space/calculator)
- [Calculateur de grille Utopia](https://utopia.fyi/grid/calculator)

### Hauteurs de ligne fluides

Les classes `.leading-fl-*` permettent d'ajuster la hauteur de ligne de manière fluide, indépendamment de la taille du texte :

```html
<!-- Utilisation basique -->
<p class="text-fl-base leading-fl-5">Texte avec hauteur de ligne par défaut</p>

<!-- Ajustement personnalisé -->
<p class="text-fl-base leading-fl-6">Texte avec hauteur de ligne plus grande</p>

<!-- Responsive -->
<h2 class="text-fl-2xl leading-fl-7 md:leading-fl-8">
	Titre avec hauteur adaptative
</h2>
```

#### Table des hauteurs de ligne fluides

| Classe           | Ratio | Usage recommandé         |
| ---------------- | ----- | ------------------------ |
| `.leading-fl-3`  | 1.3   | Texte très dense (xs)    |
| `.leading-fl-4`  | 1.3   | Texte dense (sm)         |
| `.leading-fl-5`  | 1.4   | Corps de texte (base)    |
| `.leading-fl-6`  | 1.4   | Texte large (lg)         |
| `.leading-fl-7`  | 1.6   | Petits titres (xl)       |
| `.leading-fl-8`  | 1.6   | Titres moyens (2xl)      |
| `.leading-fl-9`  | 1.6   | Grands titres (3xl)      |
| `.leading-fl-10` | 1.6   | Très grands titres (4xl) |

#### Exemples d'utilisation avancée

```html
<!-- Article de blog -->
<article class="space-y-fl-4">
	<h1 class="text-fl-4xl leading-fl-10">Titre principal avec grande hauteur</h1>

	<h2 class="text-fl-2xl leading-fl-8">Sous-titre avec hauteur moyenne</h2>

	<p class="text-fl-base leading-fl-5 md:leading-fl-6">
		Paragraphe avec hauteur adaptative selon la taille d'écran
	</p>

	<blockquote class="text-fl-lg leading-fl-7">
		Citation avec hauteur personnalisée
	</blockquote>

	<small class="text-fl-sm leading-fl-4">
		Note de bas de page avec hauteur dense
	</small>
</article>
```
