import Card from "react-bootstrap/Card";

export default function ProductCard({ product }) {
  return (
    <Card className="border-0 shadow-sm h-100 d-flex flex-column">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="flex-grow-1">
        <Card.Title as={"h5"}>{product.title}</Card.Title>
        <Card.Text className="text-truncate">{product.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>{product.type}</Card.Text>
      </Card.Footer>
    </Card>
  );
}
