import "./style.css"
const First = () => {
  const sayHello = () => {
    alert("Hello!");
  };

  return (
    <div>
      <h2>Первый компонент</h2>
      <button onClick={sayHello}>Нажми на меня</button>
    </div>
    
  );
};

export default First;