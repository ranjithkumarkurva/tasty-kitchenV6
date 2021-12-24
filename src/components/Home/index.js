import {HomeBgContainer, HomeMainBgContainer} from './StyledComponents'
import Header from '../Header'
import Product from '../Product'
import Carousel from '../Carousel'
import Footer from '../Footer'

const Home = () => (
  <HomeMainBgContainer>
    <HomeBgContainer>
      <Header />
      <Carousel />
      <Product />
      <Footer />
    </HomeBgContainer>
  </HomeMainBgContainer>
)

export default Home
