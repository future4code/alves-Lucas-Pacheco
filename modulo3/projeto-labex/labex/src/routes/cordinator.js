 export const goToListTripsPage = (navigate) => {
    navigate("/ListTrips")
  }

  export const goToHomePage = (navigate) => {
    navigate("/")
  }

  export const goToPreviousPage = (navigate) => {
    navigate(-1)
  }

  export const goToLoginPage = (navigate) => {
   navigate("/Login/")
  }

  export const goToAdmHome = (navigate) => {
    navigate("/AdminHome/")
  }

  export const goToCreateTripPage = (navigate) => {
    navigate("/CreateTrip/")
  }

  export const goToDetailsTrip = (navigate, id ) => {
    navigate(`/TripDetails/${id}`)
  }

  export const goToAplicationForm = (navigate) => {
    navigate("/AplicationForm/")
  }