import { StatsCard } from './StatsCard/StatsCard'

export const Stats = ({ reservations }) => {
    let somme = 0;
    const date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let formattedDate = year + "-" + month + "-" + day;

    let totalVisiteurs = 0;
    let allDates = [];


    return (
        <>
            <div className="stats">
                <StatsCard
                    reservations={reservations}
                    title="Nombre de réservations"
                >
                    <p>
                        {
                            reservations.length
                        }
                    </p>
                </StatsCard>
                <StatsCard
                    reservations={reservations}
                    title="Visiteurs / Jours (moyenne)">
                    <p>
                        {
                            reservations.map((reservation) => {
                                if (!allDates.includes(reservation.date)) {
                                    allDates.push(reservation.date);
                                    totalVisiteurs += parseInt(reservation.amount);
                                } else {
                                    totalVisiteurs += parseInt(reservation.amount);
                                }
                            })
                        }
                        {Math.round(totalVisiteurs / allDates.length)}
                    </p>
                </StatsCard>
                <StatsCard
                    reservations={reservations}
                    title="Visiteurs aujourd'hui">
                    <p>
                        {
                            reservations.map((reservation) => {
                                if (reservation.date === formattedDate) {
                                    somme += parseInt(reservation.amount);
                                }
                            })
                        }
                        {somme}
                    </p>

                </StatsCard>
            </div>
        </>
    )
}