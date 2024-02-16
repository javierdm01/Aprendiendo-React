/* eslint-disable react/prop-types */
import { useFilters } from '../hooks/useFilter'
import './footer.css'

export function Footer () {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      <h4>{JSON.stringify(filters)}</h4>
    </footer>
  )
}