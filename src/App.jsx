import { useState } from "react";
import axios from "axios";

const HOST_URL = 'http://127.0.0.1';
const PORT = ':8000';

function App() {
    const [descripcion, setDescripcion] = useState("");
    const [recomendaciones, setRecomendaciones] = useState([]);

    const obtenerRecomendaciones = async () => {
        try {
            const response = await axios.get(`${ HOST_URL }${ PORT }/recomendar/`, {
                params: { descripcion }
            });
            setRecomendaciones(response.data.recomendaciones);
        } catch (error) {
            console.error("Error obteniendo recomendaciones:", error);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>🎬 Recomendador de Películas</h1>
            <input
                type="text"
                placeholder="Describe una película que te guste..."
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                style={{ width: "300px", padding: "10px", marginRight: "10px" }}
            />
            <button onClick={ obtenerRecomendaciones } style={ { padding: "10px 20px" } }>
                Buscar
            </button>

            <h2>🎥 Películas recomendadas:</h2>
            <ul>
                {recomendaciones.map((pelicula, index) => (
                    <li key={index}>
                        <strong>{pelicula.titulo}</strong>: {pelicula.descripcion}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
