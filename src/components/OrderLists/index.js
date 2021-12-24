import {Component} from 'react'
import {
  OrderListMainBgContainer,
  OrderListBgContainer,
  OrderListSubBgContainer,
  OrderListName,
  Quantity,
  OrderListContainer,
  OrderListPrice,
  Hr,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundButton,
  OrderNowButton,
} from './StyledComponents'
import ToggleChanges from '../../Context/ToggleChanges'
import OrderListsDetails from '../OrderListsDetails'
import Footer from '../Footer'
import Header from '../Header'

class OrderLists extends Component {
  goToMenu = () => {
    const {history} = this.props
    history.replace('')
  }

  goToOrderSuccessPage = () => {
    const {history} = this.props
    history.replace('/orderSuccess')
    console.log('Hi')
  }

  render() {
    return (
      <ToggleChanges.Consumer>
        {value => {
          const {SavedList} = value
          const CartLength = SavedList.length === 0
          console.log(CartLength)

          return (
            <OrderListMainBgContainer>
              {CartLength ? (
                <OrderListBgContainer>
                  <Header />
                  <NotFoundImage
                    src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1634880623/Tasty%20Kitchen%20Images/cooking_1_t0enyz.png"
                    alt="Cooking"
                  />
                  <NotFoundHeading>No Cart Items Found</NotFoundHeading>
                  <NotFoundDescription>
                    Your cart is empty. Please add something from the menu
                  </NotFoundDescription>
                  <NotFoundButton type="button" onClick={this.goToMenu}>
                    Order Now
                  </NotFoundButton>
                  <Footer />
                </OrderListBgContainer>
              ) : (
                <OrderListBgContainer>
                  <Header />
                  <OrderListSubBgContainer>
                    <OrderListContainer>
                      <OrderListName>Item</OrderListName>
                      <Quantity>Quantity</Quantity>
                      <OrderListPrice>Price</OrderListPrice>
                    </OrderListContainer>
                    {SavedList.map(eachOne => (
                      <OrderListsDetails
                        eachOrderList={eachOne}
                        id={eachOne.id}
                      />
                    ))}
                    <OrderNowButton
                      type="button"
                      onClick={this.goToOrderSuccessPage}
                    >
                      Order Now
                    </OrderNowButton>
                    <Hr />
                  </OrderListSubBgContainer>
                  <Footer />
                </OrderListBgContainer>
              )}
            </OrderListMainBgContainer>
          )
        }}
      </ToggleChanges.Consumer>
    )
  }
}

export default OrderLists
