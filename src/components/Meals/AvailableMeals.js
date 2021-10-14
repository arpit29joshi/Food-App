import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealItem from "./MealsItem.js/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  return (
    <section className="meals">
      <Card>
        <ul>
          {DUMMY_MEALS.map((value) => (
            <MealItem
              key={value.id}
              id={value.id}
              name={value.name}
              price={value.price}
              desc={value.description}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
export default AvailableMeals;
