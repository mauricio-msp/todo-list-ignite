import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Header } from '@/components/header'

describe('Header', () => {
  it('should render the component <Header />', () => {
    render(<Header />)

    expect(screen.getByRole('img')).toHaveAttribute('src', '/todo.svg')
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'logo to.do list')
  })
})
