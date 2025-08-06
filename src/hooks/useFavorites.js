import { useState, useEffect } from 'react'

export default function useFavorites() {
  const [favorites, setFavorites] = useState([])

  // Cargar favoritos al iniciar
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('turisgo-favorites')) || []
    setFavorites(saved)
  }, [])

  // Guardar en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('turisgo-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (place) => {
    setFavorites(prev => 
      prev.some(p => p.id === place.id) 
        ? prev.filter(p => p.id !== place.id)
        : [...prev, place]
    )
  }

  return { favorites, toggleFavorite }
}
