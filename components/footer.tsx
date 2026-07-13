import Link from 'next/link'
import { Zap, Phone, Mail, MapPin, Clock } from 'lucide-react'

const services = [
  { name: 'Residential Electrical', href: '/services#residential' },
  { name: 'Commercial Electrical', href: '/services#commercial' },
  { name: 'Emergency Callouts', href: '/emergency' },
  { name: 'EV Charger Installation', href: '/services#ev-chargers' },
  { name: 'Smart Home Systems', href: '/services#smart-home' },
  { name: 'CCTV & Security', href: '/services#security' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Contact', href: '/contact' },
  { name: 'Get a Quote', href: '/quote' },
]

const areas = [
  'Brunswick',
  'Melbourne CBD',
  'Northern Suburbs',
  'Eastern Suburbs',
  'Western Suburbs',
  'All Victoria',
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Emergency Banner */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
              <span className="font-semibold text-sm sm:text-base">24/7 Emergency Electrical Service Available</span>
            </div>
            <a 
              href="tel:1300VOLTEDGE" 
              className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
            >
              <Phone className="h-5 w-5" />
              1300 VOLT EDGE
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold tracking-tight">
                Volt<span className="text-primary">Edge</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium electrical services across Victoria. Licensed, insured, and committed to excellence in every project.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Brunswick, Melbourne<br />Servicing All Victoria</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>24/7 Emergency Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area} className="text-sm text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Row */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <a 
                href="tel:1300VOLTEDGE" 
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">1300 VOLT EDGE</span>
              </a>
              <a 
                href="mailto:info@voltedge.com.au" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@voltedge.com.au</span>
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              Licensed Electrical Contractors | REC 12345
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VoltEdge Electrical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
