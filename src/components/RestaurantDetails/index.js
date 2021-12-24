import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {
  ProductDetailsBgContainer,
  ProductDetailsSubBg,
  ProductName,
  ProductImage,
  ProductCost,
  StarContainer,
  ProductRating,
  AddButton,
  CountButton,
  CountContainer,
  CountNumber,
} from './StyledComponents'
import ToggleChanges from '../../Context/ToggleChanges'

class RestaurantDetails extends Component {
  state = {count: 0}

  render() {
    return (
      <ToggleChanges.Consumer>
        {value => {
          const {addToSavedList, onUpdateCount} = value
          const {eachRestaurantDetails} = this.props
          const {count} = this.state
          const {imageUrl, name, cost} = eachRestaurantDetails
          const addToCart = count === 0

          const onAddToList = () => {
            addToSavedList(eachRestaurantDetails)
            this.setState(prevState => ({
              count: prevState.count + 1,
            }))
            onUpdateCount(count)
          }

          const onIncrement = () => {
            this.setState(prevState => ({
              count: prevState.count + 1,
            }))
            onUpdateCount(count)
          }

          const onDecrement = () => {
            if (count > 0) {
              this.setState(prevState => ({
                count: prevState.count - 1,
              }))
            }
            onUpdateCount(count)
          }

          return (
            <ProductDetailsBgContainer>
              <ProductImage src={imageUrl} alt={name} />
              <ProductDetailsSubBg>
                <ProductName>{name}</ProductName>
                <ProductCost>${cost}.00</ProductCost>
                <StarContainer>
                  <AiFillStar size="20" color="#FFCC00" />
                  <ProductRating>4.4</ProductRating>
                </StarContainer>
                {addToCart ? (
                  <AddButton type="button" onClick={onAddToList}>
                    ADD
                  </AddButton>
                ) : (
                  <CountContainer>
                    <CountButton type="button" onClick={onDecrement}>
                      -
                    </CountButton>
                    <CountNumber>{count}</CountNumber>
                    <CountButton type="button" onClick={onIncrement}>
                      +
                    </CountButton>
                  </CountContainer>
                )}
              </ProductDetailsSubBg>
            </ProductDetailsBgContainer>
          )
        }}
      </ToggleChanges.Consumer>
    )
  }
}

export default RestaurantDetails
