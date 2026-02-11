export default function Footer() {
    return (
        <footer className="custom-footer text-center mt-5">
            <div className="container py-4">
                <p className="mb-1 fw-semibold text-light">
                    My Portfolio
                </p>

                <p className="mb-0 small text-secondary">
                    © {new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </footer>
    );
}
