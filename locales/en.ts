export default {
  common: {
    filter: {
      createdFrom: 'Date from',
      createdTo: 'Date to',
      all: 'All',
      search: 'Search',
      date: 'Date',
      month: 'Month'
    },
    model: {
      id: '#',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      dateOfBirth: 'Date of birth',
      address: 'Address',
      password: 'Password',
      passwordConfirmation: 'Password confirmation',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      hours: 'Hours',
      minutes: 'Minutes',
      noData: 'There is no data to display',
      expiredDate: 'Expired Date',
      licenseExpiredDate: 'License Expired Date',
      passportExpiredDate: 'Passport Expired Date',
      medicareExpiredDate: 'Medicare Expired Date',
      status: 'Status',
      action: '',
      buildVersion: 'Build version:'
    },
    action: {
      filter: 'Filter',
      view: 'View',
      create: 'Create',
      update: 'Update',
      delete: 'Delete',
      cancel: 'Cancel',
      back: 'Back',
      close: 'Close',
      reset: 'Reset',
      send: 'Send',
      apply: 'Apply',
      save: 'Save',
      new: 'New',
      remind: 'Remind',
      confirm: 'Confirm',
      approve: 'Approve',
      pending: 'Pending',
      reject: 'Reject',
      action: 'Action',
      choose: 'Choose',
      enable: 'Enable',
      disable: 'Disable',
      import: 'Import file',
      export: 'Export file',
      upload: 'Upload',
      download: 'Download',
      continue: 'Continue',
      edit: 'Edit',
      increment: 'Increment',
      add: 'Add',
      change: 'Change',
      skip: 'Skip',
      refresh: 'Refresh',
      search: 'Search',
      postMessage: 'Post A Message',
      account: 'Account',
      post: 'Post'
    },
    notice: {
      success: 'Success',
      failed: 'Failed',
      error: 'Error',
      checkedIn: 'You have already checked in today.',
      checkedOut: 'You have already checked out today.'
    },
    message: {
      pageNotFound: 'Sorry we can not seem to find the page you are looking for.',
      serverError: 'Error! Please try again later.',
      warningTitle: 'Warning',
      confirmTitle: 'Confirm',
      confirmDeletionMessage: 'Are you sure you want to delete?',
      errorType: 'Invalid file type. Only pictures or videos are allowed',
      errorFile: 'File size cannot exceed {_size_}',
      phoneInvalid: 'Phone number is invalid',
      confirmRemindLeave: 'Are you sure you want to remind leave?'
    },
    presets: {
      lastSevenDays: '7 days ago',
      lastThirtyDays: '30 days ago',
      lastThreeMonths: '3 months ago'
    },
    input: {
      more: 'More'
    }
  },
  vuetify: {
    badge: 'Badge',
    close: 'Close',
    dataIterator: {
      noResultsText: 'No matching records found',
      loadingText: 'Loading items...'
    },
    dataTable: {
      itemsPerPageText: 'Rows per page:',
      ariaLabel: {
        sortDescending: 'Sorted descending.',
        sortAscending: 'Sorted ascending.',
        sortNone: 'Not sorted.',
        activateNone: 'Activate to remove sorting.',
        activateDescending: 'Activate to sort descending.',
        activateAscending: 'Activate to sort ascending.'
      },
      sortBy: 'Sort by'
    },
    dataFooter: {
      itemsPerPageText: 'Items per page:',
      itemsPerPageAll: 'All',
      nextPage: 'Next page',
      prevPage: 'Previous page',
      firstPage: 'First page',
      lastPage: 'Last page',
      pageText: '{0}-{1} of {2}'
    },
    datePicker: {
      itemsSelected: '{0} selected',
      nextMonthAriaLabel: 'Next month',
      nextYearAriaLabel: 'Next year',
      prevMonthAriaLabel: 'Previous month',
      prevYearAriaLabel: 'Previous year'
    },
    noDataText: 'No data available',
    carousel: {
      prev: 'Previous visual',
      next: 'Next visual',
      ariaLabel: {
        delimiter: 'Carousel slide {0} of {1}'
      }
    },
    calendar: {
      moreEvents: '{0} more'
    },
    fileInput: {
      counter: '{0} files',
      counterSize: '{0} files ({1} in total)'
    },
    timePicker: {
      am: 'AM',
      pm: 'PM'
    },
    pagination: {
      ariaLabel: {
        wrapper: 'Pagination Navigation',
        next: 'Next page',
        previous: 'Previous page',
        page: 'Goto Page {0}',
        currentPage: 'Current Page, Page {0}'
      }
    },
    rating: {
      ariaLabel: {
        icon: 'Rating {0} of {1}'
      }
    }
  }
}
