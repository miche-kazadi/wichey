export default function Footer() { 
    return (
        <footer className="bg-dark text-white text-center py-3 mt-7">
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}   