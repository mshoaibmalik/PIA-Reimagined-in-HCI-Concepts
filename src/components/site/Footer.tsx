import { Link } from "@tanstack/react-router";
import logo from "@/assets/pia-logo.png";
import watermark from "@/assets/footer-watermark.png";

export function Footer() {
  return (
    <footer className="relative mt-20 bg-white/80 overflow-hidden">
      <div className="absolute right-0 top-0 translate-x-8 -translate-y-6 opacity-10 pointer-events-none select-none">
        <img src={watermark} alt="" className="h-80 w-80 object-contain" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Pakistan International Airlines" className="h-12 w-auto" />
            <div>
              <p className="text-sm font-semibold text-foreground">PIA Building, Jinnah International Airport,</p>
              <p className="text-sm text-muted-foreground">Karachi, 75200, Pakistan</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-foreground">
              <span>📞 (+92-21)-111-786-786</span>
              <span>✉️ contact@piac.aero</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/pakistaninternationalairlines" aria-label="PIA on Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.09 5.66 21.13 10.44 21.99v-6.99H7.9v-2.89h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17.09 22 12.07z" />
              </svg>
            </a>
            <a href="https://x.com/PIAofficial" aria-label="PIA on X" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M23 3c-.8.4-1.6.7-2.5.8.9-.5 1.6-1.3 1.9-2.3-.8.5-1.8.9-2.8 1.1A4.48 4.48 0 0 0 16.9 2c-2.5 0-4.5 2.2-4.5 5 0 .4 0 .8.1 1.1C7.7 8.9 4.07 6.92 1.64 4.15c-.4.7-.6 1.6-.6 2.5 0 1.7.8 3.3 2 4.2-.7 0-1.5-.2-2.1-.6v.1c0 2.4 1.7 4.4 4 4.9-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.5 3.4 4.6 3.5A9 9 0 0 1 1 19.5 12.7 12.7 0 0 0 6.9 21c8.3 0 12.8-7 12.8-13.2v-.6A9.2 9.2 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/pia_official" aria-label="PIA on Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.98.24 2.44.4.59.21 1.01.46 1.45.9.44.44.69.86.9 1.45.16.46.34 1.28.4 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.98-.4 2.44-.21.59-.46 1.01-.9 1.45-.44.44-.86.69-1.45.9-.46.16-1.28.34-2.44.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.98-.24-2.44-.4-.59-.21-1.01-.46-1.45-.9-.44-.44-.69-.86-.9-1.45-.16-.46-.34-1.28-.4-2.44C2.21 15.78 2.2 15.4 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.98.4-2.44.21-.59.46-1.01.9-1.45.44-.44.86-.69 1.45-.9.46-.16 1.28-.34 2.44-.4C8.42 2.21 8.8 2.2 12 2.2zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/pakistan-international-airlines" aria-label="PIA on LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8 8.98h4.8v2.07h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.32 5.98 7.64V24h-5v-6.64c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.53V24H8V8.98z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@PIAOfficial" aria-label="PIA on YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.6 2.5 12 2.5 12 2.5s-4.6 0-8.6.3c-.4 0-1.3.1-2.1 1C.2 4.5 0 6.2 0 6.2S0 8 0 9.8v4.4c0 1.8.2 3.6.2 3.6s.2 1.7.8 2.4c.8.9 1.8.9 2.2 1 1.6.1 6.6.3 6.6.3s4.6 0 8.6-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.8.2-3.6V9.8c0-1.8-.2-3.6-.2-3.6zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-8 border-t border-border" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">About Us</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><Link to="/" className="hover:text-primary">Vision & Values</Link></li>
              <li><Link to="/" className="hover:text-primary">Management</Link></li>
              <li><Link to="/" className="hover:text-primary">Careers</Link></li>
              <li><Link to="/" className="hover:text-primary">Accessibility Plan</Link></li>
              <li><Link to="/" className="hover:text-primary">Press Release</Link></li>
              <li><Link to="/" className="hover:text-primary">Tenders</Link></li>
              <li><Link to="/" className="hover:text-primary">Bid Reports</Link></li>
              <li><Link to="/" className="hover:text-primary">Agent Registrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Facilities</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><Link to="/" className="hover:text-primary">Air Passenger Rights</Link></li>
              <li><Link to="/" className="hover:text-primary">Conditions of Carriage</Link></li>
              <li><Link to="/" className="hover:text-primary">Booking Conditions</Link></li>
              <li><Link to="/" className="hover:text-primary">Traveler's Information</Link></li>
              <li><Link to="/" className="hover:text-primary">Baggage Guide</Link></li>
              <li><Link to="/" className="hover:text-primary">Overseas Pakistanis</Link></li>
              <li><Link to="/" className="hover:text-primary">Track Your Cargo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Help & Contact</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><Link to="/" className="hover:text-primary">Help & Contact</Link></li>
              <li><Link to="/" className="hover:text-primary">Special Assistance</Link></li>
              <li><Link to="/" className="hover:text-primary">Special Assistance Form</Link></li>
              <li><Link to="/" className="hover:text-primary">Frequently Asked Questions</Link></li>
              <li><Link to="/" className="hover:text-primary">Site Map</Link></li>
              <li><Link to="/" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-primary">Feedback</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
            <span>© {new Date().getFullYear()} Pakistan International Airlines. Academic HCI redesign concept.</span>
            <span>WCAG 2.1 AA · Keyboard-friendly · Screen-reader optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
