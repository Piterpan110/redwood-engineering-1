import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/jacekgorski118/30min";

const BookMeeting = () => {
  return (
    <section id="book" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Book a Meeting
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            Let's Talk
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ready to learn more? Pick a time that works for you and we'll walk you through everything — no pressure, no commitment.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow inline-block rounded-lg px-10 py-4 text-lg font-semibold text-primary-foreground"
          >
            Book a Meeting
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookMeeting;
