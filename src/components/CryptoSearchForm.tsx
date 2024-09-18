
export default function CryptoSearchForm() {
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                >
                    <option value=""> -- Seleccione --</option>
                </select>
            </div>
            
            <div className="field">
                <label htmlFor="criptocurrency">Moneda:</label>
                <select
                    name="criptocurrency"
                    id="criptocurrency"
                >
                    <option value=""> -- Seleccione --</option>
                </select>
            </div>

            <input type="submit" value="cotizar"></input>
        </form>
    )
}