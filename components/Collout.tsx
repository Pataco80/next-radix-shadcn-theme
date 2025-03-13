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
	'inline-flex items-center justify-center rounded-md border px-4 py-2 font-medium whitespace-normal break-words max-w-full gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground border-primary/50',
				secondary: 'bg-secondary text-secondary-foreground border-secondary/50',
				destructive:
					'bg-destructive text-destructive-foreground border-destructive/50',
				info: 'bg-info text-info-foreground border-info/50',
				success: 'bg-success text-success-foreground border-success/50',
				warning: 'bg-warning text-warning-foreground border-warning/50',
			},
			size: {
				sm: 'text-xs',
				md: 'text-sm',
				lg: 'text-base',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	}
)

function Collout({
	className,
	variant,
	children,
	...props
}: React.ComponentProps<'div'> & VariantProps<typeof colloutVariants>) {
	return (
		<div
			className={cn(
				colloutVariants({ variant: variant || 'default' }),
				className
			)}
			{...props}
		>
			<ColloutIcon variant={variant || 'default'} />
			{children}
		</div>
	)
}

export { Collout, colloutVariants }
