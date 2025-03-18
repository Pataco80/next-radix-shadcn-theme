import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
export default function ShadcnUiLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<SidebarProvider className="sidebar-provider">
			{/* <AppSidebar /> */}
			<SidebarTrigger className="sidebar-trigger" />
			{children}
		</SidebarProvider>
	)
}
