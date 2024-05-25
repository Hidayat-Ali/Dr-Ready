import {
  CCol,
  CContainer,
  CRow,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'
import react from 'react'

const AvailableDoctor = () => {
  return (
    <CContainer>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        <CCol xs>
          <CCard className="h-100 shadow-lg rounded">
            <CCardImage
              orientation="top"
              src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
              alt="Doctor"
              className="rounded-top"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <CCardBody className="d-flex flex-column justify-content-between">
              <div>
                <CCardTitle className="font-weight-bold mb-2">Dr. John Doe</CCardTitle>
                <CCardText className="mb-3">
                  <span className="text-muted">Specialist in Cardiology</span>
                  <br />
                  Qualification: MD, FACC
                  <br />
                  Department: Cardiology
                </CCardText>
              </div>
              <CButton style={{ background: '#D76F30' }} className="w-100 rounded-pill">
                Book Appointment
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100 shadow-lg rounded">
            <CCardImage
              orientation="top"
              src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
              alt="Doctor"
              className="rounded-top"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <CCardBody className="d-flex flex-column justify-content-between">
              <div>
                <CCardTitle className="font-weight-bold mb-2">Dr. John Doe</CCardTitle>
                <CCardText className="mb-3">
                  <span className="text-muted">Specialist in Cardiology</span>
                  <br />
                  Qualification: MD, FACC
                  <br />
                  Department: Cardiology
                </CCardText>
              </div>
              <CButton style={{ background: '#D76F30' }} className="w-100 rounded-pill">
                Book Appointment
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100 shadow-lg rounded">
            <CCardImage
              orientation="top"
              src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
              alt="Doctor"
              className="rounded-top"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <CCardBody className="d-flex flex-column justify-content-between">
              <div>
                <CCardTitle className="font-weight-bold mb-2">Dr. John Doe</CCardTitle>
                <CCardText className="mb-3">
                  <span className="text-muted">Specialist in Cardiology</span>
                  <br />
                  Qualification: MD, FACC
                  <br />
                  Department: Cardiology
                </CCardText>
              </div>
              <CButton style={{ background: '#D76F30' }} className="w-100 rounded-pill">
                Book Appointment
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100 shadow-lg rounded">
            <CCardImage
              orientation="top"
              src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
              alt="Doctor"
              className="rounded-top"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <CCardBody className="d-flex flex-column justify-content-between">
              <div>
                <CCardTitle className="font-weight-bold mb-2">Dr. John Doe</CCardTitle>
                <CCardText className="mb-3">
                  <span className="text-muted">Specialist in Cardiology</span>
                  <br />
                  Qualification: MD, FACC
                  <br />
                  Department: Cardiology
                </CCardText>
              </div>
              <CButton style={{ background: '#D76F30' }} className="w-100 rounded-pill">
                Book Appointment
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}
export default AvailableDoctor
