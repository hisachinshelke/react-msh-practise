import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["New Delhi", "Mumbai", "Chennai", "Bangloare"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="List of cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <h1>Hello World!!</h1>
        </Alert>
      )}
      <Button
        onClick={() => {
          console.log("Clicked");
          setAlertVisible(true);
        }}
        color="secondary"
      >
        My Button
      </Button>
    </div>
  );
};

export default App;
