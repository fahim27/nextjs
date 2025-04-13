'use client';
export default function Error({ error, reset }) {
    const isDev = process.env.NODE_ENV === 'development';
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
                <h2 className="text-danger mb-3">
                    {isDev ? error?.message || 'An error occurred' : 'Something went wrong!'}
                </h2>
                <button className="btn btn-outline-danger" onClick={() => reset()}>
                    Try Again
                </button>
            </div>
        </div>
    );
}
