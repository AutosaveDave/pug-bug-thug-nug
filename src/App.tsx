import { useState, useEffect } from "react"
import { MapPin, Clock, Star, Users, Phone, Instagram, ChefHat } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence } from "framer-motion"

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  isPopular?: boolean
  isNew?: boolean
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
    id: "boomer-bomb",
    name: "Boomer Bomb Mk. IV",
    description: "Pulled pork, queso, and jalapeño with our signature heat blend",
    price: "$8.25",
    isNew: true
  },
  {
    id: "triple-threat",
    name: "The Triple Threat",
    description: "Pulled pork, brisket, and chicken with our signature sauce trio",
    price: "$9.25",
    isPopular: true
  },
  {
    id: "mac-cheese-attack",
    name: "Mac & Cheese Attack",
    description: "Creamy mac and cheese topped with crispy bacon and BBQ sauce drizzle",
    price: "$7.25"
  }
]

const pageTransition = {
  initial: { opacity: 0, x: 100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -100 }
}

function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden wood-grain-texture">
        <div className="absolute inset-0 smoke-effect"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display font-bold text-6xl md:text-8xl text-primary-foreground mb-2"
          >
            OldManRodjas
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display font-bold text-4xl md:text-6xl text-accent mb-8"
          >
            Slider Shack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl text-primary-foreground/90 font-medium mb-12"
          >
            Meet Meat
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-8 animate-pulse-glow button-shimmer button-hover-bounce transform-gpu"
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'menu' }))}
              >
                <motion.span
                  whileHover={{ 
                    textShadow: "0 0 8px rgba(255, 215, 0, 0.8)",
                    rotateZ: 0,
                    transition: { duration: 0.3 } 
                  }}
                  className="font-bold"
                >
                  View Menu
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Features */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ChefHat, title: "Hand-Crafted", desc: "Every slider made with love and expertise" },
              { icon: Star, title: "Award Winning", desc: "Best BBQ sliders 3 years running" },
              { icon: Users, title: "Community", desc: "Proudly serving Austin since 2020" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-card rounded-lg wood-grain-light"
              >
                <feature.icon size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="font-display font-bold text-xl text-primary mb-2">{feature.title}</h3>
                <p className="text-foreground/80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function MenuPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary/60 wood-grain-texture"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl text-primary-foreground mb-4">
              Gourmet Sliders
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Where BBQ meets perfection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full bg-card/95 backdrop-blur-sm menu-card-hover group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-red-600 transition-colors duration-300">
                        {item.name}
                      </CardTitle>
                      <span className="text-2xl font-bold text-accent">{item.price}</span>
                    </div>
                    <div className="flex gap-2">
                      {item.isNew && <Badge variant="secondary" className="bg-accent text-accent-foreground">New</Badge>}
                      {item.isPopular && <Badge variant="outline" className="border-primary text-primary">Popular</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-card-foreground/80 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Bite Club Section */}
      <section id="bite-club" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Join the Bite Club
            </h2>
            <p className="text-xl text-accent font-medium mb-2">
              First rule of Bite Club: Tell everyone
            </p>
            <p className="text-lg text-white">
              Our exclusive rewards program for serious slider enthusiasts
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground p-8">
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-accent p-4 rounded-full">
                  <Star size={48} weight="fill" className="text-accent-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-bold text-2xl mb-2">Buy 5, Get 1 Free</h3>
                  <p className="text-primary-foreground/80">Every 6th slider is on the house</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Exclusive Specials</h3>
                  <p className="text-primary-foreground/80">Members-only menu items and deals</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Birthday Surprise</h3>
                  <p className="text-primary-foreground/80">Free slider combo on your special day</p>
                </div>
              </div>

              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              >
                <Users size={24} className="mr-2" />
                Join Bite Club Today
              </Button>
            </CardContent>
          </Card>
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
      variants={pageTransition}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Find the Flavor
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow the smoke and find us around town
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Location */}
            <Card className="p-8 wood-grain-light">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl text-primary">
                  <MapPin size={32} className="mr-3 text-accent" />
                  Current Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Downtown Food Truck Park</h3>
                  <p className="text-muted-foreground">
                    123 Main Street<br />
                    Austin, TX 78701
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Location updates daily on our social media
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="p-8 wood-grain-light">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl text-primary">
                  <Clock size={32} className="mr-3 text-accent" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">11:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday</span>
                  <span className="text-muted-foreground">10:00 AM - 9:00 PM</span>
                </div>
              </CardContent>
            </Card>
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
      variants={pageTransition}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl text-primary text-center mb-16"
          >
            Get in Touch
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Call Us",
                icon: Phone,
                main: "(512) 555-MEAT",
                sub: "Order ahead or just say hello",
                delay: 0
              },
              {
                title: "Follow Us",
                icon: Instagram,
                main: "@OldManRodjas",
                sub: "Daily location updates and specials",
                delay: 0.2
              }
            ].map((contact) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: contact.delay, duration: 0.6 }}
                className="p-6 bg-card rounded-lg wood-grain-light text-center"
              >
                <contact.icon size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="font-display font-bold text-xl text-primary mb-2">{contact.title}</h3>
                <p className="text-lg mb-2 font-semibold">{contact.main}</p>
                <p className="text-muted-foreground">{contact.sub}</p>
              </motion.div>
            ))}
          </div>

          <Separator className="my-12" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="font-display font-bold text-2xl text-primary mb-4 md:mb-0">
                OldManRodjas Slider Shack
              </div>
              <div className="text-muted-foreground">
                © 2024 All rights reserved
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'menu':
        return <MenuPage />
      case 'location':
        return <LocationPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  // Listen for custom navigation events
  useEffect(() => {
    const handleNavigate = (e: any) => {
      setCurrentPage(e.detail)
    }

    window.addEventListener('navigate', handleNavigate)
    
    return () => {
      window.removeEventListener('navigate', handleNavigate)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 wood-grain-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display font-bold text-xl text-primary">
              OldManRodjas
            </div>
            <div className="flex space-x-8">
              {[
                { name: 'Home', key: 'home' },
                { name: 'Menu', key: 'menu' },
                { name: 'Location', key: 'location' },
                { name: 'Contact', key: 'contact' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`font-medium transition-colors ${
                    currentPage === item.key
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App