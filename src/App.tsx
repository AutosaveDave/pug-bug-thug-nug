import { MapPin, Clock, Star, Users, Phone, Instagram } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  isNew?: boolean
  isPopular?: boolean
}

const menuItems: MenuItem[] = [
  {
    id: "classic-bbq",
    name: "Classic BBQ Slider",
    description: "House-smoked pulled pork with tangy BBQ sauce, crispy slaw, and pickles",
    price: "$6.50",
    isPopular: true
  },
  {
    id: "brisket-beauty",
    name: "Brisket Beauty",
    description: "12-hour smoked brisket with horseradish cream and caramelized onions",
    price: "$7.50",
    isNew: true
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken Stack",
    description: "Nashville hot chicken with jalapeño slaw and ranch drizzle",
    price: "$6.75"
  },
  {
    id: "veggie-delight",
    name: "Smoky Veggie Delight", 
    description: "Grilled portobello with roasted peppers, hummus, and balsamic glaze",
    price: "$5.75"
  },
  {
    id: "triple-threat",
    name: "The Triple Threat",
    description: "Pulled pork, brisket, and chicken with our signature sauce trio",
    price: "$9.25",
    isPopular: true
  },
  {
    id: "mac-attack",
    name: "Mac & Cheese Attack",
    description: "Creamy mac and cheese with pulled pork and crispy bacon bits",
    price: "$7.25"
  }
]

function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 wood-grain-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display font-bold text-xl text-primary">
              OldManRodjas
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-foreground hover:text-accent transition-colors">Menu</a>
              <a href="#bite-club" className="text-foreground hover:text-accent transition-colors">Bite Club</a>
              <a href="#location" className="text-foreground hover:text-accent transition-colors">Location</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 smoke-effect"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-6xl md:text-8xl text-primary-foreground mb-4 animate-fade-in">
            OldManRodjas
          </h1>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2 animate-fade-in-up">
            Slider Shack
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium animate-fade-in-up [animation-delay:0.3s]">
            Meet Meat
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 animate-fade-in-up [animation-delay:0.6s]"
          >
            View Menu
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Smoky Slider Menu
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Hand-crafted sliders made with love, smoke, and the finest ingredients. 
              Every bite tells a story of authentic barbecue tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 wood-grain-light relative overflow-hidden border-2 border-border/20 hover:border-accent/50">
                <div className="absolute inset-0 bg-card/95"></div>
                <div className="relative z-10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                        {item.name}
                      </CardTitle>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-2xl font-bold text-accent">{item.price}</span>
                        <div className="flex gap-2">
                          {item.isNew && <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium">New</Badge>}
                          {item.isPopular && <Badge variant="outline" className="border-primary text-primary font-medium">Popular</Badge>}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Bite Club Section */}
      <section id="bite-club" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Join the Bite Club
            </h2>
            <p className="text-xl text-accent font-medium mb-2">
              First rule of Bite Club: Tell everyone
            </p>
            <p className="text-lg text-foreground/70">
              Our exclusive rewards program for serious slider enthusiasts
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground p-8 wood-grain-texture relative overflow-hidden border-2 border-accent/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/98 to-secondary/98"></div>
            <CardContent className="space-y-6 relative z-10">
              <div className="flex justify-center">
                <div className="bg-accent p-4 rounded-full shadow-lg">
                  <Star size={48} weight="fill" className="text-accent-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-bold text-2xl mb-2">Buy 5, Get 1 Free</h3>
                  <p className="text-primary-foreground/90">Every 6th slider is on the house</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Exclusive Specials</h3>
                  <p className="text-primary-foreground/90">Members-only menu items and deals</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Birthday Surprise</h3>
                  <p className="text-primary-foreground/90">Free slider combo on your special day</p>
                </div>
              </div>

              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg border-2 border-accent-foreground/20"
              >
                <Users size={24} className="mr-2" />
                Join Bite Club Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Location & Hours */}
      <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Find the Flavor
            </h2>
            <p className="text-lg text-foreground/80">
              Follow the smoke and find us around town
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Location */}
            <Card className="p-8 wood-grain-light relative overflow-hidden border-2 border-border/20 hover:border-accent/30 transition-colors">
              <div className="absolute inset-0 bg-card/95"></div>
              <div className="relative z-10">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <MapPin size={32} className="mr-3 text-accent" />
                    Current Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Downtown Food Truck Park</h3>
                    <p className="text-foreground/70">
                      123 Main Street<br />
                      Austin, TX 78701
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-foreground/60">
                      Location updates daily on our social media
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-8 wood-grain-light relative overflow-hidden border-2 border-border/20 hover:border-accent/30 transition-colors">
              <div className="absolute inset-0 bg-card/95"></div>
              <div className="relative z-10">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <Clock size={32} className="mr-3 text-accent" />
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Monday - Friday</span>
                    <span className="text-foreground/70">11:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Saturday</span>
                    <span className="text-foreground/70">10:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Sunday</span>
                    <span className="text-foreground/70">12:00 PM - 6:00 PM</span>
                  </div>
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-sm text-accent font-medium">
                      Extended hours for special events
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-16 wood-grain-texture relative">
        <div className="absolute inset-0 bg-primary/95"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-3xl mb-8">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-xl mb-4 flex items-center justify-center">
                <Phone size={24} className="mr-2" />
                Call Us
              </h3>
              <p className="text-lg">(512) 555-MEAT</p>
              <p className="text-primary-foreground/80 text-sm mt-2">
                For catering and large orders
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-4 flex items-center justify-center">
                <Instagram size={24} className="mr-2" />
                Follow the Smoke
              </h3>
              <p className="text-lg">@OldManRodjasSliders</p>
              <p className="text-primary-foreground/80 text-sm mt-2">
                Daily location updates & specials
              </p>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-display font-bold text-2xl mb-4 md:mb-0">
              OldManRodjas Slider Shack
            </div>
            <div className="text-primary-foreground/80">
              © 2024 - Meet Meat, Eat Heat
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App