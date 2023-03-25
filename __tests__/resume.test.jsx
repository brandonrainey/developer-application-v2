import { render, screen, fireEvent } from '@testing-library/react'
import Resume from '../components/Resume'

describe('Resume component', () => {
  test('displays resume name after uploading file', () => {
    const applicantInfo = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      resume: '',
      skills: [{ name: 'React', icon: 'react.png' }],
    }
    const setApplicantInfo = jest.fn()

    render(<Resume applicantInfo={applicantInfo} setApplicantInfo={setApplicantInfo} />)

    const input = screen.getByTestId('resume input')
    const resumeName = screen.getByTestId('resume name')

    fireEvent.change(input, { target: { files: [new File(['resume.pdf'], 'resume.pdf')] } })

    expect(resumeName.textContent).toBe('resume.pdf')
  })
})