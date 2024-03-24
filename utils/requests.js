const apiDomian = process.env.NEXT_PUBLIC_API_DOMAIN || null

// Fetch all properties
async function fetchProperty() {
    try {
        // handle the case when the domain is not available yet

      if (!apiDomian) {
        return [];
      }
        
      const res = await fetch(`${apiDomian}/properties`);
  
      if (!res.ok) {
        throw new Error("Failed to fetch data")
      }
  
  
      return res.json();
  
    } catch (error) {
      console.log(error)
      return []
    }
  }

// Fetch single property
async function fetchEachProperty(id) {
  try {
      // handle the case when the domain is not available yet

    if (!apiDomian) {
      return null;
    }
      
    const res = await fetch(`${apiDomian}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }


    return res.json();

  } catch (error) {
    console.log(error)
    return null;
  }
}

export { fetchProperty, fetchEachProperty };