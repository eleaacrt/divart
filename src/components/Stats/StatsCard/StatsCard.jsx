export const StatsCard = ({title, children}) => {
    return (
        <>
            <div className="stats-card">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </>
    )
}