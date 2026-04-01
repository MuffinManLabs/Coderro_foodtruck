import { motion } from 'framer-motion';
import FlameText from './FlameText';
import FoodTruckSVG from './FoodTruckSVG';

export default function Location() {
  return (
    <section id="location" className="relative py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Food truck illustration */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FoodTruckSVG />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <motion.div
            className="rounded-xl overflow-hidden"
            style={{
              border: '2px solid rgba(212, 160, 23, 0.2)',
              boxShadow: '0 0 40px rgba(232, 101, 10, 0.08)',
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Tru Ambitionz location – Lynchburg, Virginia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50742.0!2d-79.1422!3d37.4138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884e8517c3325359%3A0x18b4d4e26b99d560!2sLynchburg%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <FlameText
              text="FIND THE TRUCK"
              as="h2"
              className="font-display text-4xl md:text-6xl mb-8"
              style={{ color: 'var(--gold-primary)', justifyContent: 'flex-start' }}
            />

            <div className="space-y-4">
              {/* Location */}
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ background: 'rgba(26, 26, 26, 0.5)', border: '1px solid rgba(212, 160, 23, 0.08)' }}
                whileHover={{ borderColor: 'rgba(212, 160, 23, 0.2)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(212, 160, 23, 0.1)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>Lynchburg, Virginia</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>We roll to different spots around the city!</p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ background: 'rgba(26, 26, 26, 0.5)', border: '1px solid rgba(212, 160, 23, 0.08)' }}
                whileHover={{ borderColor: 'rgba(212, 160, 23, 0.2)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(212, 160, 23, 0.1)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>Hours &amp; Schedule</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Check our socials for today&rsquo;s hours &amp; location</p>
                </div>
              </motion.div>

              {/* Facebook */}
              <motion.a
                href="https://facebook.com/TruAmbitionz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ background: 'rgba(26, 26, 26, 0.5)', border: '1px solid rgba(212, 160, 23, 0.08)', textDecoration: 'none', display: 'flex' }}
                whileHover={{ borderColor: 'rgba(212, 160, 23, 0.3)', scale: 1.01 }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(212, 160, 23, 0.1)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--gold-primary)">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>Follow Us</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--gold-light)' }}>@TruAmbitionz on Facebook</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Daily location updates &amp; specials!</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="2" className="mt-1 ml-auto shrink-0">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
