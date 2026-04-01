const Second = () => {
    const HelloConsole = ()=>{
        console.log('Hello!');
        
    }


    return <div>
      <h2>Второй компонент</h2>
      <button onClick={HelloConsole}>Нажми на меня</button>
    </div>
};

export default Second;