const useSessionValidation = session => {
  const isNotLoggedIn = !session
  const isNotActivated = session && !session.user?.isVerified

  return { isNotLoggedIn, isNotActivated }
}

export default useSessionValidation
