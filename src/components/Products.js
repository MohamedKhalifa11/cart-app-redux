import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux-toolkit/slices/products-slice";
import { addToCart } from "../redux-toolkit/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Row className="my-5" xs={1} md={2} lg={3} xl={4}>
        {products
          .filter((product) => ![5, 9, 12, 15, 16, 17, 20].includes(product.id))
          .map((product) => (
            <Col key={product.id} className="mb-4">
              <Card style={{ width: "18rem", height: "100%" }}>
                <Card.Img
                  style={{ height: "200px", objectFit: "scale-down" }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-truncate">
                    {product.description}
                  </Card.Text>
                  <Card.Text>{product.price}$</Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Products;
