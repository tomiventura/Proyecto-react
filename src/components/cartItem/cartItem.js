

const CartItem = ({name, price}) => {
    return (
        <div>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    {price}
                </p>
            </section>
        </div>
    )}

    export default CartItem