import {
  OrderListContainer,
  OrderListImage,
  OrderListSubContainer,
  OrderListName,
  OrderListPrice,
  OrderListSm,
  OrderListBg,
  OrderListSubContainerSm,
  CountButton,
  CountContainer,
  CountNumber,
} from './StyledComponents'
import ToggleChanges from '../../Context/ToggleChanges'

const OrderListsDetails = props => (
  <ToggleChanges.Consumer>
    {value => {
      const {count} = value
      const {eachOrderList} = props
      const {imageUrl, name, cost} = eachOrderList

      return (
        <OrderListBg>
          <OrderListContainer>
            <OrderListSubContainer>
              <OrderListImage src={imageUrl} alt="orderImage" />
              <OrderListName>{name}</OrderListName>
            </OrderListSubContainer>
            <CountContainer>
              <CountButton type="button">-</CountButton>
              <CountNumber>{count}</CountNumber>
              <CountButton type="button">+</CountButton>
            </CountContainer>
            <OrderListPrice>${cost * (count + 1)}.00</OrderListPrice>
          </OrderListContainer>

          <OrderListSubContainerSm>
            <OrderListImage src={imageUrl} alt="orderImage" />
            <OrderListSm>
              <OrderListName>{name}</OrderListName>
              <div className="bg-container">
                <button className="buttons" type="button">
                  -
                </button>
                <h1 className="number">{count}</h1>
                <button className="buttons" type="button">
                  +
                </button>
              </div>
              <OrderListPrice>${cost * (count + 1)}.00</OrderListPrice>
            </OrderListSm>
          </OrderListSubContainerSm>
        </OrderListBg>
      )
    }}
  </ToggleChanges.Consumer>
)

export default OrderListsDetails
