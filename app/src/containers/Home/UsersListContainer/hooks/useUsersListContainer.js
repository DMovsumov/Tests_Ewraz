import {useDispatch, useSelector} from "react-redux";
import {useEffect, useCallback, useState} from "react";
import {getData, getUser, setLoading} from "../../../../store/actions/users";

const useUsersListContainer = () => {
    const { allUsers } = useSelector(({users}) => users);
    const dispatch = useDispatch();
    const [indexUser, setIndexUser] = useState(0)

    useEffect(() => {
        dispatch(getData())
    }, [])

    useEffect(() => {
        const user = allUsers.find((item, index) => index === indexUser)

        if (user) {
            loadUser(user)
        }
    }, [indexUser])

    const loadUser = async (user) => {
        await dispatch(setLoading(true))
        await dispatch(getUser(user.id))
        await dispatch(setLoading(false))
    }

    const handleClick = useCallback((index) => {
        setIndexUser(index)
    }, [])

    const buttonHandler = useCallback((type) => {
        type === 'next' ? setIndexUser(prev => prev + 1) : setIndexUser(prev => prev - 1)
    }, [])

    return {
        allUsers,
        handleClick,
        indexUser,
        buttonHandler
    }
}

export default useUsersListContainer;
