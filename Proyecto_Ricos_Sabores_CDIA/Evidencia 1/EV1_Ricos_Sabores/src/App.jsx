import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import card from "./components/card";
function App() {

 // Se agrega estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar carga

  // Incorporamos useEffect para hacer la petición al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Título principal */}
      <h1 className="text-3xl text-gray-800 font-bold text-center mb-8">
        Ricos Sabores
      </h1>

      {/* Mensaje de carga */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 animate-pulse">Cargando productos...</p>
        </div>
      ) : (
        // Listado de productos
        <div className="mt-6">
          <h2 className="text-2xl text-blue-500 font-semibold mb-4 text-left">
            Listado de Productos Disponibles:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <card key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Texto adicional */}
      <p className="text-center text-gray-400 mt-10 text-sm">

      Ricos Sabores-Reposteria Artesanal  
      </p>
    </div>
  );
}

export default App;