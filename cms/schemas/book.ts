// schemas/book.ts
import {BookIcon} from '@sanity/icons'

export default {
  name: 'book',
  type: 'document',
  title: 'Books',
  icon: BookIcon,
  groups: [
    {
      name: 'bookDetails',
      title: 'Book Details',
    },
    {
      name: 'authorDetails',
      title: 'Author Details',
    },
    {
      name: 'links',
      title: 'Links'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Book Title',
      group: 'bookDetails'
    },
    {
      name: 'authorFn',
      type: 'string',
      title: 'Author First Name',
      group: 'authorDetails'
    },
    {
      name: 'authorLn',
      type: 'string',
      title: 'Author Last Name',
      group: 'authorDetails'
    },
    {
      name: 'finished',
      type: 'boolean',
      title: 'Finished?',
    },
    {
      name: 'dateRead',
      type: 'datetime',
      title: 'Date Read',
    },
    {
      name: 'audiobook',
      type: 'boolean',
      title: 'Audiobook?',
    },
    {
      name: 'publisher',
      type: 'string',
      title: 'Publisher',
      group: 'bookDetails'
    },
    {
      name: 'coverImage',
      type: 'url',
      title: 'Cover Image',
      group: ['bookDetails', 'links']
    },
    {
      name: 'isbn',
      type: 'string',
      title: 'ISBN',
      group: 'bookDetails'
    },
    {
      name: 'pages',
      type: 'number',
      title: 'Pages',
      group: 'bookDetails'
    },
    {
      name: 'yearPub',
      type: 'datetime',
      title: 'Year Published',
      group: 'bookDetails'
    },
    {
      name: 'buyLink',
      type: 'url',
      title: 'Buy Link',
      group: ['bookDetails', 'links']
    },
  ],
}
