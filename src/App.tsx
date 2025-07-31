import { useState } from "react"
import { MapPin, Clock, Star, Users, Phone, Ins
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
interface MenuItem {

  price: string
  id: string

  {
    name: "Clas
    price: "$6.50
  },
 

    isNew: true
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
  type: "tween",
  },

    id: "veggie-delight",
      initial={{ y: -100 }}
    description: "Grilled portobello with roasted peppers, hummus, and balsamic glaze",
    >
  },
   
    id: "triple-threat",
    name: "The Triple Threat",
    description: "Pulled pork, brisket, and chicken with our signature sauce trio",
    price: "$9.25",
    isPopular: true
    
  {
              >
    name: "Mac & Cheese Attack",
          </div>
    price: "$7.25"
  )
]

function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 wood-grain-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          <motion.h1 
            </div>
            transition={{ duration: 0.8, delay: 0.5 }}
            OldManRodjas
          <motion.h2 
            initial={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
            </div>
          <motio
        </div>
            

          <motion.div
            animate={{ opacity: 1, y: 0 }}
          >
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              <Button 
               
              >
                  classN
               
                    repeat: Infinity, 
                    e
              
                <m
                  init
                  transition={{ duration: 0.5 }}
           
                  <sp
                   
              
                

          </motion.div>
      </section>
      {/* Quick Features */}
        <div className="max-w-7xl mx-auto">
            initial={{ opacity: 0, y: 50 }}
            transition={{ durat
          >
              { icon: ChefHat, title: "Hand-Crafted", desc: "Every slider m
              { icon: Star, title: "Award Winning", desc: "Best BBQ sliders 3 years ru
              <motion.div
                
                

                <feature.icon size={48} className="mx-auto mb-4 text-accent" />
                <p className="text-for
            ))}
        </div>
    </motion.div>
}
function MenuPage() {
    <motion.div
      animate="in"
                      <span className="text-2xl font-bold text-accent">{item.price}</span>
                      <div className="flex gap-2">
                        {item.isNew && <Badge variant="secondary" className="bg-accent text-accent-foreground">New</Badge>}
                        {item.isPopular && <Badge variant="outline" className="border-primary text-primary">Popular</Badge>}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
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
            <p className="text-lg text-muted-foreground">
              Our exclusive rewards program for serious slider enthusiasts
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground p-8">
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-accent p-4 rounded-full">
                  <Star size={48} weight="fill" />
                      
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-bold text-2xl mb-2">Buy 5, Get 1 Free</h3>
                  <p className="text-primary-foreground/80">Every 6th slider is on the house</p>
              Join the
                <div>
                  <h3 className="font-bold text-2xl mb-2">Exclusive Specials</h3>
                  <p className="text-primary-foreground/80">Members-only menu items and deals</p>
            initial={{
                <div>
                  <h3 className="font-bold text-2xl mb-2">Birthday Surprise</h3>
                  <p className="text-primary-foreground/80">Free slider combo on your special day</p>
                  clas
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

      <Separator className="my-8" />

      {/* Location & Hours */}
      <section id="location" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <Card className="p-8">
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
  return (
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Location updates daily on our social media
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-2xl text-primary">
                  <Clock size={32} className="mr-3 text-accent" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                  <div className="relative z-10">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">11:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  </div>
              </motion.div>
          </div>
      </section>
  )

  return (
      initial="initial"
      exit="out"
      transition={pageTransition}
    >
        <div className
          <motion.h2 
            animate
            clas
            Ge
          

                icon: Phone,
                main: "(512) 555-MEAT",
                delay: 0.2
              {
                title: "
               
          
              <motion.div
                i
                transition={{ delay: contact.delay, duration: 0.6 }}
                className="p-6 bg-primary-foreground
                <h3 cla
                  {
                <p className="text-lg mb-2">{contact.ma
                  {contact.sub}
              </motion.div>
          </div>
          <Separat
          <m
            anima
            className="flex flex-col md:flex-row justify-between items-center"
            <div className="font-display font-bold text-
            </div>
              © 202
          </motion.div>
      </section>
  )

  const [currentPa
  const renderPa

      case 'menu':
      case
      case 'location':
      case 'contact':
      default:
    }

    <div className="min-h-screen bg-backgr
      
        <motion.
        </moti
    </div>
}
exp


