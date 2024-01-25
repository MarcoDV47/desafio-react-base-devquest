import "./p.css"
export const P = (props) => {

    const upCsText = props.text.toUpperCase();

    return (
        <div>
            <h2>Parágrafo Colorido</h2>
            <p className="p" style={{ color: props.userColor }}>
                {upCsText}
            </p>
        </div>
    )
}
P.defaultProps = {
    text: "Isto é um parágrafo",
    userColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`
}