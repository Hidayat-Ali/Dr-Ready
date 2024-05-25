import {
  CCol,
  CContainer,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CFormSelect,
  CFormSwitch,
  CButton,
} from '@coreui/react'
import React from 'react'

const ApplyDoctor = () => {
  return (
    <div>
      <CContainer>
        <h1 className="text-center">Apply For a Doctor</h1>
        <CForm>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">First Name</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter your Name"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter Your Email"
                aria-describedby="exampleFormControlInputHelpInline"
              />
              <CFormText as="span" id="exampleFormControlInputHelpInline">
                Must be a valid Emai
              </CFormText>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Gender</CFormLabel>
              <CFormSelect aria-label="Default select example">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </CFormSelect>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">DOB</CFormLabel>
              <CFormInput type="date" />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">First Name</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter your Name"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Nationality</CFormLabel>
              <CFormSelect aria-label="Default select example">
                <option value="male">India</option>
                <option value="female">Iran</option>
                <option value="other">Pakistan</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Phone</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter your Phone"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Qualification</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter Your Qualification"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Specialization</CFormLabel>
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                placeholder="Enter your Specialization"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Experience</CFormLabel>
              <CFormInput
                type="number"
                id="exampleFormControlInput1"
                placeholder="Enter Your Experience"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">registrationNumber</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">professionalMemberships</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Department</CFormLabel>
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                placeholder="Enter your Phone"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Designation</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter Your Qualification"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">Shift Timing</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter your Phone"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="exampleFormControlInput1">On Call Availablity</CFormLabel>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Enter Your Qualification"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
          <CFormLabel>Appointment Slots</CFormLabel>

          <CRow>
            <CCol md={3}>
              <CFormLabel>Day</CFormLabel>
              <CFormSelect>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                {/* ... other days */}
              </CFormSelect>
            </CCol>
            <CCol md={3}>
              <CFormLabel>Start Time</CFormLabel>
              <CFormInput type="time" />
            </CCol>
            <CCol md={3}>
              <CFormLabel>End Time</CFormLabel>
              <CFormInput type="time" />
            </CCol>
            <CCol md={3}>
              <CFormSwitch size="sm" className="mx-1" label="Active" />
            </CCol>
          </CRow>
          <CButton color="success" variant="outline" className="mt-3">
            Submit
          </CButton>
        </CForm>
      </CContainer>
    </div>
  )
}
export default ApplyDoctor
