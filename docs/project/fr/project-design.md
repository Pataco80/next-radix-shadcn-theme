# Design du projet

Ce document décrit les principes de design utilisés dans le projet Next.js Radix Theme, en mettant l'accent sur la typographie fluide et les choix stylistiques.

## Typographie fluide

Le projet utilise un système de typographie fluide basé sur la fonction `clamp()` de CSS, inspiré par [Utopia.fyi](https://utopia.fyi/). Cette approche permet d'adapter automatiquement la taille du texte en fonction de la largeur de l'écran, sans avoir besoin de définir de multiples points d'arrêt (breakpoints).

### Principes de base

La typographie fluide fonctionne en définissant :

1. Une taille de police minimale pour les petits écrans (330px)
2. Une taille de police maximale pour les grands écrans (1240px)
3. Une interpolation fluide entre ces deux valeurs

### Échelle typographique

Notre échelle typographique est définie comme suit :

| Niveau | Petit écran (330px) | Grand écran (1240px) | Variable CSS |
| ------ | ------------------- | -------------------- | ------------ |
| -2     | 12.5px              | 12.8px               | `--size--2`  |
| -1     | 15px                | 16px                 | `--size--1`  |
| 0      | 18px                | 20px                 | `--size-0`   |
| 1      | 21.6px              | 25px                 | `--size-1`   |
| 2      | 25.92px             | 31.25px              | `--size-2`   |
| 3      | 31.104px            | 39.0625px            | `--size-3`   |
| 4      | 37.3248px           | 48.8281px            | `--size-4`   |
| 5      | 44.7898px           | 61.0352px            | `--size-5`   |

### Hauteurs de ligne (line-height)

Les hauteurs de ligne sont également fluides et adaptées à chaque niveau de texte :

#### Petit texte (ratio 1.3)

- `--lh--2`: 16.25px → 16.64px
- `--lh--1`: 19.5px → 20.8px

#### Texte normal (ratio 1.4)

- `--lh-0`: 25.2px → 28px
- `--lh-1`: 30.24px → 35px

#### Titres (progression vers ratio 1.6)

- `--lh-2`: 36.288px → 43.75px
- `--lh-3`: 43.5456px → 54.6875px
- `--lh-4`: 52.2547px → 68.3594px
- `--lh-5`: 62.7057px → 85.4493px

### Implémentation

L'implémentation utilise la fonction `clamp()` de CSS pour créer une transition fluide entre les tailles minimales et maximales :

```css
--size-0: clamp(1.125rem, 1.0797rem + 0.2198vw, 1.25rem);
--lh-0: clamp(1.575rem, 1.5141rem + 0.3044vw, 1.75rem);
```

Cette approche permet d'obtenir :

- Une typographie qui s'adapte proportionnellement à la taille de l'écran
- Une meilleure lisibilité sur tous les appareils
- Une réduction du code CSS (moins de media queries)
- Une expérience utilisateur plus fluide

## Espacement fluide

Notre système d'espacement fluide utilise également la fonction `clamp()` de CSS pour créer des marges et des rembourrages qui s'adaptent à la taille de l'écran. Ce système est basé sur les mêmes valeurs fondamentales que notre système typographique.

### Échelle d'espacement

Notre échelle d'espacement est définie comme suit :

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

### Paires d'espacement

En plus des espacements fixes, nous avons défini des paires d'espacement qui permettent une transition fluide entre deux tailles d'espacement :

| Nom     | Petit écran (330px) | Grand écran (1240px) | Variable CSS      |
| ------- | ------------------- | -------------------- | ----------------- |
| 3xs-2xs | 5px                 | 10px                 | `--space-3xs-2xs` |
| 2xs-xs  | 9px                 | 15px                 | `--space-2xs-xs`  |
| xs-s    | 14px                | 20px                 | `--space-xs-s`    |
| s-m     | 18px                | 30px                 | `--space-s-m`     |
| m-l     | 27px                | 40px                 | `--space-m-l`     |
| l-xl    | 36px                | 60px                 | `--space-l-xl`    |
| xl-2xl  | 54px                | 80px                 | `--space-xl-2xl`  |
| 2xl-3xl | 72px                | 120px                | `--space-2xl-3xl` |

### Paires personnalisées

Nous avons également défini des paires personnalisées pour des cas d'utilisation spécifiques :

| Nom | Petit écran (330px) | Grand écran (1240px) | Variable CSS  |
| --- | ------------------- | -------------------- | ------------- |
| s-l | 18px                | 40px                 | `--space-s-l` |

### Utilisation

Ces variables d'espacement peuvent être utilisées pour les marges, les rembourrages, les écarts de grille et d'autres propriétés spatiales :

```css
.card {
	padding: var(--space-m);
	margin-bottom: var(--space-l);
}

.hero {
	padding: var(--space-xl) 0;
}

.content-gap {
	gap: var(--space-s-m);
}
```

## Système de grille fluide

Notre système de grille fluide est conçu pour s'adapter à différentes tailles d'écran tout en maintenant des proportions cohérentes.

### Configuration de base

```css
:root {
	--grid-max-width: 77.5rem; /* 1240px */
	--grid-gutter: var(
		--space-s-l,
		clamp(1.125rem, 0.6264rem + 2.4176vw, 2.5rem)
	);
	--grid-columns: 12;
}
```

### Conteneur de grille

Le conteneur de grille définit la largeur maximale du contenu et ajoute des gouttières sur les côtés :

```css
.fluid-grid-container {
	max-width: var(--grid-max-width);
	padding-inline: var(--grid-gutter);
	margin-inline: auto;
}
```

### Grille

La grille elle-même utilise CSS Grid avec des gouttières fluides :

```css
.fluid-grid {
	display: grid;
	gap: var(--grid-gutter);
}
```

### Utilisation

Voici comment utiliser le système de grille dans votre HTML :

```html
<div class="fluid-grid-container">
	<div class="fluid-grid" style="grid-template-columns: repeat(12, 1fr);">
		<div style="grid-column: span 4;">Colonne 1</div>
		<div style="grid-column: span 4;">Colonne 2</div>
		<div style="grid-column: span 4;">Colonne 3</div>
	</div>
</div>
```

Pour les mises en page responsives, vous pouvez utiliser des media queries ou des fonctions CSS modernes comme `minmax()` :

```css
.responsive-grid {
	display: grid;
	gap: var(--grid-gutter);
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## Application dans le projet

### Texte de base

Le texte de base du site utilise `--size-0` avec une hauteur de ligne de `--lh-0`.

### Hiérarchie des titres

- H1: `--size-5` / `--lh-5`
- H2: `--size-4` / `--lh-4`
- H3: `--size-3` / `--lh-3`
- H4: `--size-2` / `--lh-2`
- H5: `--size-1` / `--lh-1`
- H6: `--size-0` / `--lh-0`

### Petit texte

Le texte de petite taille (comme les notes de bas de page, les légendes) utilise `--size--1` avec une hauteur de ligne de `--lh--1`.

### Espacement des composants

- Petits composants (cartes, boutons) : `--space-xs` à `--space-s`
- Composants moyens (sections, formulaires) : `--space-m` à `--space-l`
- Grands composants (héros, bannières) : `--space-xl` à `--space-3xl`
- Espacement entre sections : `--space-l-xl` ou `--space-xl-2xl`

## Avantages de cette approche

1. **Cohérence** : Tous les éléments suivent la même échelle proportionnelle
2. **Adaptabilité** : Le design s'adapte automatiquement à toutes les tailles d'écran
3. **Maintenabilité** : Les modifications peuvent être effectuées à un seul endroit
4. **Performance** : Moins de code CSS à charger et à traiter
5. **Harmonie visuelle** : Les espacements et les tailles de texte sont proportionnels

## Ressources

Pour plus d'informations sur les systèmes fluides et les calculs utilisés, consultez :

- [Utopia.fyi Type Calculator](https://utopia.fyi/type/calculator)
- [Utopia.fyi Space Calculator](https://utopia.fyi/space/calculator)
- [Utopia.fyi Grid Calculator](https://utopia.fyi/grid/calculator)
- [CSS Tricks: Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)
- [Smashing Magazine: Fluid Typography](https://www.smashingmagazine.com/2016/05/fluid-typography/)
