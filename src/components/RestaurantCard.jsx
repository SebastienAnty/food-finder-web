import { Card, Button } from "react-bootstrap";

export default function RestaurantCard({ rest }) {
  return (
    <>
    <form>
        <Card style={{ width: "18rem", margin: 8,
        alignSelf: "center",
        borderRadius: 8,
        borderColor: "#807060",
        borderWidth: 1,
        width: 320,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between"}}>
        <Card.Img style={{ 
            width: 318, 
            height: 200, 
            borderTopRightRadius: 8,
            borderTopLeftRadius: 9,
            }} variant="top" src={rest.photoUrl} />
        <Card.Body>
            <Card.Title style={{
            fontSize: 28,
            fontWeight: "600",
            padding: 4,
            }}>{rest.name}</Card.Title>
            <Card.Text style={{
            fontSize: 16,
            padding: 4,
            fontWeight: "revert",
            }}>{rest.address}</Card.Text>
            <Button variant="primary">Show Details</Button>
            </Card.Body>
        </Card>
    </form>
    </>
  );
}
