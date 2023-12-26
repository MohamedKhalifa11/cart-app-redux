import { Container, Table, Button, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clear, deleteFromCart } from "../redux-toolkit/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);
  return (
    <Container>
      <h2>Cart Page</h2>
      <Button
        variant="primary"
        className="my-4"
        onClick={() => dispatch(clear())}
      >
        Clear Cart
      </Button>
      <h5>Total Price from your cart is: {totalPrice}$</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "75px",
                    objectFit: "scale-down",
                  }}
                />
              </td>
              <td>{product.price}$</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
