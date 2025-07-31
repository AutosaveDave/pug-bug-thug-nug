# OldManRodjas Slider Shack - Product Requirements Document

A modern, appetizing website for a barbecue slider food truck that showcases their mouth-watering offerings and promotes their exclusive Bite Club rewards program.

**Experience Qualities**:
1. **Smoky & Authentic** - Evoke the warmth and tradition of genuine barbecue culture
2. **Approachable & Fun** - Create an inviting atmosphere that makes customers feel welcome
3. **Mouth-watering** - Visual design should make visitors crave the food immediately

**Complexity Level**: Content Showcase (information-focused)
- This is primarily a marketing website that showcases the food truck's offerings, location, and membership program without requiring complex user accounts or transactions.

## Essential Features

**Hero Section with Brand Identity**
- Functionality: Display truck name, tagline, and hero image
- Purpose: Immediately establish brand personality and appetite appeal
- Trigger: Page load
- Progression: Logo display → Tagline reveal → Call-to-action button
- Success criteria: Visitors understand what the business is within 3 seconds

**Menu Showcase**
- Functionality: Display barbecue sliders with descriptions and prices
- Purpose: Drive appetite and ordering decisions
- Trigger: User scrolls or clicks menu navigation
- Progression: Category selection → Item display → Description reading → Price viewing
- Success criteria: Visitors can easily browse all offerings and understand pricing

**Bite Club Membership Program**
- Functionality: Explain rewards program benefits and signup process
- Purpose: Build customer loyalty and repeat business
- Trigger: User clicks Bite Club section or dedicated CTA
- Progression: Program explanation → Benefits listing → Sign-up encouragement
- Success criteria: Visitors understand program value and know how to join

**Location & Hours Information**
- Functionality: Show current location, schedule, and contact info
- Purpose: Help customers find the truck and plan visits
- Trigger: User seeks location information
- Progression: Location viewing → Hours checking → Contact option
- Success criteria: Customers can easily find when and where to visit

## Edge Case Handling

- **Mobile Users**: Responsive design that works perfectly on phones while browsing menus
- **Slow Connections**: Optimized images that load progressively without losing visual appeal
- **Accessibility**: High contrast ratios and screen reader compatibility for menu items
- **Social Sharing**: Easy sharing of menu items and location updates

## Design Direction

The design should feel rustic yet refined - capturing the authentic smokehouse tradition while maintaining modern digital polish that appeals to food truck customers of all ages.

## Color Selection

Triadic color scheme using warm barbecue-inspired tones that evoke smoky flavors and outdoor cooking.

- **Primary Color**: Smoky Charcoal (oklch(0.25 0.02 270)) - Communicates authentic barbecue tradition and premium quality
- **Secondary Colors**: 
  - Hickory Brown (oklch(0.35 0.08 45)) - Represents wood smoke and rustic charm
  - Flame Orange (oklch(0.65 0.15 35)) - Evokes fire, heat, and appetite appeal
- **Accent Color**: Paprika Red (oklch(0.55 0.18 25)) - Attention-grabbing spice color for CTAs and highlights
- **Foreground/Background Pairings**: 
  - Background (Cream White oklch(0.96 0.01 85)): Charcoal text (oklch(0.25 0.02 270)) - Ratio 15.2:1 ✓
  - Card (Warm White oklch(0.94 0.02 75)): Charcoal text (oklch(0.25 0.02 270)) - Ratio 13.8:1 ✓
  - Primary (Smoky Charcoal oklch(0.25 0.02 270)): Cream text (oklch(0.96 0.01 85)) - Ratio 15.2:1 ✓
  - Accent (Paprika Red oklch(0.55 0.18 25)): White text (oklch(1 0 0)) - Ratio 7.1:1 ✓

## Font Selection

Typography should convey rustic authenticity balanced with modern readability - think BBQ joint meets contemporary food culture.

- **Typographic Hierarchy**:
  - H1 (Truck Name): Playfair Display Bold/48px/tight letter spacing for premium feel
  - H2 (Section Headers): Inter Bold/32px/normal spacing for modern clarity
  - H3 (Menu Items): Inter SemiBold/24px/slight letter spacing for emphasis
  - Body (Descriptions): Inter Regular/16px/relaxed line height for easy reading
  - Captions (Prices/Hours): Inter Medium/14px/normal spacing for important details

## Animations

Subtle hunger-inducing animations that enhance the food presentation without being distracting - focus on gentle reveals and appetite-building effects.

- **Purposeful Meaning**: Gentle fade-ins and subtle scaling that mimics the satisfaction of discovering great food
- **Hierarchy of Movement**: Hero elements get priority animation, followed by menu items on scroll, with micro-interactions on buttons

## Component Selection

- **Components**: 
  - Cards for menu items with hover effects
  - Buttons for CTAs with primary/secondary styling
  - Badges for pricing and "New" items
  - Separator for section divisions
  - Navigation with smooth scrolling
- **Customizations**: 
  - Custom hero section with background image overlay
  - Menu grid layout with responsive columns
  - Bite Club signup card with distinctive styling
- **States**: 
  - Buttons: default, hover (slight scale), active (pressed), focused (ring)
  - Cards: default, hover (subtle lift shadow), selected (accent border)
- **Icon Selection**: 
  - MapPin for location
  - Clock for hours
  - Star for rewards/favorites
  - Users for community/membership
- **Spacing**: Consistent 4/6/8/12/16/24px spacing using Tailwind scale
- **Mobile**: 
  - Single column layout on mobile
  - Larger touch targets for menu items
  - Collapsible navigation for smaller screens
  - Stacked hero content on mobile