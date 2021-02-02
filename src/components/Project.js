import React, { useEffect, useState } from 'react';
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            project,Type,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error)
    }, []);

    return (
        <main className="bg-yellow-900 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Projects</h1>
                <h2 className="text-lg text-yellow-600 flex justify-center mb-12"> Deployed projects</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-yellow-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener norefresher"
                            >
                            {project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-yellow-700 leading-relaxed">
                                {project.description}
                            </p>
                            <span role="img" aria-label="right pointer">
                                👉🏾
                            </span>
                            <a href={project.link} rel="noopener norefresher" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                            View The Project{" "}
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
        )
}
