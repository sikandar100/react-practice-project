//ES5 syntax
// function Greet() {
//   return <h1>Hello Sikandar via Es5</h1>;
// }

//Es6 Syntax
//const Greet = () =><h1>Hello Sikandar via Es6</h1>

//Props Practice in functional components code Video ref 9 -props
const Greet = (props) => {
  return (
    <div>
      <h1>
        Greetings {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

//named Export (in this case you have to import with the same name and within curly braces while importing)
//export const Greet = () =><h1>Hello Sikandar via Es6</h1>

export default Greet;
