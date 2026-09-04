import CategoryHero1 from '../components/CategoryHero1'
import SubcategoryStrip1 from '../components/SubcategoryStrip1'
import ProductSection1 from '../components/ProductSection1'
import VendorsSection1 from '../components/VendorsSection1'
import FAQSection1 from '../components/FAQSection1'
import JoinCTA1 from '../components/JoinCTA1'
import {
  JEWELRY_BREADCRUMB,
  JEWELRY_FAQS,
  JEWELRY_PRODUCTS,
  JEWELRY_SUBCATEGORIES,
  JEWELRY_VENDORS,
} from '../data'

const Jewelry = () => {
  return (
    <div>
      <CategoryHero1
        breadcrumb={JEWELRY_BREADCRUMB}
        heading="Wholesale Jewelry"
        heroImage="https://d2njprwt6vp5kv.cloudfront.net/category/background/bg_category_jewelry.png"
      />
      <SubcategoryStrip1 categories={JEWELRY_SUBCATEGORIES} portrait />
      <ProductSection1 products={JEWELRY_PRODUCTS} shippingLabel="FG Free Shipping $100+" />
      <VendorsSection1 vendors={JEWELRY_VENDORS} />
      <FAQSection1 faqs={JEWELRY_FAQS} />
      <JoinCTA1 />
    </div>
  )
}

export default Jewelry