const apiDomian = process.env.NEXT_PUBLIC_API_DOMAIN || null
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


export { fetchProperty };