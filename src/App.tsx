import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Clock, Star, Users, Phone, Instagram, ArrowRight, ChefHat, Heart } from "@phosphor-icons/react"
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

type PageType = 'home' | 'menu' | 'bite-club' | 'location' | 'contact'

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -100 }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

function Navigation({ currentPage, setCurrentPage }: { currentPage: PageType, setCurrentPage: (page: PageType) => void }) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 wood-grain-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-display font-bold text-xl text-primary cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            OldManRodjas
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {(['home', 'menu', 'bite-club', 'location', 'contact'] as PageType[]).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`text-foreground hover:text-accent transition-colors capitalize ${
                  currentPage === page ? 'text-accent font-semibold' : ''
                }`}
              >
                {page === 'bite-club' ? 'Bite Club' : page}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function HomePage({ setCurrentPage }: { setCurrentPage: (page: PageType) => void }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 smoke-effect"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.h1 
            className="font-display font-bold text-6xl md:text-8xl text-primary-foreground mb-4 animate-float"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            OldManRodjas
          </motion.h1>
          <motion.h2 
            className="font-display text-3xl md:text-4xl text-primary-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Slider Shack
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Meet Meat
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button 
              size="lg" 
              onClick={() => setCurrentPage('menu')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 animate-pulse-glow hover-scale"
            >
              <ChefHat size={24} className="mr-2" />
              View Menu
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ChefHat, title: "Hand-Crafted", desc: "Every slider made fresh to order", delay: 0.1 },
              { icon: Heart, title: "Local Favorite", desc: "Austin's most beloved food truck", delay: 0.3 },
              { icon: Star, title: "Award Winning", desc: "Best BBQ sliders 3 years running", delay: 0.5 }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-card rounded-lg wood-grain-light hover:shadow-lg transition-all duration-300"
              >
                <feature.icon size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="font-display text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

function MenuPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-16 min-h-screen"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Smoky Slider Menu
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Hand-crafted sliders made with love, smoke, and the finest ingredients. 
              Every bite tells a story of authentic barbecue tradition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 wood-grain-light relative overflow-hidden border-2 border-border/20 hover:border-accent/50">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function BiteClubPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-16 min-h-screen"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Join the Bite Club
            </h2>
            <p className="text-xl text-accent font-medium mb-2">
              First rule of Bite Club: Tell everyone
            </p>
            <p className="text-lg text-foreground/70">
              Our exclusive rewards program for serious slider enthusiasts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground p-8 wood-grain-texture relative overflow-hidden border-2 border-accent/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/98 to-secondary/98"></div>
              <CardContent className="space-y-6 relative z-10">
                <motion.div 
                  className="flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-accent p-4 rounded-full shadow-lg">
                    <Star size={48} weight="fill" className="text-accent-foreground" />
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {[
                    { title: "Buy 5, Get 1 Free", desc: "Every 6th slider is on the house", delay: 0.1 },
                    { title: "Exclusive Specials", desc: "Members-only menu items and deals", delay: 0.3 },
                    { title: "Birthday Surprise", desc: "Free slider combo on your special day", delay: 0.5 }
                  ].map((benefit) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: benefit.delay, duration: 0.6 }}
                    >
                      <h3 className="font-bold text-2xl mb-2">{benefit.title}</h3>
                      <p className="text-primary-foreground/90">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg border-2 border-accent-foreground/20"
                  >
                    <Users size={24} className="mr-2" />
                    Join Bite Club Today
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

function LocationPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-16 min-h-screen"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/15">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Find the Flavor
            </h2>
            <p className="text-lg text-foreground/80">
              Follow the smoke and find us around town
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: MapPin,
                title: "Current Location",
                content: (
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Downtown Food Truck Park</h3>
                    <p className="text-foreground/70">
                      123 Main Street<br />
                      Austin, TX 78701
                    </p>
                    <div className="pt-4">
                      <p className="text-sm text-foreground/60">
                        Location updates daily on our social media
                      </p>
                    </div>
                  </div>
                ),
                delay: 0.2
              },
              {
                icon: Clock,
                title: "Hours of Operation",
                content: (
                  <div className="space-y-3">
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
                  </div>
                ),
                delay: 0.4
              }
            ].map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: section.delay, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-8 wood-grain-light relative overflow-hidden border-2 border-border/20 hover:border-accent/30 transition-colors">
                  <div className="absolute inset-0 bg-card/95"></div>
                  <div className="relative z-10">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center text-2xl text-primary">
                        <section.icon size={32} className="mr-3 text-accent" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {section.content}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function ContactPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-16 min-h-screen"
    >
      <section className="bg-primary text-primary-foreground py-20 wood-grain-texture relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-primary/95"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl mb-12"
          >
            Get in Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                main: "(512) 555-MEAT",
                sub: "For catering and large orders",
                delay: 0.2
              },
              {
                icon: Instagram,
                title: "Follow the Smoke",
                main: "@OldManRodjasSliders",
                sub: "Daily location updates & specials",
                delay: 0.4
              }
            ].map((contact) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: contact.delay, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm"
              >
                <h3 className="font-semibold text-xl mb-4 flex items-center justify-center">
                  <contact.icon size={24} className="mr-2" />
                  {contact.title}
                </h3>
                <p className="text-lg mb-2">{contact.main}</p>
                <p className="text-primary-foreground/80 text-sm">
                  {contact.sub}
                </p>
              </motion.div>
            ))}
          </div>

          <Separator className="bg-primary-foreground/20 mb-8" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="font-display font-bold text-2xl mb-4 md:mb-0">
              OldManRodjas Slider Shack
            </div>
            <div className="text-primary-foreground/80">
              © 2024 - Meet Meat, Eat Heat
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'menu':
        return <MenuPage />
      case 'bite-club':
        return <BiteClubPage />
      case 'location':
        return <LocationPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div key={currentPage}>
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App