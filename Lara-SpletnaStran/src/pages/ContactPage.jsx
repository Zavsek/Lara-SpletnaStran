import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import React from 'react'
import { ContactForm } from '../components/ContactForm'

export const ContactPage = () => {
  return (
          <div className="grid pt-18 px-10 mb-5 max-h-2/3  h-screen items-center gap-12 lg:grid-cols-2">
        {/* Contact Info Section */}
        <div>
          {/* Section Title */}
          <h3 className="text-base-content mb-6 text-2xl font-semibold">Kontaktiraj me!</h3>
          <p className="text-base-content/80 mb-10 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
            ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
            duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas...
          </p>

          {/* Contact Info Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {/* Office Hours */}
            <div className="card shadow-lg">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className="text-primary size-6"><Facebook/></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Facebook</h4>
                <div className="text-center">
                  <p className="text-base-content/80">fsfasffsa</p>
                </div>
              </div>
            </div>

            {/* Our Address */}
            <div className="card shadow-lg">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className=" text-primary size-6"><Instagram/></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Instagram</h4>
               <p className="text-base-content/80">@dasdsadsad</p>
              </div>
            </div>

            {/* Office 2 */}
            <div className="card shadow-lg">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className=" text-primary size-6"><Mail/></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Piši mi</h4>
                <p className="text-base-content/80">info@example.com </p>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="card shadow-lg">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className="text-primary size-6 "><Phone/></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Pokljiči me</h4>
                <div className="text-center">
                  <p className="text-base-content/80">+386 55 555 555</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <ContactForm />

      </div>
  )
}
