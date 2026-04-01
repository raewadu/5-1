const Third = () => {
    const ChangeColor = ()=>{
        document.body.style.backgroundColor = '#650a0a';
    }


    return <div>
      <h2>Третий компонент</h2>
      <button onClick={ChangeColor}>Нажми на меня</button>
    </div>
};

export default Third;