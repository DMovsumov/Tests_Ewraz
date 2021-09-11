import {useSelector} from "react-redux";
import {useMemo} from "react";
import {declination} from "../../../../helpers/declination";

const useActiveCardContainer = () => {
    const { activeUser, status: { loading } } = useSelector(({users}) => users);
    const { dateEmployment, dateBirth } = activeUser;
    console.log('loading', loading)

    const yearsTitles = ['год', 'года', 'лет']
    const monthTitles = ['месяц', 'месяца', 'месяцев']
    const dayTitles = ['день', 'дня', 'дней']

    const experience = useMemo(() => {
        const date1 = new Date()
        const date2 = new Date(dateEmployment)
        const result = new Date(date1.getTime() - date2.getTime())
        return `${result.getFullYear() - 1970} ${declination(result.getFullYear() - 1970, yearsTitles)} ${result.getUTCMonth()} ${declination(result.getUTCMonth(), monthTitles)} ${result.getUTCDay()} ${declination(result.getUTCDay(), dayTitles)}`
    }, [dateEmployment])

    const age = useMemo(() => {
        const date1 = new Date()
        const date2 = new Date(dateBirth)
        const result = new Date(date1.getTime() - date2.getTime())
        return `${result.getFullYear() - 1970} ${declination(result.getFullYear() - 1970, yearsTitles)}`
    }, [dateBirth])

    return {
        activeUser: {
            ...activeUser,
            experience,
            age
        },
        loading
    }
}

export default useActiveCardContainer;
