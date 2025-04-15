import LoginForm from "@/components/web/user/login/LoginForm";

export default function Page() {
    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <div className="my-5">
                    <hr />
                    <hr />
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
