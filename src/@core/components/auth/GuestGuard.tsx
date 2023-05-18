// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children } = props
  
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!router.isReady) {
      return
    }
console.log('user', user);

   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])
  
 

  return <>{children}</>
}

export default GuestGuard
