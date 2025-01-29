import { useState, useEffect } from "react";
import { GET, POST, PUT, DELETE } from "../util/CRUD";

const useNewsletters = () => {

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getNewsletters() {

    await GET({ 
      setItems: setNewsletters,
      setLoading: setLoading,
      route: 'newsletters'
    })
    
  }

  async function addNewsletter(newNewsletter) {

    await POST({
      newItem: newNewsletter,
      route: 'newsletters'
    })

    await getNewsletters()
  }

  async function updateNewsletter(updatedNewsletter) {
    await PUT({
      updatedItem: updatedNewsletter,
      route: "newsletters",
      setItems: setNewsletters
    })
  }

  async function deleteNewsletter(newsletterID) {
    await DELETE({
      itemID: newsletterID,
      route: 'newsletters',
      setItems: setNewsletters
    })
  }

  useEffect(() => { getNewsletters() }, [])

  return { 
    newsletters,
    addNewsletter,
    deleteNewsletter,
    updateNewsletter,
    loading
  }

};

export default useNewsletters;