import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ProgressButton from '../components/ProgressButton'

describe('ProgressButton component', () => {
  const mockSetProgress = jest.fn()
  const mockSetApplicantInfo = jest.fn()

  it('should enable button and update progress when clicked', () => {
    const { getByText } = render(
      <ProgressButton
        progress={3}
        setProgress={mockSetProgress}
        applicantInfo={{ name: 'John Doe', email: 'john.doe@example.com', phone: '555-555-5555', resume: '', skills: [] }}
        setApplicantInfo={mockSetApplicantInfo}
        isEmpty={false}
      />
    )

    const button = getByText('Next Step')
    expect(button.disabled).toBe(false)

    fireEvent.click(button)

    expect(mockSetProgress).toHaveBeenCalledWith(4)
  })

  it('should disable button when progress is 4 and isEmpty is true', () => {
    const { getByText } = render(
      <ProgressButton
        progress={4}
        setProgress={mockSetProgress}
        applicantInfo={{ name: '', email: '', phone: '', resume: '', skills: [] }}
        setApplicantInfo={mockSetApplicantInfo}
        isEmpty={true}
      />
    )

    const button = getByText('Finish')
    expect(button.disabled).toBe(true)
  })
})