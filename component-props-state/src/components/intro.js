

function Intro(props) {
    
  console.log('param kiriman' , props.name);
  return (
    <div>
      <h1>Hello Guys</h1>
      <p>Saya Adalah : {props.name}</p>
    </div>
  );
}

export default Intro;
