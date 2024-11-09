import { useMemo } from "react"
import { useCrytoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result = useCrytoStore((state) => state.result)
    const loading = useCrytoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotizacion</h2>
                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt='Imagen Cryptomoneda'
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>El precio mas alto de dia: <span>{result.HIGHDAY}</span></p>
                            <p>El precio mas bajo de dia: <span>{result.LOWDAY}</span></p>
                            <p>Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Ultima actualizacion: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
}
