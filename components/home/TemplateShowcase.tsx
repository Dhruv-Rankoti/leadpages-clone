import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import TemplateImage from "@/components/ui/template-image"

const templateCategories = [
	{ id: "all", label: "All Templates" },
	{ id: "lead-gen", label: "Lead Generation" },
	{ id: "sales", label: "Sales Pages" },
	{ id: "webinar", label: "Webinar" },
	{ id: "ecommerce", label: "E-commerce" },
]

const templates = [
	{
		id: 1,
		title: "Lead Magnet",
		category: "lead-gen",
		image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&h=800",
		popular: true,
	},
	{
		id: 2,
		title: "Product Launch",
		category: "sales",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=800",
		popular: false,
	},
	{
		id: 3,
		title: "Webinar Registration",
		category: "webinar",
		image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&h=800",
		popular: true,
	},
	{
		id: 4,
		title: "E-commerce Product",
		category: "ecommerce",
		image: "https://images.unsplash.com/photo-1561997968-aa846c2bf255?auto=format&fit=crop&w=600&h=800",
		popular: false,
	},
	{
		id: 5,
		title: "Newsletter Signup",
		category: "lead-gen",
		image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&h=800",
		popular: false,
	},
	{
		id: 6,
		title: "Sales Funnel",
		category: "sales",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=800",
		popular: true,
	},
	{
		id: 7,
		title: "Event Registration",
		category: "webinar",
		image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&h=800",
		popular: false,
	},
	{
		id: 8,
		title: "Product Showcase",
		category: "ecommerce",
		image: "https://images.unsplash.com/photo-1561997968-aa846c2bf255?auto=format&fit=crop&w=600&h=800",
		popular: true,
	},
]

export default function TemplateShowcase() {
	return (
		<section className="py-16 md:py-24 bg-muted">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Start with a Professional Template
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Choose from hundreds of professionally designed templates and
						customize them to match your brand.
					</p>
				</div>

				<Tabs defaultValue="all" className="w-full">
					<div className="flex justify-center mb-8 overflow-x-auto px-6 md:px-8 scrollbar-none">
						<TabsList className="flex-nowrap mx-auto">
							{templateCategories.map((category) => (
								<TabsTrigger 
									key={category.id} 
									value={category.id}
									className="whitespace-nowrap px-4"
								>
									{category.label}
								</TabsTrigger>
							))}
						</TabsList>
					</div>

					{templateCategories.map((category) => (
						<TabsContent key={category.id} value={category.id} className="mt-0">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
								{templates
									.filter(
										(template) =>
											category.id === "all" ||
											template.category === category.id
									)
									.map((template) => (
										<Card key={template.id} className="overflow-hidden group border border-transparent">
											<CardContent className="p-0">
												<div className="relative aspect-[3/4] overflow-hidden">
													<TemplateImage
														src={template.image}
														alt={template.title}
														width={300}
														height={400}
														className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
													/>
													{template.popular && (
														<div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
															Popular
														</div>
													)}
													<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
														<div className="flex flex-col gap-2">
															<Button size="sm" variant="secondary">
																Preview
															</Button>
															<Button size="sm">Use Template</Button>
														</div>
													</div>
												</div>
												<div className="p-4 bg-[#64636c4d]">
													<h3 className="font-medium">{template.title}</h3>
												</div>
											</CardContent>
										</Card>
									))}
							</div>
						</TabsContent>
					))}
				</Tabs>

				<div className="mt-12 text-center">
					<Link href="/templates">
						<Button size="lg">
							Browse All Templates
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="ml-2 h-4 w-4"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
