// CRUD.jsx
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function GET({
      setItems,
      setLoading,
      route,
}) {
      setLoading(true);
      try {
            const response = await axios.get(`${API_URL}/${route}`);

            const returnedData = response.data?.data;

            if (route==="events") {
                  setItems(Array.isArray(returnedData) ? returnedData : []);
            } else {
                  setItems(response.data);
            }
            
            console.log("GET/ \n", response.data);
            
      } catch (error) {
            console.error("Error fetching:", error);
      } finally {
            setLoading(false);
      }

}


export async function POST({
      newItem,
      route
}) {
      try {
        const response = await axios.post(`${API_URL}/${route}`, newItem);
        console.log("POST/ \n", response.data);
  
      } catch (error) {
        console.error("Error adding:", error);
      }
    }


export async function PUT({
      updatedItem,
      route
}) {
      const { _id, ...restOfItem } = updatedItem;

      if (!_id) {
            console.error("No _id provided; Cannot update.");
            return;
      }

      try {
            const response = await axios.put(`${API_URL}/${route}/${_id}`, restOfItem);
            console.log("PUT/ \n", response.data);

            

      } catch (error) {
            console.error("Error updating:", error);
      }
}

export async function DELETE({
      itemID,
      route,
      setItems
}) {
      try {
        await axios.delete(`${API_URL}/${route}/${itemID}`);
        console.log("Deleted:", itemID);
  
        // Optimistically remove from local state
        setItems((prevItems) =>
            prevItems.filter((item) => item._id !== itemID)
        );
      } catch (error) {
        console.error("Error deleting:", error);
      }
}
  