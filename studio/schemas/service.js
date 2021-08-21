import { MdPeople } from 'react-icons/md'

export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: MdPeople,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  liveEdit: true
}
