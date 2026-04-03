import ContactInfo from "@/components/Contact/ContactInfo";
// import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-10 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <ContactInfo />
        {/* <ContactForm /> */}

      </div>
    </section>
  );
}