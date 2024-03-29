export default function Footer({ configData }) {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="py-4 text-center font-semibold text-slate-800 dark:text-slate-300">
                <span>
                    {`© ${configData.name.first} ${configData.name.last} ${currentYear}`}
                </span>
            </div>
        </footer>
    );
}
