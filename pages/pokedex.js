import React, { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

export default function useEffectPage() {

    const handlescroll = () => {

        setItems([])

    }

    const [pokedex,setPokedex] = useState("0");
    const [limite,setLimite] = useState("1");

    const Dinamismo = dynamic(() => import('../components/dinamic/useEffectComp'), {
        ssr: false,
      });
    let p= pokedex ;

    useEffect(()=>{

        pokedex -= 1;
        window.addEventListener("click", eventotoguapo);

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${pokedex}`)
            .then(response => response.json())
            .then(json => setItems(json))   
}, [limite , pokedex]);

    const [items,setItems] = useState([]);

    const eventotoguapo = () => {

        console.log("Crack, has pillado el easter egg 😎🤙")

    }

    const listaPokemon = items["results"]
    let muestraPokemon = "";

    for (const i in listaPokemon){
        muestraPokemon = muestraPokemon + listaPokemon[i]["name"] + " ";

    }

    
    //UseRef

    const [contador, setContador] = useState(0);
    const nombre = useRef("Karl de Kanto");
    const cuenta = useRef(0);
    const pokimon = useRef("Charizard");

    console.log(pokimon.current);

    useEffect(() =>{

        if(cuenta.current === 0){
            cuenta.current = cuenta.current +1;
            return;
        }

        console.log(pokimon.current.innerText = "Flygon");

        console.log(`Se suma ${contador}`)
    }, [contador]);


    const cambiarNombre = () =>{

        nombre.current = "Enric";
        console.log(`Ahora eres ${nombre.current}`);
        
    } 

    //UseMemo

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [numero3, setNumero3] = useState(0);

    const sumarvalor1 = () =>{

        setNumero1(numero1 +1)

    }

    const sumarvalor2 = () =>{

        setNumero2(numero2 +1)

    }

    const sumarvalor3 = () =>{

        setNumero3(numero3 +1)

    }

    let Memaso = useMemo(() =>{

        let resultado = numero1 + numero2 + numero3;

        let nota = resultado / 3;
        return nota;

    }, [numero1, numero2, numero3]);

    
return (

    <>

        <div className="text-center">

            <form className="w-80 m-auto text-center bg-red-700 py-4 rounded-xl mt-10">
                <h1 className="text-yellow-400 font-bold text-5xl font-serif">POKEDEX</h1>
                <input className="rounded-xl mt-4 text-center" type="text" placeholder="Numero Pokedex" name="numeroPokedex" onChange={event => setPokedex(event.target.value)}></input><br />
                <input className="rounded-xl mt-1 text-center" type="text" placeholder="Limite" name="limite" onChange={event => setLimite(event.target.value)}></input>

            </form>

        </div>

        <div className="w-60 m-auto text-center bg-blue-700 py-4 rounded-xl mt-10 text-green-600">
            <h1>Nombre: {nombre.current}</h1>
            <button ref={pokimon} onClick={(boton) => setContador(contador + 1)}>Contador y Refrescador = {contador}</button>
        </div>

        <div className="w-60 m-auto text-center bg-green-300 py-4 rounded-xl mt-10">

            <button onClick={cambiarNombre}>Me quiero Cambiar de Nombre</button>

        </div>

        <div className="text-center">

            <p className="text-blue-600 font-bold">{muestraPokemon}</p>

        </div>

        <div className="text-center mt-20">
        <a href="http://localhost:3000/" className="hover:text-blue-600 focus:text-blue-600">
          <h3 className="text-2xl font-bold">Pagina de El de Kanto 🤙</h3>
        </a>
        </div>

        <div className="w-60 m-auto text-center bg-yellow-400 py-4 rounded-xl mt-10 text-pink-600">

            <h1>Evaluator 3000</h1>
            <button onClick={sumarvalor1}>Puntos de Practica = {numero1}</button><br />
            <button onClick={sumarvalor2}>Puntos de Teoria = {numero2}</button><br />
            <button onClick={sumarvalor3}>Puntos de Actitud = {numero3}</button><br />
            <p>La Nota que voy a sacar = {Memaso}</p>

        </div>

      <Dinamismo />

    </>

    

)

}