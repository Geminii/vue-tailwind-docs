import Vue from 'vue'
// @ts-ignore
import VueTailwind from 'vue-tailwind'

Vue.use(VueTailwind, {
  TButton: {
    classes: 'bg-orange-500 hover:bg-orange-700 text-white uppercase text-sm py-2 px-4 rounded',
    variants: {
      disabled: 'bg-orange-500 text-white uppercase text-sm py-2 px-4 rounded opacity-50 cursor-not-allowed',
      secondary: 'bg-orange-300 text-orange-500 hover:text-orange-700 uppercase text-sm py-2 px-4 rounded',
      link: 'text-orange-500 hover:text-orange-700 underline uppercase text-sm py-2 px-4',
      disabledLink: 'text-orange-500 underline uppercase text-sm py-2 px-4 opacity-50 cursor-not-allowed'
    }
  },
  TCheckbox: {
    classes: 'form-checkbox h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TRadio: {
    classes: 'form-radio h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TInput: {
    classes: 'form-input border-2 bg-orange-100 text-gray-700',
    variants: {
      error: 'form-input border-2 bg-orange-100 border-red-500 text-red-500'
    }
  },
  TTextarea: {
    classes: 'form-textarea border-2 bg-orange-100 text-gray-700',
    variants: {
      error: 'form-textarea border-2 bg-orange-100 border-red-500 text-red-500'
    }
  },
  TSelect: {
    classes: 'form-select border-2 bg-orange-100 text-gray-700'
  },
  TAlert: {
    classes: {
      wrapper: 'rounded bg-blue-100 p-4 flex text-sm w-full border-l-4 border-blue-700',
      body: 'flex-grow text-blue-700',
      close: 'text-blue-700 hover:text-blue-600',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      error: {
        wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
        body: 'flex-grow text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded',
        closeIcon: 'h-5 w-5 fill-current'
      },
      success: {
        wrapper: 'rounded bg-green-100 p-4 flex text-sm border-l-4 border-green-500',
        body: 'flex-grow text-green-700',
        close: 'text-green-700  hover:text-green-500 hover:bg-green-200 ml-4 rounded',
        closeIcon: 'h-5 w-5 fill-current'
      }
    }
  },
  TInputGroup: {
    classes: {
      wrapper: 'mb-4',
      label: 'block uppercase tracking-wide text-xs font-semibold text-gray-700',
      body: '',
      feedback: 'text-sm text-gray-700',
      description: 'text-sm text-gray-700'
    },
    variants: {
      error: {
        label: 'block uppercase tracking-wide text-xs font-semibold text-red-500',
        feedback: 'text-sm text-red-500'
      }
    }
  },
  TCard: {
    classes: {
      wrapper: 'rounded shadow bg-white',
      body: 'p-10',
      header: 'p-10 border-b text-sm font-semibold uppercase text-gray-700'
    },
    variants: {
      preview: {
        wrapper: '',
        body: '',
        header: 'py-2 border-b font-semibold uppercase text-gray-700'
      },
      demo: {
        wrapper: 'rounded shadow bg-white',
        body: 'p-4',
        header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
        footer: 'p-2 border-t'
      },
      theme: {
        wrapper: 'rounded shadow bg-white',
        body: 'p-4 text-sm leading-snug',
        header: 'p-2 flex border-b text-sm font-semibold uppercase text-gray-800 justify-between items-center',
        footer: 'p-2 border-t'
      }
    }
  },
  TModal: {
    classes: {
      overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black bg-opacity-50',
      wrapper: 'z-50 relative mx-auto my-0 max-w-lg',
      modal: 'bg-white shadow border overflow-hidden relative',
      body: '',
      header: '',
      footer: '',
      close: 'absolute right-0 top-0',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      demo: {
        overlay: 'bg-black bg-opacity-50 w-full p-4 rounded',
        wrapper: 'relative mx-auto my-0 max-w-lg',
        modal: 'rounded shadow bg-white relative',
        body: 'p-4',
        header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
        footer: 'p-2 border-t',
        close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
        closeIcon: 'h-5 w-5 fill-current'
      },
      danger: {
        overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black bg-opacity-50',
        wrapper: 'z-50 relative mx-auto my-0 max-w-lg',
        modal: 'bg-white shadow border overflow-hidden relative',
        body: '',
        header: '',
        footer: '',
        close: 'absolute right-0 top-0',
        closeIcon: 'h-5 w-5 fill-current'
      }
    }
  }
})
