import "./button.css"
export const Button = ({ label }) => {
    return (
        <button className="button" onClick={() => alert(`A label deste botão é ${label}`)}>{label}</button>
    )
}
Button.defaultProps = {
    label: "Clique Aqui"
}