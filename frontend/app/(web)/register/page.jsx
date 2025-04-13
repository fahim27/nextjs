import RegisterForm from '@/components/web/user/register/RegisterForm'
import Form from '@/components/ui/form/Form'
import React from 'react'

export default function Page() {
    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <div className="my-5">
                    <hr />
                    <hr />
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
