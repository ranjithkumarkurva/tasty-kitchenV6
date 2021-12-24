import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import RestaurantDetails from '../RestaurantDetails'
import Header from '../Header'
import {
  ProductBgContainer,
  ProductContainer,
  RestaurantDetailBg,
  ProductMainBgContainer,
  RestaurantDetailsViewBg,
  RestaurantDetailsViewSubBg,
  RestaurantDetailsViewImage,
  RestaurantName,
  RestaurantCuisine,
  StarContainer,
  ProductRating,
  StarMainContainer,
  PipeLine,
  ProductSubBgContainer,
} from './StyledComponents'
import Footer from '../Footer'

class Restaurant extends Component {
  state = {
    productDetailData: [],
    similarProductsData: [],
  }

  componentDidMount() {
    this.getProductData()
  }

  getProductData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedDetailData = {
        name: data.name,
        rating: data.rating,
        imageUrl: data.image_url,
        cuisine: data.cuisine,
        location: data.location,
        reviewsCount: data.reviews_count,
        costForTwo: data.cost_for_two,
      }

      const updatedSimilarData = data.food_items.map(eachProduct => ({
        cost: eachProduct.cost,
        id: eachProduct.id,
        imageUrl: eachProduct.image_url,
        name: eachProduct.name,
      }))

      this.setState({
        productDetailData: updatedDetailData,
        similarProductsData: updatedSimilarData,
      })
    }
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </div>
  )

  renderDetailView = () => {
    const {productDetailData} = this.state

    const {
      rating,
      imageUrl,
      name,
      cuisine,
      location,
      reviewsCount,
      costForTwo,
    } = productDetailData

    return (
      <RestaurantDetailBg>
        <RestaurantDetailsViewBg>
          <RestaurantDetailsViewImage src={imageUrl} alt="Food" />
          <RestaurantDetailsViewSubBg>
            <RestaurantName>{name}</RestaurantName>
            <RestaurantCuisine>{cuisine}</RestaurantCuisine>
            <RestaurantCuisine>{location}</RestaurantCuisine>
            <StarContainer>
              <StarMainContainer>
                <StarContainer>
                  <AiFillStar size="20" color="white" />
                  <ProductRating>{rating}</ProductRating>
                </StarContainer>
                <ProductRating>{reviewsCount}+Ratings</ProductRating>
              </StarMainContainer>
              <PipeLine />
              <StarMainContainer>
                <ProductRating>{costForTwo}</ProductRating>
                <ProductRating>Cost of two</ProductRating>
              </StarMainContainer>
            </StarContainer>
          </RestaurantDetailsViewSubBg>
        </RestaurantDetailsViewBg>
      </RestaurantDetailBg>
    )
  }

  render() {
    const {similarProductsData} = this.state

    return (
      <ProductMainBgContainer>
        <ProductBgContainer>
          <Header />
          <ProductSubBgContainer>
            {this.renderDetailView()}
            <ProductContainer>
              {similarProductsData.map(product => (
                <RestaurantDetails
                  eachRestaurantDetails={product}
                  key={product.id}
                />
              ))}
            </ProductContainer>
            <Footer />
          </ProductSubBgContainer>
        </ProductBgContainer>
      </ProductMainBgContainer>
    )
  }
}

export default Restaurant
