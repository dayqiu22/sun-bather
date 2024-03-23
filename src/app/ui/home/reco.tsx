export default function Reco(props) {
    return (
        <>
            <p>`Best Time: ${props.time}`</p>
            <p>Conditions:</p>
            <p>`${props.isSunny}`</p>
            <p>`Temperature: ${props.temperature}`</p>
            <p>`Wind: ${props.wind}`</p>
        </>
    );
}