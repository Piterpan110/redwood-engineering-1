import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer className="section-dark border-t border-border py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
            Ready to Build Something Bigger?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-muted-foreground leading-relaxed">
            Reach out directly. No forms, no gatekeepers — just a conversation with the people building Redwood.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:vladyslavshevchenko005@gmail.com"
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} className="text-primary" />
              vladyslavshevchenko005@gmail.com
            </motion.a>
            <motion.a
              href="https://wa.me/12602375999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} className="text-primary" />
              +1 (260) 237-5999
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-border pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-display text-xl font-semibold text-foreground mb-2">
            REDWOOD <span className="gradient-text">ENGINEERING LABS</span>
          </p>
          <p className="text-sm italic text-primary">"Your win is our win."</p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Redwood Engineering Labs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
