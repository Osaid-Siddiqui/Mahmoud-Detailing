"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  Check,
  Sparkles,
  Car,
  Droplets,
  Shield,
} from "lucide-react"
import Image from "next/image"

export default function MahmoudDetailing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "gallery", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 text-white backdrop-blur-sm border-b border-black/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-10-03_at_14.04.15_948cfe8a-removebg-preview-gK8ykwJv5dJQ4O2tmX0IgchtbCs8w7.png"
                alt="Mahmoud Mobile Detailing Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-red-500 relative ${
                    activeSection === item.toLowerCase() ? "text-red-500" : "text-white"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"
                    />
                  )}
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex bg-red-600 hover:bg-red-600/90 text-white"
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-600/90 text-white w-full"
              >
                Book Now
              </Button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero-section-bg">
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
          <div className="hero-shape hero-shape-red" />
          <div className="hero-shape hero-shape-dark" />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            >
              Premium Shine, <span className="text-primary">Anytime, Anywhere</span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance"
            >
              Professional mobile auto detailing services in Saint Louis, Missouri
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
              >
                Book Now
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex items-center justify-center gap-6 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                <span>+1 (314)-760-2677</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                <span>Saint Louis, MO</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                We Come to <span className="text-primary">You</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mahmoud Mobile Detailing brings professional auto detailing services directly to your location. Whether
                you're at home, work, or anywhere in the Saint Louis area, we provide premium car care with convenience
                and excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With years of experience and a passion for perfection, Mahmoud Aloqla ensures every vehicle receives
                meticulous attention to detail, leaving your car looking showroom-ready.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=900&auto=format&fit=crop"
                  alt="Car Detailing"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=900&auto=format&fit=crop"
                  alt="Interior Detailing"
                  width={300}
                  height={300}
                  className="rounded-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Sparkles size={32} />
                  <div>
                    <div className="font-bold text-lg">Mobile Service</div>
                    <div className="text-sm">We Come to You!</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Pricing Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Premium detailing packages tailored to your vehicle's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Exterior Wash & Wax",
                price: "$79",
                icon: <Droplets size={40} />,
                features: [
                  "Hand wash & dry",
                  "Premium wax application",
                  "Tire shine",
                  "Window cleaning",
                  "Wheel detailing",
                ],
              },
              {
                title: "Interior Deep Clean",
                price: "$99",
                icon: <Car size={40} />,
                features: [
                  "Vacuum all surfaces",
                  "Steam cleaning",
                  "Leather conditioning",
                  "Dashboard detailing",
                  "Odor elimination",
                ],
                popular: true,
              },
              {
                title: "Full Detailing Package",
                price: "$159",
                icon: <Sparkles size={40} />,
                features: [
                  "Complete exterior wash",
                  "Full interior detailing",
                  "Engine bay cleaning",
                  "Paint correction",
                  "Premium protection",
                ],
              },
              {
                title: "Ceramic Coating",
                price: "$299",
                icon: <Shield size={40} />,
                features: [
                  "Paint decontamination",
                  "Surface preparation",
                  "9H ceramic coating",
                  "3-year protection",
                  "Hydrophobic finish",
                ],
              },
              {
                title: "Engine Bay Detailing",
                price: "$69",
                icon: <Car size={40} />,
                features: [
                  "Degreasing",
                  "Pressure washing",
                  "Component protection",
                  "Shine restoration",
                  "Inspection included",
                ],
              },
              {
                title: "Headlight Restoration",
                price: "$49",
                icon: <Sparkles size={40} />,
                features: ["Oxidation removal", "Wet sanding", "Polishing", "UV protection", "Crystal clear finish"],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className={`p-8 h-full relative overflow-hidden group ${
                    service.popular ? "border-primary border-2" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  <div className="service-icon-badge mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-red-600 hover:bg-red-600/90 text-white group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all"
                  >
                    Book Service
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              See the transformation - before and after results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
                alt: "Exterior shine after premium detailing",
              },
              {
                url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
                alt: "Red sports car ceramic coating",
              },
              {
                url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
                alt: "Interior leather deep cleaning",
              },
              {
                url: "https://images.unsplash.com/photo-1541447271487-09612b3f49c7?q=80&w=1200&auto=format&fit=crop",
                alt: "Headlight restoration results",
              },
              {
                url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
                alt: "Engine bay detailing clean finish",
              },
              {
                url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
                alt: "Full body wax and polish",
              },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-foreground">
                    <div className="font-bold text-lg mb-1">Professional Detailing</div>
                    <div className="text-sm text-muted-foreground">Premium Results</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background contact-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Get a <span className="text-primary">Free Quote</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ready to give your vehicle the care it deserves? Contact us today for a free quote and experience
                premium mobile detailing services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+13147602677" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (314)-760-2677
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=aloqlamahmoud81@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-red-600 transition-colors"
                    >
                      aloqlamahmoud81@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Saint+Louis,+Missouri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-red-600 transition-colors"
                    >
                      Saint Louis, Missouri (Open in Google Maps)
                    </a>
                    <div className="text-muted-foreground mt-2">
                      Service Areas: Ladue • Kirkwood • South County • Manchester
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="font-semibold mb-4">Follow Us</div>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={20} />, href: "#" },
                    { icon: <Instagram size={20} />, href: "#" },
                    { icon: <Twitter size={20} />, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground p-3 rounded-lg transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Doe" className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (314) 000-0000" className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <Input id="service" placeholder="e.g., Full Detailing Package" className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vehicle and any specific requirements..."
                      rows={4}
                      className="bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-10-03_at_14.04.15_948cfe8a-removebg-preview-gK8ykwJv5dJQ4O2tmX0IgchtbCs8w7.png"
                alt="Mahmoud Mobile Detailing"
                width={180}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-muted-foreground leading-relaxed">
                Premium mobile auto detailing services bringing showroom shine to your doorstep.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <a href="tel:+13147602677" className="hover:text-red-600 transition-colors">
                    +1 (314)-760-2677
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aloqlamahmoud81@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors"
                  >
                    aloqlamahmoud81@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Saint+Louis,+Missouri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors"
                  >
                    Saint Louis, Missouri
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Mahmoud Mobile Detailing. All Rights Reserved.</p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
