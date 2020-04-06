import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import Router from '../../routes'

describe('Tests for Planets page', () => {
    it('Validation elements on screen', async () => {
        const { container, getByTestId } = render(
            <Router/>
        )
        
        const img = getByTestId('img')
        const btn = getByTestId('btn-home')

        fireEvent.click(btn)
        console.log(container.innerHTML)
    })
})