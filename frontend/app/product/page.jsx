

// import ProductSection from "../../components/Product/ProductSection";
import FAQ from "@/components/Product/Faq";


export default function ProductPage() {
  return (
    <section className="py-10 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <FAQ/>
        {/* <ProductSection/> */}
        

      </div>
    </section>
  );
}