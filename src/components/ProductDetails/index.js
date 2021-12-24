import {AiFillStar} from 'react-icons/ai'
import {
  ProductDetailsBgContainer,
  ProductDetailsSubBg,
  ProductName,
  ProductImage,
  ProductType,
  StarContainer,
  ProductRating,
  Linked,
} from './StyledComponents'

const ProductDetails = props => {
  const {eachProductDetails} = props
  const {rating, menuType, id, imageUrl, name} = eachProductDetails

  return (
    <Linked to={`/${id}`}>
      <ProductDetailsBgContainer>
        <ProductImage src={imageUrl} alt={name} />
        <ProductDetailsSubBg>
          <ProductName>{name}</ProductName>
          <ProductType>{menuType}</ProductType>
          <StarContainer>
            <AiFillStar size="20" color="#FFCC00" />
            <ProductRating>{rating}</ProductRating>
          </StarContainer>
        </ProductDetailsSubBg>
      </ProductDetailsBgContainer>
    </Linked>
  )
}

export default ProductDetails
