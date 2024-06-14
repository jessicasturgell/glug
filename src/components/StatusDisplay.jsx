export const StatusDisplay = ({ health, fullness, happiness, energy }) => {
    return (
        <>
        <div>
            <p>Health: {health}</p>
            <p>Fullness: {fullness}</p>
            <p>Happiness: {happiness}</p>
        </div>
        </>
    )
}