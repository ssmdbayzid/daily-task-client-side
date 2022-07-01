import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';

const TodoList = () => {
    
    const { data: allTask, isLoading, refetch } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()))


    // if(isLoading){
    //     return <Loading></Loading>
    // }
console.log(allTask)
    const addTask = event => {
        event.preventDefault()
        const task = event.target.task.value;
        console.log(task)

        fetch(`http://localhost:5000/task`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({task: task})
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })

    }

    const taskComplete = (id) =>{

        console.log(id)
        fetch(`http://localhost:5000/taskComplete`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id})
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }

    return (
        <div class="card h-screen w-1/2 mx-auto bg-accent shadow-xl">
            <div class="card-body ">
                <h2 class=" font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center ">To Do List </h2>
                <form onSubmit={addTask} className='flex mx-8 rounded justify-center'>
                    <input name='task' className='bg-orange-100 w-[70%] p-2' type="text" placeholder="Add Your Task" />
                    <input className='text-center bg-orange-500 p-2 btn-outline' type="submit" value="Add Task" />
                </form>
                <div>
                    {
                        allTask && allTask.map(task=>
                            <div className='shadow-2xl bg-orange-100 p-2 align-center mx-12 flex m-3'>
                            <input onClick={()=>taskComplete(task._id)} type="checkbox" class="checkbox mr-3" />
                            <h1 className='w-[80%]'>Tast Details {task.task} </h1>
                            <h1>Edit</h1>
                        </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default TodoList;