import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ExternalLink } from "lucide-react";

const resources = {
    housing: [
      {
        name: "National Low Income Housing Coalition",
        description: "Resources for affordable housing and tenant rights.",
        url: "https://nlihc.org",
        phone: "(202) 662-1530",
      },
      {
        name: "HUD Housing Assistance",
        description: "Government housing resources and rental assistance programs.",
        url: "https://www.hud.gov/topics/rental_assistance",
        phone: "(800) 569-4287",
      },
      {
        name: "Salvation Army Housing Programs",
        description: "Emergency and transitional housing options.",
        url: "https://www.salvationarmyusa.org/usn/housing-and-homeless-services/",
        phone: "(800) 728-7825",
      },
    ],
    food: [
      {
        name: "Feeding America",
        description: "Nationwide network of food banks and pantries.",
        url: "https://www.feedingamerica.org",
        phone: "(800) 771-2303",
      },
      {
        name: "SNAP Benefits (Food Stamps)",
        description: "Government assistance for purchasing food.",
        url: "https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program",
        phone: "(800) 221-5689",
      },
      {
        name: "Meals on Wheels",
        description: "Meal delivery for seniors and disabled individuals.",
        url: "https://www.mealsonwheelsamerica.org",
        phone: "(888) 998-6325",
      },
    ],
    mental: [
      {
        name: "National Alliance on Mental Illness (NAMI)",
        description: "Mental health support and resources.",
        url: "https://www.nami.org",
        phone: "(800) 950-6264",
      },
      {
        name: "Substance Abuse and Mental Health Services Administration",
        description: "Treatment locator and helpline for mental health and substance abuse.",
        url: "https://www.samhsa.gov",
        phone: "(800) 662-4357",
      },
      {
        name: "Crisis Text Line",
        description: "24/7 crisis support via text message.",
        url: "https://www.crisistextline.org",
        phone: "Text HOME to 741741",
      },
    ],
    financial: [
      {
        name: "National Foundation for Credit Counseling",
        description: "Financial education and debt management assistance.",
        url: "https://www.nfcc.org",
        phone: "(800) 388-2227",
      },
      {
        name: "Temporary Assistance for Needy Families (TANF)",
        description: "Financial assistance for low-income families.",
        url: "https://www.acf.hhs.gov/ofa/programs/tanf",
        phone: "Contact your state TANF office",
      },
      {
        name: "United Way 211",
        description: "Connects people with local resources and assistance programs.",
        url: "https://www.211.org",
        phone: "Dial 211",
      },
    ],
    emergency: [
      {
        name: "National Domestic Violence Hotline",
        description: "24/7 support for domestic violence victims.",
        url: "https://www.thehotline.org",
        phone: "(800) 799-7233",
      },
      {
        name: "National Suicide Prevention Lifeline",
        description: "Crisis support for those experiencing suicidal thoughts.",
        url: "https://suicidepreventionlifeline.org",
        phone: "988 or (800) 273-8255",
      },
      {
        name: "American Red Cross",
        description: "Disaster relief and emergency assistance.",
        url: "https://www.redcross.org",
        phone: "(800) 733-2767",
      },
    ],
  };
const Help = () => {
  return (
    <div>
          <section className="page-section">
        <div className="container">
          <div className="mb-10">
            <h2 className="mb-4 animate-slide-in">Finding Help</h2>
            <p className="text-lg text-muted-foreground max-w-3xl animate-slide-in animation-delay-100">
              Beyond wishlists, there are many organizations and programs that can provide assistance during difficult times. We've compiled this resource directory to help you find additional support.
            </p>
          </div>

          <div className="mb-8 animate-slide-in animation-delay-200">
            <Tabs defaultValue="housing" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="housing">Housing</TabsTrigger>
                <TabsTrigger value="food">Food Assistance</TabsTrigger>
                <TabsTrigger value="mental">Mental Health</TabsTrigger>
                <TabsTrigger value="financial">Financial Aid</TabsTrigger>
                <TabsTrigger value="emergency">Emergency Help</TabsTrigger>
              </TabsList>
              
              {Object.keys(resources).map((category) => (
                <TabsContent key={category} value={category} className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources[category as keyof typeof resources].map((resource, index) => (
                      <Card key={index} className="border border-border hover:shadow-hover transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-start justify-between">
                            <span>{resource.name}</span>
                            <a 
                              href={resource.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm">
                            <div className="font-medium mb-1">Contact:</div>
                            <div className="text-muted-foreground">{resource.phone}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="mt-12 bg-secondary rounded-xl p-8 border border-border animate-slide-in animation-delay-400">
            <h3 className="text-2xl font-medium mb-4">Crisis Resources</h3>
            <p className="mb-6 text-lg">
              If you or someone you know is in immediate danger, please call emergency services at <strong>911</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-5 border border-border">
                <h4 className="text-lg font-medium mb-2">National Suicide Prevention Lifeline</h4>
                <p className="text-muted-foreground mb-2">24/7 support for people in distress</p>
                <p className="font-medium">988 or (800) 273-8255</p>
              </div>
              <div className="bg-card rounded-lg p-5 border border-border">
                <h4 className="text-lg font-medium mb-2">Domestic Violence Hotline</h4>
                <p className="text-muted-foreground mb-2">24/7 support for abuse victims</p>
                <p className="font-medium">(800) 799-7233</p>
              </div>
              <div className="bg-card rounded-lg p-5 border border-border">
                <h4 className="text-lg font-medium mb-2">Disaster Distress Helpline</h4>
                <p className="text-muted-foreground mb-2">Crisis counseling for disaster survivors</p>
                <p className="font-medium">(800) 985-5990</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Help