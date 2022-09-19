import { Icon } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdGroups } from "react-icons/md";

const ApplicationDetails = () => {

    const [Applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            // fetch("http://localhost:8082/appcodedetails")
            fetch("http://localhost:8082/dept/appcodedetails")

                .then((data) => {
                    const res = data.json();
                    return res
                }).then((res) => {
                    setApplications(res)
                    console.log("resss", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])


    return (
        <div>


            <div class="flex flex-col mt-8">
                <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table class="min-w-full">
                            <thead>
                                <tr>
                                    <th
                                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Application Name
                                    </th>
                                  
                                </tr>
                            </thead>

                            <tbody class="bg-white">
                                {
                                    Applications.map(e =>

                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
                                                    <div class="flex-shrink-0 w-10 h-10">
                                                        {/* <Icon name="groups" size="3xl" color="black" /> */}
                                                        <MdGroups size={30}/>
                                                    </div>
                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium leading-5 text-gray-900">                                                                          
                                                            <NavLink to={`/applicationinfo/${e.auaCode}`}>{e.auaCode}</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div>
                 
            </div>


        </div>
    )
}

export default ApplicationDetails
