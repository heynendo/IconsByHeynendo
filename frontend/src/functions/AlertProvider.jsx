import { createContext, useContext, useState, useCallback } from 'react'
import Alert from '../components/Alert'

const AlertContext = createContext()

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState({
        isOpen: false,
        content: '',
        openTime: 3000
    })

    const showAlert = useCallback((content, openTime = 3000) => {
        setAlert({
            isOpen: true,
            content,
            openTime
        })
    }, [])

    const closeAlert = useCallback(() => {
        setAlert(prev => ({ ...prev, isOpen: false }))
    }, [])

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}

            {/* Global alert render */}
            <Alert
                content={alert.content}
                openTime={alert.openTime}
                isOpen={alert.isOpen}
                onClose={closeAlert}
            />
        </AlertContext.Provider>
    )
}

export function useAlert() {
    return useContext(AlertContext)
}
