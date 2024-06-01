import react from 'react'
import { CTable } from '@coreui/react'
const Appointment = () => {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'patient',
      _props: { scope: 'col' },
    },
    {
      key: 'Doctor',
      label: 'Doctor',
      _props: { scope: 'col' },
    },
    {
      key: 'Department',
      label: 'Department',
      _props: { scope: 'col' },
    },
    {
      key: 'Status',
      label: 'Status',
      _props: { scope: 'col' },
    },
    {
      key: 'Note',
      label: 'Note',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      patient: 'Mark',
      Doctor: 'Otto',
      Department: '@mdo',
      Status: 'update',
      Note: 'Get you all previous patient records',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      patient: 'Mark',
      Doctor: 'Otto',
      Department: '@mdo',
      Status: 'update',
      Note: 'Get you all previous patient records',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      patient: 'Mark',
      Doctor: 'Otto',
      Department: '@mdo',
      Status: 'update',
      Note: 'Get you all previous patient records',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]
  return <CTable columns={columns} items={items} />
}
export default Appointment
