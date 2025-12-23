import { useState, useEffect } from "react";
import { GET, POST, PUT, DELETE } from "../util/CRUD";

const useAlbums = () => {

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAlbums() {
    await GET({ 
      setItems: setAlbums,
      setLoading: setLoading,
      route: 'albums'
    })
  }

  async function addAlbum(newAlbum) {

    await POST({
      newItem: newAlbum,
      route: 'albums'
    })

    await getAlbums()
  }

  async function updateAlbum(updatedAlbum) {
    await PUT({
      updatedItem: updatedAlbum,
      route: "albums",
      setItems: setAlbums
    })

    await getAlbums()
  }

  async function deleteAlbum(albumID) {
    await DELETE({
      itemID: albumID,
      route: 'albums',
      setItems: setAlbums
    })
  }

  useEffect(() => { getAlbums() }, [])

  return { 
    albums,
    addAlbum,
    deleteAlbum,
    updateAlbum,
    loading
  }

};

export default useAlbums;