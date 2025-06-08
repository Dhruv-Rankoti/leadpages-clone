import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
	{
		name: "Standard",
		price: 27,
		description: "Perfect for small businesses and entrepreneurs just getting started.",
		features: [
			"Unlimited landing pages",
			"Custom domain",
			"Mobile-responsive pages",
			"Lead notifications",
			"Basic integrations",
			"Standard support",
		],
		cta: "Start Standard",
		popular: false,
	},
	{
		name: "Pro",
		price: 59,
		description: "For growing businesses that need more advanced features and integrations.",
		features: [
			"Everything in Standard",
			"A/B testing",
			"Advanced analytics",
			"Unlimited custom domains",
			"Priority support",
			"Removal of branding",
			"Advanced integrations",
		],
		cta: "Start Pro",
		popular: true,
	},
	{
		name: "Advanced",
		price: 139,
		description: "For marketing teams that need powerful tools and enterprise-level features.",
		features: [
			"Everything in Pro",
			"Sub-accounts",
			"Team collaboration",
			"Advanced security",
			"API access",
			"Dedicated account manager",
			"Custom integrations",
		],
		cta: "Start Advanced",
		popular: false,
	},
]

export default function Pricing() {
	return (
		<section className="py-16 md:py-24 bg-muted">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Choose the plan that&apos;s right for your business. All plans include a 14-day free trial.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{plans.map((plan, index) => (
						<Card
							key={index}
							className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : "border-border"}`}
						>
							{plan.popular && (
								<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
									Most Popular
								</div>
							)}
							<CardHeader>
								<CardTitle>{plan.name}</CardTitle>
								<div className="mt-4">
									<span className="text-4xl font-bold">${plan.price}</span>
									<span className="text-muted-foreground">/mo</span>
								</div>
								<CardDescription className="mt-2">{plan.description}</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<ul className="space-y-3">
									{plan.features.map((feature, i) => (
										<li key={i} className="flex items-center">
											<Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
									variant={plan.popular ? "default" : "outline"}
								>
									{plan.cta}
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-muted-foreground mb-4">Need a custom plan for your enterprise? We&apos;ll help you generate more leads</p>
					<Link href="/contact">
						<Button variant="link">Contact our sales team</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
