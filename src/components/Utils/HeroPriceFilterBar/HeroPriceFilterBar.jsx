const HeroPriceFilterBar = () => {
  return (
    <div className="price-filter">
        <section>
            <select name="" id="">
                <option value="">Location</option>
            </select>
            <h2>Banglore</h2>
        </section>
        <section>
            <select name="" id="">
                <option value="">Property Condition</option>
            </select>
            <h2>New</h2>
        </section>
        <section>
            <select name="" id="">
                <option value="">Property Type</option>
            </select>
            <h2>Flat</h2>
        </section>
        <section>
            <select name="" id="">
                <option value="">Minium Price</option>
            </select>
            <h2>$32,000</h2>
        </section>
        <section>
            <select name="" id="">
                <option value="">Maximun Price</option>
            </select>
            <h2>$820,000</h2>
        </section>
        <button className="btn contained">SEARCH</button>
    </div>
  )
}

export default HeroPriceFilterBar