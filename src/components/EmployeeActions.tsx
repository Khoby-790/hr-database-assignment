import { Modal, Input, Select, Footer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { Fragment } from 'react'
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

type Props = {}

const EmployeeActions = (props: Props) => {
    const [opened, { close, open }] = useDisclosure(false);
    const [openedDelete, { toggle, close: closeDelete }] = useDisclosure(false);
    return (
        <div className='space-x-4'>
            <button onClick={toggle} className="text-red-600 hover:text-red-900">Remove</button>
            <button onClick={open} className="text-indigo-600 hover:text-indigo-900">Edit</button>

            <Dialog opened={openedDelete} withCloseButton onClose={closeDelete} size="lg" radius="md">
                <div className="relative transform overflow-hidden  text-left  transition-all  sm:p-6">
                    <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-red-600" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>

                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <button className="text-base font-semibold leading-6 text-gray-900">
                                Delete employee
                            </button>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Are you sure you want to Delete your employee? All of your data will be permanently removed
                                    from our servers forever. This action cannot be undone.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={closeDelete}
                        >
                            Delete
                        </button>
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={closeDelete}
                        // ref={cancelButtonRef}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Dialog>

            <Modal title="Update Employee" size="lg" opened={opened} onClose={close}>
                <div className='bg-white space-y-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="">First Name</label>
                        <Input placeholder='First Name' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Other Name</label>
                        <Input placeholder='Other Name' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Surname</label>
                        <Input placeholder='Surname' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Email</label>
                        <Input placeholder='Email' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Phone</label>
                        <Input placeholder='Phone' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Title</label>
                        <Select placeholder='Title' data={[
                            {
                                value: "Front-end Developer",
                                label: "Front-end Developer"
                            },
                            {
                                value: "Backend Developer",
                                label: "Backend Developer"
                            },
                            {
                                value: "Project Manager",
                                label: "Project Manager"
                            }
                        ]} />
                    </div>
                </div>
                <Footer height={"auto"} className="py-2">
                    <button
                        type="button"
                        className="inline-flex w-full justify-between items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Update Employee
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </Footer>
            </Modal>

        </div >
    )
}

export default EmployeeActions