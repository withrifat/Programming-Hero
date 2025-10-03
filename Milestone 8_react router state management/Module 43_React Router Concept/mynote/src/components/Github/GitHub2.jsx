import React from 'react';
import { useLoaderData } from 'react-router';
import (useLoaderData) 

const GitHub2 = () => {
    const data = useLoaderData()


 return (
    <div className="container mx-auto bg-gray-700 text-white p-6 rounded-lg space-y-4 text-lg">
      <div className="flex items-center space-x-4">
        <img src={data.avatar_url} alt={data.login} className="w-20 h-20 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">{data.name} ({data.login})</h1>
          <p>{data.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <p><strong>Company:</strong> {data.company}</p>
        <p><strong>Location:</strong> {data.location}</p>
        <p><strong>Blog:</strong> <a href={data.blog} target="_blank" rel="noopener noreferrer">{data.blog}</a></p>
        <p><strong>Public Repos:</strong> {data.public_repos}</p>
        <p><strong>Public Gists:</strong> {data.public_gists}</p>
        <p><strong>Followers:</strong> {data.followers}</p>
        <p><strong>Following:</strong> {data.following}</p>
        <p><strong>Account Created:</strong> {new Date(data.created_at).toLocaleDateString()}</p>
        <p><strong>Last Updated:</strong> {new Date(data.updated_at).toLocaleDateString()}</p>
      </div>

      <div>
        <a 
          href={data.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 underline"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GitHub2;



export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/withrifat')
    return response.json()
}