import { Footer, Input, Modal, Select } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { Fragment } from 'react'

type Props = {}

const AddEmployee = (props: Props) => {
    const [opened, { close, open }] = useDisclosure(false)
    return (
        <Fragment>
            <button onClick={open} type="button" className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add user</button>

            <Modal title="Add Employee" size="lg" opened={opened} onClose={close}>
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
                        Add Employee
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </Footer>
            </Modal>
        </Fragment>
    )
}

export default AddEmployee