import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../components/layouts/footer'

describe('Rendering', () => {
  it('Should render text', () => {
    render(<Footer />)
    expect(screen.getByText('© 2022 Yusaku Washio')).toBeInTheDocument()
  })
})