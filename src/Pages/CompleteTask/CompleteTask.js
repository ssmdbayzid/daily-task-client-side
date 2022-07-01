import React from 'react';
import { useQuery } from 'react-query';

const CompleteTask = () => {
    const { data: allTask, isLoading, refetch } = useQuery('task', () => fetch('http://localhost:5000/taskComplete').then(res => res.json()))

    return (
        <div class="card h-screen w-1/2 mx-auto bg-accent shadow-xl">
            <div class="card-body ">
                <h2 class=" font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center ">Task Completed {allTask && allTask.length}</h2>
                
                <div>
                    {
                        allTask && allTask.map(task =>
                            <div className='shadow-2xl bg-orange-100 p-2 align-center mx-12 flex m-3'>
                                <input type="checkbox" class="checkbox mr-3" disabled/>
                                <h1 className='w-[80%]'>Tast Details {task.task} </h1>
                                <h1>Completed</h1>
                            </div>
                        )
                    }

                </div>
                {/* <div className='shadow-2xl bg-orange-100 p-2 align-center mx-12 flex m-3'>
                    <input type="checkbox" class="checkbox mr-3" />
                    <h1>Tast Details </h1>
                    <h1>Edit</h1>
                </div> */}
            </div>
        </div>
    );
};

export default CompleteTask;