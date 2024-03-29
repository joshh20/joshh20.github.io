import { useOutletContext } from "react-router-dom";
export default function Tools() {
    const configData = useOutletContext();
    return (
        <section>
            <div className="mt-6 rounded-md bg-slate-200/10 p-8 text-slate-800 shadow-md dark:bg-slate-900 dark:text-slate-300 sm:mt-12">
                <h2 className="mb-8 text-center text-2xl font-semibold text-slate-800 dark:text-slate-300">
                    Some languages and tools that I use
                </h2>
                <div className="mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-8 font-semibold">
                    {configData.technologies
                        .filter((item) => item.highlight)
                        .map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center duration-200 hover:scale-125"
                            >
                                <img
                                    src={item.image}
                                    className="aspect-square w-16 sm:w-24"
                                    aria-label={item.name}
                                    loading="lazy"
                                />
                                <h3 className="mt-4">{item.name}</h3>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
