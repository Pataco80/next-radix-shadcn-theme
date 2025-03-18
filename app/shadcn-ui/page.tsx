import { Collout } from '@/components/Collout'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'
import Link from 'next/link'

export default function ShadcnUI() {
	return (
		<div className="min-h-screen w-full">
			{/* En-tête */}
			<header className="py-8 border-b">
				<div className="container">
					<h1 className="text-4xl font-bold">Composants Shadcn UI</h1>
					<p className="mt-2 text-muted-foreground">
						Démonstration des composants disponibles
					</p>
				</div>
				<Button asChild>
					<Link href="/">Retour</Link>
				</Button>
			</header>

			<main className="container py-8">
				<Tabs defaultValue="forms" className="w-full">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="forms">Formulaires</TabsTrigger>
						<TabsTrigger value="data">Données</TabsTrigger>
						<TabsTrigger value="navigation">Navigation</TabsTrigger>
						<TabsTrigger value="feedback">Feedback</TabsTrigger>
					</TabsList>

					{/* Section Formulaires */}
					<TabsContent value="forms" className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Composants de formulaire</CardTitle>
								<CardDescription>
									Les éléments essentiels pour la création de formulaires
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								{/* Input */}
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="email@exemple.com"
									/>
								</div>

								{/* Textarea */}
								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea id="message" placeholder="Votre message..." />
								</div>

								{/* Checkbox */}
								<div className="flex items-center space-x-2">
									<Checkbox id="terms" />
									<Label htmlFor="terms">Accepter les conditions</Label>
								</div>

								{/* Radio Group */}
								<RadioGroup defaultValue="option-1">
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="option-1" id="option-1" />
										<Label htmlFor="option-1">Option 1</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="option-2" id="option-2" />
										<Label htmlFor="option-2">Option 2</Label>
									</div>
								</RadioGroup>

								{/* Switch */}
								<div className="flex items-center space-x-2">
									<Switch id="notifications" />
									<Label htmlFor="notifications">Notifications</Label>
								</div>

								{/* Toggle */}
								<div className="flex items-center space-x-2">
									<Toggle>Toggle</Toggle>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Envoyer</Button>
							</CardFooter>
						</Card>
					</TabsContent>

					{/* Section Données */}
					<TabsContent value="data" className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Affichage des données</CardTitle>
								<CardDescription>
									Composants pour présenter et manipuler les données
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Calendar />
								<Separator className="my-4" />
								{/* Ajouter d'autres composants de données ici */}
							</CardContent>
						</Card>
					</TabsContent>

					{/* Section Navigation */}
					<TabsContent value="navigation" className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Composants de navigation</CardTitle>
								<CardDescription>
									Éléments pour la navigation et la structure
								</CardDescription>
							</CardHeader>
							<CardContent>
								{/* Ajouter les composants de navigation ici */}
							</CardContent>
						</Card>
					</TabsContent>

					{/* Section Feedback */}
					<TabsContent value="feedback" className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Composants de feedback</CardTitle>
								<CardDescription>
									Éléments pour informer et interagir avec l&apos;utilisateur
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
										<Collout variant="default">
											<p>
												<strong>Default:</strong> Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Nullam pharetra sit amet
												purus et efficitur. Proin elementum, neque sit amet
												congue blandit, urna lacus efficitur nulla, sed
												dignissim libero elit ut nisl. Quisque dictum sem id
												nulla porttitor lacinia. Nulla rhoncus elementum
												condimentum. Cras dictum rutrum erat a porttitor.
												Aliquam.
											</p>
										</Collout>
										<Collout variant="secondary">
											<p>
												<strong>Secondary:</strong> Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Nullam pharetra sit amet
												purus et efficitur. Proin elementum, neque sit amet
												congue blandit, urna lacus efficitur nulla, sed
												dignissim libero elit ut nisl. Quisque dictum sem id
												nulla porttitor lacinia. Nulla rhoncus elementum
												condimentum. Cras dictum rutrum erat a porttitor.
												Aliquam.
											</p>
										</Collout>
										<Collout variant="info">
											<p>
												<strong>Info:</strong> Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Nullam pharetra sit amet
												purus et efficitur. Proin elementum, neque sit amet
												congue blandit, urna lacus efficitur nulla, sed
												dignissim libero elit ut nisl. Quisque dictum sem id
												nulla porttitor lacinia. Nulla rhoncus elementum
												condimentum. Cras dictum rutrum erat a porttitor.
												Aliquam.
											</p>
										</Collout>
										<Collout variant="warning">
											<p>
												<strong>Warning:</strong> Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Nullam pharetra sit amet
												purus et efficitur. Proin elementum, neque sit amet
												congue blandit, urna lacus efficitur nulla, sed
												dignissim libero elit ut nisl. Quisque dictum sem id
												nulla porttitor lacinia. Nulla rhoncus elementum
												condimentum. Cras dictum rutrum erat a porttitor.
												Aliquam.
											</p>
										</Collout>
										<Collout variant="success">
											<p>
												<strong>Success:</strong> Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Nullam pharetra sit amet
												purus et efficitur. Proin elementum, neque sit amet
												congue blandit, urna lacus efficitur nulla, sed
												dignissim libero elit ut nisl. Quisque dictum sem id
												nulla porttitor lacinia. Nulla rhoncus elementum
												condimentum. Cras dictum rutrum erat a porttitor.
												Aliquam.
											</p>
										</Collout>
										<Collout variant="destructive">
											<p>
												<strong>Destructive:</strong> Lorem ipsum dolor sit
												amet, consectetur adipiscing elit. Nullam pharetra sit
												amet purus et efficitur. Proin elementum, neque sit amet
												congue blandit, urna lacus efficitur nulla, sed
												dignissim libero elit ut nisl. Quisque dictum sem id
												nulla porttitor lacinia. Nulla rhoncus elementum
												condimentum. Cras dictum rutrum erat a porttitor.
												Aliquam.
											</p>
										</Collout>
									</div>
									<Collout variant="warning">
										<p>
											<strong>Warning:</strong> Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Nullam pharetra sit amet
											purus et efficitur. Proin elementum, neque sit amet congue
											blandit, urna lacus efficitur nulla, sed dignissim libero
											elit ut nisl. Quisque dictum sem id nulla porttitor
											lacinia. Nulla rhoncus elementum condimentum. Cras dictum
											rutrum erat a porttitor. Aliquam.
										</p>
									</Collout>
								</CardDescription>
							</CardHeader>
							<CardContent>
								{/* Ajouter les composants de feedback ici */}
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</main>
		</div>
	)
}
