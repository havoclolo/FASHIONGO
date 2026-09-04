import Hero from '../components/Hero'
import Marketplace from '../components/Marketplace'
import CategoryHero1 from '../components/CategoryHero1'
import { JEWELRY_BREADCRUMB } from '../data'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Marketplace/>
      <CategoryHero1/>
      <CategoryHero1
        breadcrumb={JEWELRY_BREADCRUMB}
        heading="Wholesale Jewelry"
        heroImage="https://d2njprwt6vp5kv.cloudfront.net/category/background/bg_category_jewelry.png"
      />
    </div>
  )
}

export default Home;