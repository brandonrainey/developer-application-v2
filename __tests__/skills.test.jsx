import { render, fireEvent } from '@testing-library/react'
import Skills from '../components/Skills'

describe('Skills component', () => {
  it('toggles checkbox state and updates applicantInfo when clicked', () => {
    const applicantInfo = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '555-555-5555',
      resume: 'https://example.com/resume.pdf',
      skills: [],
    }

    const setApplicantInfo = jest.fn()

    const { getByTestId } = render(
      <Skills applicantInfo={applicantInfo} setApplicantInfo={setApplicantInfo} />
    )

    // Find the first checkbox and click it
    const checkbox = getByTestId('checkbox-0')
    fireEvent.click(checkbox)

    // Check that the checkbox is now checked
    expect(checkbox.checked).toEqual(true)

    // Check that setApplicantInfo has been called with the correct skills
    expect(setApplicantInfo).toHaveBeenCalledWith({
      ...applicantInfo,
      skills: [
        {
          name: 'HTML',
          icon: '/skillIcons/html-icon.png',
          key: 0,
        },
      ],
    })

    // Click the same checkbox again to uncheck it
    fireEvent.click(checkbox)

    // Check that the checkbox is now unchecked
    expect(checkbox.checked).toEqual(false)

    // Check that setApplicantInfo has been called with the correct skills (empty array)
    expect(setApplicantInfo).toHaveBeenCalledWith({
      ...applicantInfo,
      skills: [],
    })
  })
})