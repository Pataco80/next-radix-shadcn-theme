import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react'
import * as React from 'react'

/* ColloutIcon is a span using children prop for icon */
const ColloutIcon = ({
	variant,
	children,
	className,
}: {
	variant?:
		| 'default'
		| 'secondary'
		| 'destructive'
		| 'info'
		| 'success'
		| 'warning'
	children?: React.ReactNode
	className?: string
}) => {
	/* if variant is not provided, use children as icon */
	if (!variant || variant === undefined) return children

	const Icon =
		variant === 'info'
			? Info
			: variant === 'success'
			? CheckCircle
			: variant === 'warning'
			? AlertCircle
			: XCircle

	return (
		<span className={cn('flex mt-1 self-start', className)}>
			<Icon className="size-5" />
		</span>
	)
}

const colloutVariants = cva(
	'inline-flex items-center justify-center border px-fl-4 py-fl-2 font-medium whitespace-normal break-words gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
	{
		variants: {
			variant: {
				default: 'bg-primary border-primary/50 [&>*]:text-primary-foreground',
				secondary:
					'bg-secondary border-secondary/50 [&>*]:text-secondary-foreground',
				destructive:
					'bg-destructive border-destructive/50 [&>*]:text-destructive-foreground',
				info: 'bg-info border-info/50 [&>*]:text-info-foreground',
				success: 'bg-success border-success/50 [&>*]:text-success-foreground',
				warning: 'bg-warning border-warning/50 [&>*]:text-warning-foreground',
			},
			size: {
				sm: 'text-fl-xs',
				md: 'text-fl-sm',
				lg: 'text-fl-base',
			},
			width: {
				full: 'w-full',
				auto: 'w-auto',
				default: '', // Aucune classe de largeur par défaut
			},
			rounded: {
				none: 'rounded-none',
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg',
				xl: 'rounded-xl',
				full: 'rounded-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
			width: 'full',
			rounded: 'lg',
		},
	}
)

function Collout({
	className,
	variant,
	size,
	width,
	rounded,
	children,
	...props
}: React.ComponentProps<'div'> & VariantProps<typeof colloutVariants>) {
	return (
		<div
			className={cn(
				colloutVariants({
					variant: variant || 'default',
					size: size || 'lg',
					width: width || 'full',
					rounded: rounded || 'md',
				}),
				className
			)}
			{...props}
		>
			<ColloutIcon variant={variant || 'default'} />
			<div className="min-w-0">{children}</div>
		</div>
	)
}

export { Collout, colloutVariants }
