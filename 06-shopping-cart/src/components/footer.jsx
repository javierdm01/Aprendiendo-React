/* eslint-disable react/prop-types */
import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilter'
import './footer.css'

export function Footer () {
  const { filters } = useFilters()
  const {articles} = useCart()
  return (
    <footer className='footer'>
      <h4>{JSON.stringify(filters)}</h4>
      <h4>{JSON.stringify({articles})}</h4>
    </footer>
  )
}